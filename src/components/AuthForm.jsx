
"use client";

import { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff, TrendingUp, Shield, Zap, Globe, ChevronRight, Mail, User, Phone, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { NoteContext } from '../context/AuthContext';

export default function AuthForm({ mode = "signup" }) {

    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const router = useRouter();
    const { user, isLoggedIn, LogoutUser,serverTokenLS } = useContext(NoteContext);

    //UseEffect to show Appearing signup form from opacity-0 to 100
    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fixed form submission validation
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, password } = formData;

        if (mode === 'signup') {
            if (name === '') {
                toast.error('Enter Your name');
                return;
            }
            if (email === '') {
                toast.error('Enter a valid Email');
                return;
            }
            if (!email.includes("@")) {
                toast.error('Enter a valid Email');
                return;
            }
            if (phone === '') {
                toast.error('Enter phone number');
                return;
            }
            if (phone.length < 10) {
                toast.error('Enter a valid number');
                return;
            }
            if (password === '') {
                toast.error('Enter your password');
                return;
            }
            if (password.length < 6) {
                toast.error('Password should be atleast 6 letters');
                return;
            }
        } else {
            if (email === '') {
                toast.error('Enter a valid Email');
                return;
            }
            if (!email.includes("@")) {
                toast.error('Enter a valid Email');
                return;
            } if (password === '') {
                toast.error('Enter your password');
                return;
            }
            if (password.length < 6) {
                toast.error('Password should be atleast 6 letters');
                return;
            }
        }

        try {
            if (mode === 'signup') {
                console.log("hiii")
                try {
                    const respone = await fetch(`/api/auth/register`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        }, body: JSON.stringify(formData)
                    });

                    const data = await respone.json();
                    // console.log(data);
                    if (respone.ok) {
                        serverTokenLS(data.token);
                        toast.success("user successfully")
                        setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            password: ""
                        })
                        router.push("/login");
                    } else {
                        console.error(data.msg);
                    }
                } catch (error) {
                    console.log("Enter valid details: ", error);
                }
            } else {
                try {
                    const response = await fetch(`/api/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        }, body: JSON.stringify(formData)
                    });
                    const data = await response.json();
                    if (response.ok) {
                        toast.success("User logged In.")
                        //saving the token in localStorage.
                        serverTokenLS(data.token);
                        setFormData({
                            email: "",
                            password: ""
                        })
                        router.push("/")
                    } else {
                        toast.error("Invalid credentials");
                    }
                } catch (error) {
                    console.log("Login error ", error);
                }
            }
        } catch (error) {
            console.log("Enter valid details: ", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Branding & Features */}
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-8 xl:px-16 py-12">
                    <div className="max-w-md mx-auto w-full">
                        {/* Logo */}
                        <div className="flex items-center mb-6 lg:mb-8">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <TrendingUp className="w-6 h-6 text-gray-900" />
                            </div>
                            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 bg-clip-text text-transparent">
                                TradePro
                            </h1>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                            Start Your Trading Journey
                            <span className="block text-emerald-400">Today</span>
                        </h2>

                        <p className="text-gray-400 text-base lg:text-lg mb-8 lg:mb-12">
                            Join thousands of traders who trust our platform for secure, fast, and profitable trading experiences.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-center space-x-3 lg:space-x-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm lg:text-base">Bank-Level Security</h3>
                                    <p className="text-gray-400 text-xs lg:text-sm">Advanced encryption & 2FA protection</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm lg:text-base">Lightning Fast Execution</h3>
                                    <p className="text-gray-400 text-xs lg:text-sm">Execute trades in milliseconds</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm lg:text-base">Global Markets</h3>
                                    <p className="text-gray-400 text-xs lg:text-sm">Access to 50+ international markets</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-6">
                            <div>
                                <div className="text-xl lg:text-2xl font-bold text-emerald-400">1M+</div>
                                <div className="text-gray-400 text-xs lg:text-sm">Active Traders</div>
                            </div>
                            <div>
                                <div className="text-xl lg:text-2xl font-bold text-cyan-400">$2.5B+</div>
                                <div className="text-gray-400 text-xs lg:text-sm">Volume Traded</div>
                            </div>
                            <div>
                                <div className="text-xl lg:text-2xl font-bold text-purple-400">99.9%</div>
                                <div className="text-gray-400 text-xs lg:text-sm">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className={`w-full max-w-md relative top-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Mobile Logo */}
                        <div className="lg:hidden  flex items-center justify-center mb-6 sm:mb-8">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg flex items-center justify-center mr-3">
                                <TrendingUp className="w-6 h-6 text-gray-900" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                TradePro
                            </h1>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sm:p-8 shadow-2xl">
                            <div className="text-center mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Create Your Account</h2>
                                <p className="text-gray-400 text-sm sm:text-base">Join the future of trading</p>
                            </div>

                            {/* Form Structure */}
                            <div className="space-y-4 sm:space-y-6" >
                                {/* Name Field */}
                                {mode === 'signup' && (
                                    <>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={onChange}
                                                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={onChange}
                                                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                                                required
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Email Field */}
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={onChange}
                                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={onChange}
                                        className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                                    </button>
                                </div>

                                {/* Submit Button - Now inside form */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-lg text-sm sm:text-base transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center space-x-2"
                                >
                                    <span>{mode === "login" ? "Enter GTA" : "Create Account"}</span>
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {/* Sign In Link */}
                            <div className="text-center mt-4 sm:mt-6">
                                {mode === "signup" ? (
                                    <p className="text-gray-400 text-sm sm:text-base">
                                        Already have an account?{' '}
                                        <Link href="/login" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                                            login
                                        </Link>
                                    </p>
                                ) : (
                                    <p className="text-gray-400 text-sm sm:text-base">
                                        Don't have an account?{' '}
                                        <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                                            Sign In
                                        </Link>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Trusted by traders worldwide</p>
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-60">
                                <div className="text-xs">🏆 Award Winner</div>
                                <div className="text-xs">🔐 SEC Regulated</div>
                                <div className="text-xs">💳 FDIC Insured</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}