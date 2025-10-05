"use client";
import { useState, useEffect } from 'react';
import { ExternalLink, Globe, ArrowRight, Sparkles} from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faTelegram, faYoutube, faGoogle,faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

export default function LinksShowcase() {
  const [particles, setParticles] = useState([]);
  
  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setParticles(generatedParticles);
  }, []);

  // Sample links - replace with your backend data
  const [links] = useState([
  { id: 1, name: 'Instagram', url: 'https://www.instagram.com/globaltrading.academy?igsh=MjYydjEzbTVjZzhj ', icon: faInstagram },
  { id: 2, name: 'WhatsApp Community', url: 'https://chat.whatsapp.com/GozKEJdz1G6CYUMvGeqJFN?mode=ems_wa_t', icon: faWhatsapp },
  { id: 3, name: 'Telegram Community', url: 'http://t.me/globaltrading_academy_GTA', icon: faTelegram },
  { id: 4, name: 'YouTube', url: 'https://youtube.com/@globaltradingacademy-bilaspur?si=ZjzzT59_07_SYthx ', icon: faYoutube },
  { id: 5, name: 'Trading E-book (for beginners)', url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfd2aeL3VSoLq7dotnVRGCPQaqAEF0ilYptMSm2F7i30ijqOw/viewform?fbclid=PAVERFWANPiRFleHRuA2FlbQIxMQABp4zAIVZ2TyQ7kYAktFQdXY4pgK6wJ0KXfbDo-dJZmYEp8HcwNic5JXY2jHOn_aem_UXmgH_CeLhWr69VlRcSAiw&pli=1', icon: faGoogleDrive },
  { id: 6, name: 'Review Us on Google', url: 'https://maps.app.goo.gl/kfi8h1ewqNn615VH8?g_st=com.google.maps.preview.copy', icon: faGoogle }
]);

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-10 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-10 top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

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
      `}</style>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center my-12 space-y-4">
          <div className="inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 mb-4">
            <Globe className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Explore</span> Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my digital presence across the web. Click on any link to visit.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {links.map((link, index) => (
            <div
              key={link.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Card */}
              <button
                onClick={() => handleLinkClick(link.url)}
                className="relative w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-left overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                
                {/* Content */}
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-110">
  <FontAwesomeIcon icon={link.icon} className="w-9 h-9 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
</div>
                  
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {link.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span className="truncate">{link.url}</span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 text-gray-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">Click any card to visit the link</span>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32 bg-cyan-600/10 blur-3xl"></div>
    </div>
  );
}