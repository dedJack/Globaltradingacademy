"use client";
import { ExternalLink, Globe, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Resources() {
  const [brokers, setBrokers] = useState([]);
  const [particles, setParticles] = useState([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(25)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setParticles(generatedParticles);
  }, []);

  const fetchBrokers = async () => {
    try {
      const response = await fetch("/api/contact/broker", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data.link);
      if (response.ok) {
        setBrokers(data.link);
      }
    } catch (error) {
      console.log("Error fetching links", error);
    }
  };

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    fetchBrokers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center my-14 space-y-6">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Resources</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            These are brokers our academy personally trusts and recommends for traders looking for reliable platforms.
          </p>
        </div>

        {/* Brokers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker, index) => (
            <div
              key={broker._id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Globe className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Broker Name */}
                  <h2 className="text-2xl font-bold text-white text-center mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {broker.linkName}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-center text-sm mb-6 min-h-[60px] group-hover:text-gray-300 transition-colors duration-300">
                    {broker.description || "Explore this trusted resource for your trading journey"}
                  </p>

                  {/* Visit Button */}
                  <button
                    onClick={() => handleClick(broker.link)}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Visit Resource</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* URL Preview */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink className="w-3 h-3" />
                    <span className="truncate max-w-[200px]">{broker.link}</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {brokers.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl backdrop-blur-sm border border-cyan-500/20 mb-6">
              <Sparkles className="w-12 h-12 text-cyan-400 opacity-50" />
            </div>
            <p className="text-gray-500 text-lg">Loading resources...</p>
          </div>
        )}

        {/* Footer Warning */}
        <div className="mt-20 backdrop-blur-xl bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h3 className="text-amber-400 font-semibold mb-2">Important Notice</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trading involves risk. These brokers are shared based on our experience and are not investment advice. Always do your own research before making any financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32 bg-cyan-600/10 blur-3xl"></div>
    </div>
  );
}