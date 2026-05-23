"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ── config ────────────────────────────────────────────────────────────────
    const CONFIG = {
      particleCount: 150,
      connectionDistance: 180,
      mouseRadius: 200,
      mouseForce: 0.4,
      speed: 0.5,
      particleSize: { min: 1, max: 2.8 },
      depthLayers: 3,           // simulated z-depth
      colors: {
        primary: [99, 179, 237],   // blue-300
        accent:  [167, 139, 250],  // purple-400
        glow:    [59, 130, 246],   // blue-500
      },
    };

    // ── resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── particle factory ──────────────────────────────────────────────────────
    const rand = (a, b) => Math.random() * (b - a) + a;

    const makeParticle = () => {
      const depth  = Math.floor(rand(0, CONFIG.depthLayers));   // 0=far, 2=near
      const scale  = 0.4 + (depth / (CONFIG.depthLayers - 1)) * 0.6;
      const hue    = Math.random() > 0.5 ? CONFIG.colors.primary : CONFIG.colors.accent;

      return {
        x:   rand(0, canvas.width),
        y:   rand(0, canvas.height),
        vx:  rand(-CONFIG.speed, CONFIG.speed) * (scale + 0.1),
        vy:  rand(-CONFIG.speed, CONFIG.speed) * (scale + 0.1),
        r:   rand(CONFIG.particleSize.min, CONFIG.particleSize.max) * scale,
        depth,
        scale,
        color: hue,
        alpha: 0.25 + scale * 0.55,
        pulse: rand(0, Math.PI * 2),
        pulseSpeed: rand(0.008, 0.022),
      };
    };

    let particles = Array.from({ length: CONFIG.particleCount }, makeParticle);

    // ── mouse ─────────────────────────────────────────────────────────────────
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouch = (e) => {
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });

    // ── draw helpers ──────────────────────────────────────────────────────────
    const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a.toFixed(3)})`;

    const drawParticle = (p) => {
      p.pulse += p.pulseSpeed;
      const pulse = Math.sin(p.pulse) * 0.15 + 0.85;
      const finalR = p.r * pulse;
      const finalA = p.alpha * pulse;

      // glow halo for near particles
      if (p.depth === CONFIG.depthLayers - 1) {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, finalR * 4);
        grd.addColorStop(0, rgba(p.color, finalA * 0.6));
        grd.addColorStop(1, rgba(p.color, 0));
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalR * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, finalR, 0, Math.PI * 2);
      ctx.fillStyle = rgba(p.color, finalA);
      ctx.fill();
    };

    const drawLine = (a, b, dist, maxDist) => {
      const t = 1 - dist / maxDist;
      const depthFade = (a.scale + b.scale) / 2;
      const alpha = t * t * depthFade * 0.55;
      if (alpha < 0.01) return;

      // gradient line for depth feel
      const grd = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      grd.addColorStop(0, rgba(a.color, alpha));
      grd.addColorStop(1, rgba(b.color, alpha));

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = grd;
      ctx.lineWidth = depthFade * 1.1;
      ctx.stroke();
    };

    // mouse-repulsion glow ring
    const drawMouseGlow = (mx, my) => {
      if (mx < 0) return;
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, CONFIG.mouseRadius * 0.8);
      g.addColorStop(0, rgba(CONFIG.colors.glow, 0.07));
      g.addColorStop(0.5, rgba(CONFIG.colors.glow, 0.03));
      g.addColorStop(1, rgba(CONFIG.colors.glow, 0));
      ctx.beginPath();
      ctx.arc(mx, my, CONFIG.mouseRadius * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    // ── main loop ─────────────────────────────────────────────────────────────
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;

      drawMouseGlow(mx, my);

      // update positions
      for (const p of particles) {
        // mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseRadius && dist > 0.1) {
          const force = (1 - dist / CONFIG.mouseRadius) * CONFIG.mouseForce * p.scale;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = CONFIG.speed * 2.5 * p.scale;
        if (speed > maxSpeed) { p.vx = (p.vx / speed) * maxSpeed; p.vy = (p.vy / speed) * maxSpeed; }

        p.x += p.vx;
        p.y += p.vy;

        // wrap edges with margin
        const margin = 60;
        if (p.x < -margin) p.x = canvas.width + margin;
        if (p.x > canvas.width + margin) p.x = -margin;
        if (p.y < -margin) p.y = canvas.height + margin;
        if (p.y > canvas.height + margin) p.y = -margin;
      }

      // draw connections (sorted by depth for painter's algorithm)
      const sorted = [...particles].sort((a, b) => a.depth - b.depth);
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i], b = sorted[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONFIG.connectionDistance) drawLine(a, b, d, CONFIG.connectionDistance);
        }
        drawParticle(sorted[i]);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
}