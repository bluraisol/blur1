import React from 'react';
import { Twitter, MessageCircle, FileText, ExternalLink, Zap, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-neutral-950 border-t border-neutral-800/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo2.png" 
                alt="Blur Logo" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-2xl font-light text-white tracking-tight">Blur</h3>
                <p className="text-neutral-400 text-sm">Revolutionary AI Memecoin Scanner</p>
              </div>
            </div>
            
            <p className="text-neutral-300 leading-relaxed max-w-md mb-8">
              Nine custom-built AI systems analyzing hundreds of thousands of memecoins 
              to deliver unparalleled insights on the Solana network.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI Systems Online</span>
              </div>
              <div className="w-px h-4 bg-neutral-700"></div>
              <div className="text-sm text-neutral-400">
                Powered by Solana
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Quick Access</h4>
            
            <div className="space-y-4">
              <a 
                href="https://t.me/BlurCryptoBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-neutral-900/50 hover:bg-neutral-800/50 border border-neutral-800/50 hover:border-neutral-700/50 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Launch Scanner</div>
                    <div className="text-neutral-400 text-sm">Start scanning now</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200" />
              </a>
              
              <a 
                href="https://whitepaper.blur.ceo" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-neutral-900/50 hover:bg-neutral-800/50 border border-neutral-800/50 hover:border-neutral-700/50 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-neutral-700/50 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Whitepaper</div>
                    <div className="text-neutral-400 text-sm">Technical documentation</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200" />
              </a>
            </div>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Connect</h4>
            
            <div className="space-y-3">
              <a 
                href="https://x.com/bluronsol" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Twitter</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
              
              <a 
                href="https://t.me/bluronsol" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <Send className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Telegram</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
              
              <a 
                href="mailto:hello@blur.ceo" 
                className="flex items-center space-x-3 p-3 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-neutral-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-neutral-400 text-sm">© 2025 Blur. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>Built with AI</span>
              <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
              <span>Solana Network</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}