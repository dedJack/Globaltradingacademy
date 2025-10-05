"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = contact;

    if (!name) {
      alert("Enter your name.");
    } else if (!email) {
      alert("Enter your email.");
    } else if (!email.includes("@")) {
      alert("Enter valid email.");
    } else if (!phone) {
      alert("Provide phone no.");
    } else {
      try {
        const response = await fetch('/api/contact/contact', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
        // eslint-disable-next-line
        const data = await response.json();
        console.log(data)
        if (response.ok) {
          // console.log("contact form:", data);
          toast.success("Contact Submitted.");
          setContact({
            name: "",
            email: "",
            phone: "",
          });
        }
      } catch (error) {
        console.log("Contact server error: ", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div
          className={`pt-20 pb-12 px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">
                Global Trading Education
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your trading journey? Connect with our expert team
              today.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-5000 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contact.name}
                      onChange={onChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contact.email}
                      onChange={onChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contact.phone}
                      onChange={onChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-fuchsia-950  to-purple-900 hover:from-emerald-900 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Company Details Card */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Global Trading Academy
                </h3>
                <p className="text-gray-400 mb-8">
                  Forex Trading and Market Research Excellence
                </p>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/+919202103433?text=Hello, I need some assistance!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call Us</p>
                      <p className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        +91 9202103433
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:Teamglobaltradingacademy@gmail.com"
                    className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Us</p>
                      <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors break-all">
                        Teamglobaltradingacademy@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Visit Us</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        1st Floor Aditya Tower, Opp. 90 degree fitness gym,
                        Dayalband, Bilaspur, Chhattisgarh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Card */}
              <div className="bg-gradient-to-br from-emerald-900/30 to-blue-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Career Opportunities
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Join our team of trading professionals and grow your career in
                  the financial markets.
                </p>
                <button className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-2 group">
                  Contact Us for Careers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Global Trading Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
