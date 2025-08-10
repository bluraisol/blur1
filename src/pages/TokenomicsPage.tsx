import React from 'react';
import { FileText, PieChart, Clock, Lock } from 'lucide-react';

export default function TokenomicsPage() {
  const tokenAllocation = [
    { category: 'Public', percentage: '40%', tokens: '400M', color: 'from-blue-500 to-blue-600' },
    { category: 'DEX Liquidity', percentage: '10%', tokens: '100M', color: 'from-purple-500 to-purple-600' },
    { category: 'Ecosystem Incentives', percentage: '10.5%', tokens: '105M', color: 'from-green-500 to-green-600' },
    { category: 'Marketing', percentage: '9.5%', tokens: '95M', color: 'from-orange-500 to-orange-600' },
    { category: 'Research & Development', percentage: '7.5%', tokens: '75M', color: 'from-cyan-500 to-cyan-600' },
    { category: 'Team', percentage: '6%', tokens: '60M', color: 'from-red-500 to-red-600' },
    { category: 'CEX Liquidity', percentage: '6%', tokens: '60M', color: 'from-pink-500 to-pink-600' },
    { category: 'KOLs', percentage: '5.5%', tokens: '55M', color: 'from-yellow-500 to-yellow-600' },
    { category: 'Advisory', percentage: '5%', tokens: '50M', color: 'from-indigo-500 to-indigo-600' }
  ];

  const vestingSchedule = [
    { who: 'Public', tokens: '400M (40%)', cliff: '-', vesting: '-', status: 'immediate' },
    { who: 'DEX Liquidity', tokens: '100M (10%)', cliff: 'Locked (24m)', vesting: 'Locked (24m)', status: 'locked' },
    { who: 'Ecosystem Incentives', tokens: '105M (10.5%)', cliff: '-', vesting: '12m', status: 'vesting' },
    { who: 'Marketing', tokens: '95M (9.5%)', cliff: '-', vesting: '12m', status: 'vesting' },
    { who: 'Research & Development', tokens: '75M (7.5%)', cliff: '1m', vesting: '12m', status: 'vesting' },
    { who: 'Team', tokens: '60M (6%)', cliff: '6m', vesting: '36m', status: 'vesting' },
    { who: 'CEX Liquidity', tokens: '60M (6%)', cliff: '-', vesting: '-', status: 'immediate' },
    { who: 'KOLs', tokens: '55M (5.5%)', cliff: '2m', vesting: '6m', status: 'vesting' },
    { who: 'Advisory', tokens: '50M (5%)', cliff: '2m', vesting: '12m', status: 'vesting' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
            <span>Token Economics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Tokenomics</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive breakdown of Blur token distribution, allocation strategy, 
            and vesting schedules designed for long-term ecosystem growth.
          </p>
        </div>

        {/* Token Allocation Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <PieChart className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-light tracking-tight">Token Allocation</h2>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800/50">
                    <th className="text-left py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Category</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Percentage</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Tokens</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Visual</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenAllocation.map((item, index) => (
                    <tr key={index} className="border-b border-neutral-800/30 hover:bg-neutral-800/20 transition-colors duration-200 group">
                      <td className="py-6 px-8">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}></div>
                          <span className="font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                            {item.category}
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="text-2xl font-light text-neutral-100 group-hover:text-white transition-colors duration-200">
                          {item.percentage}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="text-lg font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                          {item.tokens}
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex justify-center">
                          <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500 ease-out`}
                              style={{ width: item.percentage }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vesting Schedule Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Clock className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-light tracking-tight">Vesting Schedule</h2>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800/50">
                    <th className="text-left py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Category</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Tokens</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Cliff</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Vesting</th>
                    <th className="text-center py-6 px-8 text-sm font-medium text-neutral-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vestingSchedule.map((item, index) => (
                    <tr key={index} className="border-b border-neutral-800/30 hover:bg-neutral-800/20 transition-colors duration-200 group">
                      <td className="py-6 px-8">
                        <span className="font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                          {item.who}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-200">
                          {item.tokens}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="text-neutral-300 group-hover:text-neutral-100 transition-colors duration-200">
                          {item.cliff}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <span className="text-neutral-300 group-hover:text-neutral-100 transition-colors duration-200">
                          {item.vesting}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <div className="flex justify-center">
                          {item.status === 'immediate' && (
                            <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Immediate</span>
                            </div>
                          )}
                          {item.status === 'locked' && (
                            <div className="flex items-center space-x-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                              <Lock className="w-3 h-3" />
                              <span>Locked</span>
                            </div>
                          )}
                          {item.status === 'vesting' && (
                            <div className="flex items-center space-x-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                              <Clock className="w-3 h-3" />
                              <span>Vesting</span>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                Total Supply
              </h3>
            </div>
            <div className="text-3xl font-light text-blue-400 mb-2">1,000M</div>
            <div className="text-sm text-neutral-400">Fixed supply with no inflation</div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-all duration-200 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                Circulating at Launch
              </h3>
            </div>
            <div className="text-3xl font-light text-green-400 mb-2">460M</div>
            <div className="text-sm text-neutral-400">46% of total supply</div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-200 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                Locked/Vesting
              </h3>
            </div>
            <div className="text-3xl font-light text-purple-400 mb-2">540M</div>
            <div className="text-sm text-neutral-400">54% locked or vesting</div>
          </div>
        </div>
      </div>
    </div>
  );
}