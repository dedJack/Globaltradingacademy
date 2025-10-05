'use client';

import React, { useState } from 'react';
import { X, TrendingUp, DollarSign, BarChart3, LineChart, Bitcoin, Shield, Repeat, Target, Brain, GraduationCap, Users, Briefcase } from 'lucide-react';

const benefitsData = [
  {
    title: 'Forex Market',
    icon: DollarSign,
    links: `<div class="space-y-4">
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <h4 class="text-lg font-semibold text-emerald-400 mb-2">What is Forex?</h4>
        <p class="text-gray-300">The forex market is where currencies are bought and sold.</p>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <h4 class="text-lg font-semibold text-emerald-400 mb-2">Largest Market</h4>
        <p class="text-gray-300">It's the biggest financial market in the world, with trillions of dollars traded daily.</p>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <h4 class="text-lg font-semibold text-emerald-400 mb-2">24/5 Trading</h4>
        <p class="text-gray-300">Forex trading happens 24 hours a day, five days a week, so you can trade anytime.</p>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <h4 class="text-lg font-semibold text-emerald-400 mb-2">Currency Pairs</h4>
        <p class="text-gray-300">Currencies are traded in pairs, like EUR/USD (Euro/US Dollar).</p>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <h4 class="text-lg font-semibold text-emerald-400 mb-2">Leverage & Liquidity</h4>
        <p class="text-gray-300">Traders can use borrowed money (leverage) to increase potential profits. The forex market is very liquid, allowing quick transactions.</p>
      </div>
    </div>`
  },
  {
    title: 'Indian Market',
    icon: TrendingUp,
    links: `<div class="space-y-4">
      <h3 class="text-xl font-bold text-emerald-400 mb-3">Key Exchanges</h3>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <strong class="text-green-400">Bombay Stock Exchange (BSE)</strong>
        <p class="text-gray-300 mt-2">Established in 1875, BSE is Asia's oldest stock exchange featuring the Sensex index.</p>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-lg">
        <strong class="text-green-400">National Stock Exchange (NSE)</strong>
        <p class="text-gray-300 mt-2">Founded in 1992, NSE features the Nifty 50 index representing top 50 companies.</p>
      </div>
      <h3 class="text-xl font-bold text-emerald-400 mt-6 mb-3">Trading Mechanisms</h3>
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-gray-800/50 p-3 rounded">
          <p class="text-gray-300"><span class="text-amber-400 font-semibold">Cash Market:</span> Immediate delivery</p>
        </div>
        <div class="bg-gray-800/50 p-3 rounded">
          <p class="text-gray-300"><span class="text-amber-400 font-semibold">Derivatives:</span> Futures & options</p>
        </div>
        <div class="bg-gray-800/50 p-3 rounded">
          <p class="text-gray-300"><span class="text-amber-400 font-semibold">Currency:</span> Forex trading</p>
        </div>
        <div class="bg-gray-800/50 p-3 rounded">
          <p class="text-gray-300"><span class="text-amber-400 font-semibold">Commodity:</span> Gold, oil, agri</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Fundamental Analysis',
    icon: BarChart3,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
        Fundamental stock analysis evaluates a stock's intrinsic value based on economic, financial, and qualitative factors to determine if it's overvalued, undervalued, or fairly valued.
      </p>
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-4 rounded-lg border border-emerald-700/30">
          <h5 class="text-lg font-semibold text-emerald-400 mb-2">Financial Statements</h5>
          <p class="text-sm text-gray-300">Income Statement, Balance Sheet, Cash Flow</p>
        </div>
        <div class="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-lg border border-amber-700/30">
          <h5 class="text-lg font-semibold text-amber-400 mb-2">Valuation Ratios</h5>
          <p class="text-sm text-gray-300">P/E Ratio, P/B Ratio, Dividend Yield</p>
        </div>
        <div class="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/30">
          <h5 class="text-lg font-semibold text-green-400 mb-2">Growth Analysis</h5>
          <p class="text-sm text-gray-300">Earnings & Revenue Growth Trends</p>
        </div>
        <div class="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-700/30">
          <h5 class="text-lg font-semibold text-orange-400 mb-2">Competitive Position</h5>
          <p class="text-sm text-gray-300">Market Share & Competitive Advantage</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Technical Analysis',
    icon: LineChart,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
        Technical analysis evaluates and predicts future stock price movements based on historical price data, trading volumes, and chart patterns.
      </p>
      <div class="space-y-3">
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-emerald-500">
          <h6 class="font-semibold text-emerald-400">Price Charts & Trends</h6>
          <p class="text-sm text-gray-300 mt-1">Analyze patterns and market direction</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h6 class="font-semibold text-green-400">Support & Resistance</h6>
          <p class="text-sm text-gray-300 mt-1">Key price levels for trading decisions</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-amber-500">
          <h6 class="font-semibold text-amber-400">Technical Indicators</h6>
          <p class="text-sm text-gray-300 mt-1">Moving Averages, RSI, MACD, Bollinger Bands</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-orange-500">
          <h6 class="font-semibold text-orange-400">Volume Analysis</h6>
          <p class="text-sm text-gray-300 mt-1">Trading volume confirmation signals</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Crypto Currency',
    icon: Bitcoin,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-4 rounded-lg border border-yellow-700/30">
        Trading cryptocurrency involves buying and selling digital assets 24/7 in a highly volatile market environment.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <h6 class="font-semibold text-yellow-400 mb-2">Trading Strategies</h6>
          <p class="text-sm text-gray-300">Day Trading, Swing Trading, HODLing, Scalping</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <h6 class="font-semibold text-yellow-400 mb-2">Major Exchanges</h6>
          <p class="text-sm text-gray-300">Centralized & Decentralized platforms</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <h6 class="font-semibold text-yellow-400 mb-2">Risk Management</h6>
          <p class="text-sm text-gray-300">Diversification & Stop-loss orders</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <h6 class="font-semibold text-yellow-400 mb-2">Stay Compliant</h6>
          <p class="text-sm text-gray-300">Tax obligations & regulations</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Binary Trading',
    icon: Repeat,
    links: `<div class="space-y-4">
      <div class="bg-gradient-to-r from-red-900/30 to-rose-900/30 p-6 rounded-lg border border-red-700/30">
        <p class="text-gray-300">
          Binary trading is a financial method where the outcome is a simple yes/no proposition. Traders predict whether the price of an asset will be above or below a specified level at a certain time. If correct, they receive a fixed payout. Known for simplicity and fixed risk/reward ratio.
        </p>
      </div>
    </div>`
  },
  {
    title: 'Trade Management',
    icon: Target,
    links: `<div class="space-y-4">
      <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <p class="text-gray-300">
          Trade management involves overseeing and optimizing trades to maximize profitability and minimize risk. It includes setting clear entry and exit points, using stop-loss and take-profit orders, adjusting positions based on market conditions, and regularly reviewing trading strategies. Requires discipline, timely decision-making, and ensures trading objectives align with overall financial goals.
        </p>
      </div>
    </div>`
  },
  {
    title: 'Options Chain',
    icon: Shield,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
        An options chain is a comprehensive listing of all available options contracts for a specific underlying asset, providing detailed information to help traders make informed decisions.
      </p>
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-gradient-to-r from-teal-900/30 to-emerald-900/30 p-4 rounded-lg">
          <strong class="text-teal-400">Components:</strong>
          <p class="text-sm text-gray-300 mt-1">Strike Prices, Expiration Dates, Call & Put Options</p>
        </div>
        <div class="bg-gradient-to-r from-teal-900/30 to-emerald-900/30 p-4 rounded-lg">
          <strong class="text-teal-400">Key Data:</strong>
          <p class="text-sm text-gray-300 mt-1">Bid/Ask Prices, Last Price, Volume, Open Interest</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Hedging Strategy',
    icon: Shield,
    links: `<div class="space-y-4">
      <div class="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 p-6 rounded-lg border border-teal-700/30">
        <h4 class="text-lg font-semibold text-teal-400 mb-3">Risk Management Through Hedging</h4>
        <p class="text-gray-300">
          Hedging is a risk management strategy aimed at reducing potential losses by taking an offsetting position. Often done through derivatives like options, futures, or swaps. For example, buying a put option to protect against stock price declines. Helps protect against adverse price movements while potentially limiting gains.
        </p>
      </div>
    </div>`
  },
  {
    title: 'Scalping Strategy',
    icon: Repeat,
    links: `<div class="space-y-4">
      <div class="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-700/30">
        <h4 class="text-lg font-semibold text-red-400 mb-3">Quick Profit Strategy</h4>
        <p class="text-gray-300">
          Scalping is a short-term trading strategy focused on making small, quick profits by exploiting minor price fluctuations. Scalpers hold positions for seconds to minutes and execute numerous trades throughout the day. Requires precise execution, rapid decision-making, high liquidity, and low transaction costs.
        </p>
      </div>
    </div>`
  },
  {
    title: 'Money Management',
    icon: DollarSign,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
        Money management involves planning, organizing, and controlling financial resources to achieve financial goals and maintain stability.
      </p>
      <div class="space-y-3">
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <strong class="text-green-400">Budgeting:</strong>
          <p class="text-sm text-gray-300 mt-1">Track income and allocate funds efficiently</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <strong class="text-green-400">Saving & Investing:</strong>
          <p class="text-sm text-gray-300 mt-1">Build wealth and secure financial future</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg">
          <strong class="text-green-400">Risk Management:</strong>
          <p class="text-sm text-gray-300 mt-1">Insurance and diversified investments for protection</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Psychology Building',
    icon: Brain,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 p-4 rounded-lg border border-violet-700/30">
        Psychology in stock trading is critical for successful trading, influencing decision-making, risk tolerance, and overall performance.
      </p>
      <div class="space-y-3">
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-violet-500">
          <strong class="text-violet-400">Self-Awareness</strong>
          <p class="text-sm text-gray-300 mt-1">Recognize emotional biases like fear, greed, and overconfidence</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-fuchsia-500">
          <strong class="text-fuchsia-400">Discipline & Patience</strong>
          <p class="text-sm text-gray-300 mt-1">Stick to your trading plan and wait for right opportunities</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500">
          <strong class="text-purple-400">Stress Management</strong>
          <p class="text-sm text-gray-300 mt-1">Handle volatility with relaxation techniques and balanced lifestyle</p>
        </div>
        <div class="bg-gray-800/50 p-4 rounded-lg border-l-4 border-pink-500">
          <strong class="text-pink-400">Continuous Learning</strong>
          <p class="text-sm text-gray-300 mt-1">Adapt to market changes and learn from experiences</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Online/Offline Classes',
    icon: GraduationCap,
    links: `<div class="space-y-6">
      <div class="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-5 rounded-lg border border-emerald-700/30">
        <h4 class="text-lg font-bold text-emerald-400 mb-3">Online Classes Benefits</h4>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start"><span class="text-emerald-400 mr-2">✓</span> <span><strong>Flexibility:</strong> Learn at your own pace and schedule</span></li>
          <li class="flex items-start"><span class="text-emerald-400 mr-2">✓</span> <span><strong>Accessibility:</strong> Study from anywhere with internet</span></li>
          <li class="flex items-start"><span class="text-emerald-400 mr-2">✓</span> <span><strong>Cost-Effective:</strong> Lower costs than in-person classes</span></li>
          <li class="flex items-start"><span class="text-emerald-400 mr-2">✓</span> <span><strong>Self-Paced:</strong> Revisit complex topics anytime</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 p-5 rounded-lg border border-violet-700/30">
        <h4 class="text-lg font-bold text-fuchsia-400 mb-3">Offline Classes Advantages</h4>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start"><span class="text-fuchsia-400 mr-2">✓</span> <span><strong>Direct Interaction:</strong> Real-time feedback from instructors</span></li>
          <li class="flex items-start"><span class="text-fuchsia-400 mr-2">✓</span> <span><strong>Networking:</strong> Connect with traders and professionals</span></li>
          <li class="flex items-start"><span class="text-fuchsia-400 mr-2">✓</span> <span><strong>Hands-On Learning:</strong> Live trading simulations</span></li>
          <li class="flex items-start"><span class="text-fuchsia-400 mr-2">✓</span> <span><strong>Personalized Support:</strong> One-on-one consultations</span></li>
        </ul>
      </div>
    </div>`
  },
  {
    title: '1-1 Doubt Sessions',
    icon: Users,
    links: `<div class="space-y-4">
      <div class="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-lg border border-green-700/30">
        <h4 class="text-lg font-bold text-green-400 mb-4">Personalized Learning Experience</h4>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-start"><span class="text-green-400 mr-2 text-xl">•</span> <span><strong>Personalized Attention:</strong> Tailored guidance for individual challenges</span></li>
          <li class="flex items-start"><span class="text-green-400 mr-2 text-xl">•</span> <span><strong>Focused Learning:</strong> Deep dive into specific topics</span></li>
          <li class="flex items-start"><span class="text-green-400 mr-2 text-xl">•</span> <span><strong>Immediate Feedback:</strong> Prompt responses to keep progress on track</span></li>
          <li class="flex items-start"><span class="text-green-400 mr-2 text-xl">•</span> <span><strong>Custom Strategies:</strong> Refine strategies based on your goals</span></li>
          <li class="flex items-start"><span class="text-green-400 mr-2 text-xl">•</span> <span><strong>Confidence Building:</strong> Direct expert support boosts trading confidence</span></li>
        </ul>
      </div>
    </div>`
  },
  {
    title: 'Portfolio Management',
    icon: Briefcase,
    links: `<div class="space-y-4">
      <p class="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
        Portfolio management involves strategic planning, allocation, and oversight of investments to achieve specific financial goals while optimizing returns and managing risk.
      </p>
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-4 rounded-lg">
          <strong class="text-emerald-400">Goal Setting & Asset Allocation</strong>
          <p class="text-sm text-gray-300 mt-1">Define objectives, time horizon, and diversify across assets</p>
        </div>
        <div class="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-lg">
          <strong class="text-amber-400">Investment Selection & Rebalancing</strong>
          <p class="text-sm text-gray-300 mt-1">Choose quality stocks and maintain target allocations</p>
        </div>
        <div class="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg">
          <strong class="text-green-400">Monitoring & Risk Management</strong>
          <p class="text-sm text-gray-300 mt-1">Track performance, use stop-loss orders, and hedge risks</p>
        </div>
        <div class="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-4 rounded-lg">
          <strong class="text-orange-400">Tax Efficiency & Long-Term Strategy</strong>
          <p class="text-sm text-gray-300 mt-1">Optimize tax impact and maintain consistent review</p>
        </div>
      </div>
    </div>`
  }
];

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <div className="min-h-screen relative top-[3rem] bg-gradient-to-br from-slate-950 via-gray-900 to-neutral-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Trading Academy Benefits
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Master the art of trading with our comprehensive courses and expert guidance
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedBenefit(benefit)}
                className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-900 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-800 hover:border-emerald-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Click to learn more about this topic
                  </p>
                  <div className="mt-4 flex items-center text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedBenefit && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-900 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-800 animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {React.createElement(selectedBenefit.icon, {
                  className: "w-8 h-8 text-white"
                })}
                <h3 className="text-2xl font-bold text-white">
                  {selectedBenefit.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedBenefit(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
              <div
                className="prose prose-invert prose-emerald max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBenefit.links }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-950/50 border-t border-gray-800">
              <button
                onClick={() => setSelectedBenefit(null)}
                className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p className="text-lg">© 2024 Trading Academy. All rights reserved.</p>
          <p className="text-sm mt-2">Empowering traders with knowledge and skills</p>
        </div>
      </footer>
    </div>
  );
}