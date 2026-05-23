"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    enquiry: "",
  });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnroll = () => {
    router.push("/Enroll");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("api/contact/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", email: "", number: "", enquiry: "" });
        toast.success("We will contact you soon");
      }
    } catch (error) {
      console.log("Error in form submission:", error);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading Global Trading Academy...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Global Particle Canvas ──────────────────────────────────────────── */}
      <ParticleBackground />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black/35" />
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/shubham.png"
                width={800}
                height={800}
                alt="Global Trading Academy founder"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Academy name badge */}
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-widest uppercase animate-fade-in-up">
            Global Trading Academy
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Master Trading
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Transform your financial future with professional trading education
          </p>
          <button
            onClick={handleEnroll}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400"
          >
            Enroll Now — Global Trading Academy
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Global Trading Academy
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are dedicated to providing world-class trading education that
              empowers individuals to achieve financial independence through
              strategic market knowledge and practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: "Expert Instructors",
                description:
                  "Learn from seasoned professionals with years of market experience",
              },
              {
                icon: <TrendingUp size={48} />,
                title: "Proven Strategies",
                description:
                  "Master time-tested trading techniques that deliver consistent results",
              },
              {
                icon: <Award size={48} />,
                title: "Certified Programs",
                description:
                  "Earn recognized certifications that boost your credibility in the market",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative min-h-screen flex items-center py-20 px-4 "
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Global Trading Academy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive trading education tailored to your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Beginner Trading Course",
              "Advanced Technical Analysis",
              "Risk Management Training",
              "Live Trading Sessions",
              "Portfolio Management",
              "Market Psychology",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service}
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional training at Global Trading Academy designed to
                  enhance your trading skills and market understanding.
                </p>
                <button
                  onClick={handleEnroll}
                  className="mt-4 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Global Trading Academy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to start your trading journey? Contact Global Trading Academy today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
  <a
    href="tel:+919202103433"
    className="flex items-center space-x-4 group cursor-pointer"
  >
    <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
      <Phone size={24} className="text-blue-400" />
    </div>
    <div>
      <h3 className="font-semibold text-white">Phone</h3>
      <p className="text-gray-400 group-hover:text-blue-400 transition-colors">
        +91 92021 03433
      </p>
    </div>
  </a>

  <a
    href="mailto:Teamglobaltradingacademy@gmail.com"
    className="flex items-center space-x-4 group cursor-pointer"
  >
    <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
      <Mail size={24} className="text-purple-400" />
    </div>
    <div>
      <h3 className="font-semibold text-white">Email</h3>
      <p className="text-gray-400 group-hover:text-purple-400 transition-colors">
        Teamglobaltradingacademy@gmail.com
      </p>
    </div>
  </a>

  <a
    href="https://maps.google.com/?q=1st+Floor+Aditya+Tower+opp.+90+degree+fitness+gym+Dayalband+Bilaspur+Chhattisgarh+495001"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group cursor-pointer"
  >
    <div className="bg-pink-600/20 p-3 rounded-lg group-hover:bg-pink-600/30 transition-colors duration-300">
      <MapPin size={24} className="text-pink-400" />
    </div>
    <div>
      <h3 className="font-semibold text-white">Location</h3>
      <p className="text-gray-400 group-hover:text-pink-400 transition-colors">
        1st Floor, Aditya Tower, opp. 90 degree fitness gym, Dayalband,
        Bilaspur, Chhattisgarh 495001
      </p>
    </div>
  </a>
</div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="customer@email.com"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={onChange}
                  placeholder="(+91) 98765 43210"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
                <textarea
                  rows={4}
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={onChange}
                  placeholder="Your message for Global Trading Academy..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message to Global Trading Academy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="relative bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Global Trading Academy
          </h3>
          <p className="text-gray-400 mb-4">Empowering traders worldwide</p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleEnroll}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Start Learning at Global Trading Academy
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} Global Trading Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;