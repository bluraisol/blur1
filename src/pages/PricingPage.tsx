import React from 'react';
import { Check, Zap, TrendingUp, Brain } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: '1 Month',
      price: '1.6 SOL',
      description: 'A perfect entry point to see how Blur tracks signals, social sentiment, and early momentum — all in one place',
      features: [
        'Real-time memecoin scanning',
        'AI-powered signal detection',
        'Social sentiment analysis',
        'Early momentum tracking',
        'Basic analytics dashboard',
        'Email alerts'
      ],
      icon: Zap,
      popular: false
    },
    {
      name: '3 Months',
      price: '3.5 SOL',
      description: '90 days of powerful tools and real-time insights — designed to keep you ahead in fast-moving markets',
      features: [
        'Everything in 1 Month plan',
        'Advanced pattern recognition',
        'Multi-timeframe analysis',
        'Custom alert configurations',
        'Priority support',
        'API access (limited)',
        'Historical data access'
      ],
      icon: TrendingUp,
      popular: true
    },
    {
      name: '6 Months',
      price: '5 SOL',
      description: 'Half a year of uninterrupted access to our evolving AI engine, precision metrics, and smart token evaluation layers',
      features: [
        'Everything in 3 Months plan',
        'Full AI engine access',
        'Precision metrics suite',
        'Smart token evaluation',
        'Unlimited API access',
        'Advanced backtesting',
        'Custom model training',
        'White-label options'
      ],
      icon: Brain,
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
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
            <span>Subscription Plans</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 transform group ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'border-neutral-800/50 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      plan.popular ? 'text-blue-400' : 'text-neutral-400 group-hover:text-blue-400'
                    }`} />
                    <div className="text-right">
                      <div className="text-3xl font-light text-neutral-100 mb-1">{plan.price}</div>
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
                          plan.popular ? 'text-blue-400' : 'text-neutral-500 group-hover:text-blue-400'
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

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-neutral-900/30 to-neutral-800/20 border border-neutral-800/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-light mb-4 text-neutral-100">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-400">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24/7 AI monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Real-time notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Secure data encryption</span>
              </div>
            </div>
            <p className="mt-6 text-neutral-500 text-sm">
              All subscriptions are processed securely through our Telegram bot. 
              Cancel anytime with no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}