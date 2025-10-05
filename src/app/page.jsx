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
  Menu,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    enquiry: "",
  });
  const router = useRouter();

  // Fix hydration error by ensuring component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle enrollment button click
  const handleEnroll = () => {
    router.push("/Enroll");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
      console.log(formData)

    try {
      const response = await fetch("api/contact/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const data = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", enquiry: "" });
        toast.success("We will contact you soon");
      }
    } catch (error) {
      console.log("Error in form submission:", error);
    }
  };

  // Prevent hydration mismatch by not rendering scroll-dependent UI until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Navbar without scroll effects */}
        <Navbar />
        {/* Loading placeholder */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black/35"></div>
          <div className=" w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
            <div className="relative w-full h-full ">
              <img
                src="/shubham.png"
                alt="shubham"
                className="w-full h-full object-contain  shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
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
            Enroll Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Our Institute
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

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex items-center py-20 px-4 bg-gray-800/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service}
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional training designed to enhance your trading skills
                  and market understanding.
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to start your trading journey? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                  <Mail size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">info@tradeacademy.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-pink-600/20 p-3 rounded-lg group-hover:bg-pink-600/30 transition-colors duration-300">
                  <MapPin size={24} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">
                    123 Trading St, Financial District
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Alex Smith"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="customer@email.com"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="(+91) 98765 43210"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={onChange}
                    placeholder="Your Message here..."
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            GlobalTradingAcademy
          </h3>
          <p className="text-gray-400 mb-4">Empowering traders worldwide</p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleEnroll}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Start Learning Today
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 Global Trading Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
