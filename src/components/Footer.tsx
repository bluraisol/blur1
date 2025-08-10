import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-800/30 py-16 transition-all duration-700 ease-out opacity-100 transform translate-y-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
          <div className="md:col-span-2">
              <img 
                src="/logo2.png" 
                alt="Blur Logo" 
                className="w-12 h-12 rounded-lg shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
              />
            <p className="py-5 text-neutral-400 max-w-md text-base font-light leading-relaxed">
              Next-generation AI-powered memecoin scanner for the Solana ecosystem, 
              powered by nine custom-built artificial intelligence systems.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-300">Links</h3>
            <ul className="space-y-2 text-neutral-500">
              <li><a href="https://t.me/BlurCryptoBot" className="hover:text-neutral-300 transition-colors duration-200 text-sm">Scanner</a></li>
              <li><a href="https://whitepaper.blur.ceo" className="hover:text-neutral-300 transition-colors duration-200 text-sm">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-300">Connect</h3>
            <div className="flex space-x-3">
              <a href="https://x.com/bluronsol" className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 hover:bg-blue-500/10 border border-neutral-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@blur.ceo" className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 hover:bg-blue-500/10 border border-neutral-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">© 2025 Blur. All rights reserved.</p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}