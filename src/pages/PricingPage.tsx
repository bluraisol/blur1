import React from 'react';
import { Check, Zap, TrendingUp, Brain, TrendingDown } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: '3 Days Trial',
      price: 'FREE',
      description: "You'll be able to explore every feature, experience the full power of our new update, and see how Blur works in real time — no subscription required. Our team will be there to support you throughout.",
      features: [
        'Real-time memecoin scanning',
        'Telegram alerts',
        'Default support',
        'Community access',
      ],
      icon: '/media/static/trial.png',
      popular: false,
      trial: true
    },
    {
      name: '1 Month',
      price: '1.6 SOL',
      description: 'A perfect entry point to see how Blur tracks signals, social sentiment, and early momentum — all in one place',
      features: [
        'Real-time memecoin scanning',
        'Telegram alerts',
        'Default support',
        'Community access'
      ],
      icon: '/media/static/1m.png',
      popular: false
    },
    {
      name: '3 Months',
      price: '3.5 SOL',
      description: '90 days of powerful tools and real-time insights — designed to keep you ahead in fast-moving markets',
      features: [
        'All 1-month features',
        'Priority support',
        'Referral rewards',
        'Airdrop eligibility',
        'Advanced metrics and analytics',
      ],
      icon: '/media/static/3m.png',
      popular: true
    },
    {
      name: '6 Months',
      price: '5 SOL',
      description: 'Half a year of uninterrupted access to our evolving AI engine, precision metrics, and smart token evaluation layers',
      features: [
        'All 3-month features',
        'Blur Zone access',
        'Support from developers',
        'Increased referral rewards',
        'Early access to new features',
        'Priority airdrop eligibility',
        'Exclusive community events'
      ],
      icon: '/media/static/6m.png',
      popular: false
    }
  ];

  const handleSubscribe = (planName: string) => {
    window.open('https://t.me/BlurCryptoBot', '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            Choose Your <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Plan</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Unlock the power of nine custom-built AI systems with flexible subscription options 
            designed to fit your trading strategy and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto">
          {/* FREE Trial Block - Horizontal */}
          {plans.filter(plan => plan.trial).map((plan, index) => {
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-green-500/30 shadow-2xl shadow-green-500/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] transform group mb-16 mt-8"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 opacity-50"></div>
                
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Free Trial
                  </div>
                </div>

                <div className="relative z-10 p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left - Icon and Price */}
                    <div className="lg:col-span-3 text-center lg:text-left">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl"></div>
                          <img 
                            src={plan.icon} 
                            alt={plan.name} 
                            className="relative w-20 h-20 object-contain opacity-100 drop-shadow-lg"
                          />
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="text-6xl font-extralight mb-2 text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                            {plan.price}
                          </div>
                          <div className="text-sm text-green-400/80 uppercase tracking-widest font-medium">
                            {plan.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center - Description and Features */}
                    <div className="lg:col-span-6">
                      <p className="text-neutral-300 leading-relaxed text-base mb-8 font-light">
                        {plan.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 group">
                            <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-200">
                              <Check className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-neutral-200 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right - CTA Button */}
                    <div className="lg:col-span-3 text-center">
                      <button
                        onClick={() => handleSubscribe(plan.name)}
                        className="relative group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black py-5 px-10 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">Start Free Trial</span>
                      </button>
                      
                      <p className="text-xs text-neutral-500 mt-4 font-light">
                        No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Paid Plans - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.filter(plan => !plan.trial).map((plan, index) => {
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 transform group ${
                    plan.popular 
                      ? 'from-neutral-900/40 to-neutral-800/20 border-2 border-blue-500/50 shadow-xl shadow-blue-500/20' 
                      : 'from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <img 
                        src={plan.icon} 
                        alt={plan.name} 
                        className={`w-12 h-12 object-contain transition-all duration-300 ${
                          plan.popular 
                            ? 'opacity-100' 
                            : 'opacity-60 group-hover:opacity-100'
                        }`}
                      />
                      <div className="text-right">
                        <div className="text-3xl font-light mb-1 text-neutral-100">{plan.price}</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wider">{plan.name}</div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
                            plan.popular 
                              ? 'text-blue-400' 
                              : 'text-neutral-500 group-hover:text-blue-400'
                          }`} />
                          <span className="text-neutral-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSubscribe(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-medium uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                        : 'border border-neutral-700 hover:border-blue-500/50 text-neutral-300 hover:text-white hover:bg-blue-500/5'
                    }`}
                  >
                    Subscribe Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}