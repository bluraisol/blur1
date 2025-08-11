import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Github, Mail, FileText, ExternalLink, Zap, TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-800/30 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-blue-500/10"></div>
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="/logo2.png" 
                  alt="Blur Logo" 
                  className="relative w-16 h-16 rounded-2xl shadow-2xl shadow-blue-500/40 object-cover ring-2 ring-blue-500/30"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Blur</h3>
                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">AI Memecoin Scanner</p>
              </div>
            </div>
            
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">
              Revolutionary AI-powered memecoin scanner for the Solana ecosystem, 
              powered by nine custom-built artificial intelligence systems delivering 
              unparalleled market insights.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Total Return</span>
                </div>
                <div className="text-xl font-bold text-green-400">34,591x</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Coins Detected</span>
                </div>
                <div className="text-xl font-bold text-blue-400">11,928</div>
              </div>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              <span>Quick Access</span>
            </h4>
            
            <div className="space-y-4">
              {/* Scanner Link */}
              <a 
                href="https://t.me/BlurCryptoBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 bg-gradient-to-r from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">Launch Scanner</div>
                  <div className="text-xs text-neutral-500">Telegram Bot</div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors duration-300 ml-auto" />
              </a>
              
              {/* Whitepaper Link */}
              <a 
                href="https://whitepaper.blur.ceo" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 bg-gradient-to-r from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">Whitepaper</div>
                  <div className="text-xs text-neutral-500">Technical Documentation</div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors duration-300 ml-auto" />
              </a>
            </div>
          </div>
          
          {/* Connect Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              <span>Connect With Us</span>
            </h4>
            
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Join our community and stay updated with the latest developments, 
              market insights, and AI improvements.
            </p>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <a 
                href="https://x.com/bluronsol" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 bg-gradient-to-br from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 hover:border-blue-400/50 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm text-neutral-300 group-hover:text-white transition-colors duration-300">Twitter</span>
              </a>
              
              <a 
                href="mailto:hello@blur.ceo" 
                className="group flex items-center space-x-3 p-3 bg-gradient-to-br from-neutral-800/40 to-neutral-700/20 border border-neutral-700/50 hover:border-green-400/50 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                <span className="text-sm text-neutral-300 group-hover:text-white transition-colors duration-300">Contact</span>
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm">
              <h5 className="text-white font-medium mb-2 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Stay Updated</span>
              </h5>
              <p className="text-xs text-neutral-400 mb-3">Get notified about major updates and new features</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-neutral-500 text-sm">© 2025 Blur. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">AI Systems Online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-neutral-500">
              <span>Powered by Solana</span>
              <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
              <span>Built with AI</span>
              <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
              <span>Made for Traders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}