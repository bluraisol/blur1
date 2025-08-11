import React from 'react';
import { Twitter, MessageCircle, FileText, ExternalLink, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-800/50 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo2.png" 
                alt="Blur Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">Blur</h3>
                <p className="text-neutral-500 text-sm">AI Memecoin Scanner</p>
              </div>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Revolutionary AI-powered memecoin scanner for Solana with nine custom-built AI systems.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            
            <div className="space-y-3">
              <a 
                href="https://t.me/BlurCryptoBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm">Launch Scanner</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              
              <a 
                href="https://whitepaper.blur.ceo" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Whitepaper</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            
            <div className="space-y-3">
              <a 
                href="https://x.com/bluronsol" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-sm">Twitter</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              
              <a 
                href="mailto:hello@blur.ceo" 
                className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Contact</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">© 2025 Blur. All rights reserved.</p>
            
            <div className="flex items-center space-x-4 text-xs text-neutral-500">
              <span>Powered by Solana</span>
              <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
              <span>Built with AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}