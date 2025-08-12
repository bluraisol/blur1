import React from 'react';
import { Twitter, MessageCircle, FileText, ExternalLink, Zap, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-neutral-950 border-t border-neutral-800/30 overflow-hidden">
      {/* Mouse cursor effect - same as in App.tsx */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
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
              </div>
            </div>
            
            <p className="text-neutral-300 leading-relaxed max-w-md mb-8">
              Nine custom-built AI systems analyzing hundreds of thousands of memecoins 
              to deliver unparalleled insights on the Solana network.
            </p>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h4 className="text-white font-medium mb-4 text-lg">Quick Access</h4>
            
            <div className="space-y-2">
              <a 
                href="https://t.me/BlurCryptoBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-2 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <Zap className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Launch Scanner</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
              
              <a 
                href="https://whitepaper.blur.ceo" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-2 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <FileText className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Whitepaper</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
            </div>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-white font-medium mb-4 text-lg">Connect</h4>
            
            <div className="space-y-2">
              <a 
                href="https://x.com/bluronsol" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-2 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <img 
                  src="/x.png" 
                  alt="X (Twitter)" 
                  className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-all duration-200"
                />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Twitter</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
              
              <a 
                href="https://t.me/blurbotai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 py-2 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
              >
                <Send className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">Telegram</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
              
              <a 
                href="mailto:hello@blur.ceo" 
                className="flex items-center space-x-3 py-2 hover:bg-neutral-900/30 rounded-lg transition-all duration-200 group"
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
          </div>
        </div>
      </div>
    </footer>
  );
}