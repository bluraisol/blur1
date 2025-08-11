import React, { useState } from 'react';
import { Twitter, Send, Mail, ExternalLink, Users, MessageSquare, Globe, Copy, Check } from 'lucide-react';

export default function ConnectPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const socialLinks = [
    {
      name: 'Twitter',
      handle: '@bluronsol',
      followers: '12.5K',
      description: 'Latest updates, AI insights, and memecoin alerts',
      url: 'https://x.com/bluronsol',
      icon: Twitter,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Telegram',
      handle: '@bluronsol',
      followers: '8.2K',
      description: 'Community discussions and real-time updates',
      url: 'https://t.me/bluronsol',
      icon: Send,
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      name: 'Blur Bot',
      handle: '@BlurCryptoBot',
      followers: '15.8K',
      description: 'AI-powered memecoin scanner and alerts',
      url: 'https://t.me/BlurCryptoBot',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

  const contactInfo = [
    {
      type: 'Business Inquiries',
      email: 'business@blur.ceo',
      description: 'Partnerships, collaborations, and business opportunities'
    },
    {
      type: 'Technical Support',
      email: 'support@blur.ceo',
      description: 'AI scanner issues, technical questions, and bug reports'
    },
    {
      type: 'General Contact',
      email: 'hello@blur.ceo',
      description: 'General questions and feedback'
    }
  ];

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert('Newsletter signup functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Connect</span> with Blur
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Join our growing community of traders and stay updated with the latest AI-powered 
            memecoin insights and market opportunities.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-light tracking-tight">Social Media</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-neutral-700/50 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-neutral-100 mb-1">{social.followers}</div>
                      <div className="text-sm text-neutral-500 uppercase tracking-wider">Followers</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-neutral-100 mb-2 group-hover:text-white transition-colors duration-200">
                    {social.name}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm mb-2 group-hover:text-neutral-300 transition-colors duration-200">
                    {social.handle}
                  </p>
                  
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                    {social.description}
                  </p>
                  
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg`}
                  >
                    <span>Follow</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Mail className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-light tracking-tight">Contact Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm transition-all duration-200 hover:border-neutral-700/50 group"
              >
                <h3 className="text-lg font-medium text-neutral-100 mb-3 group-hover:text-white transition-colors duration-200">
                  {contact.type}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <code className="text-blue-400 font-mono text-sm bg-neutral-800/50 px-2 py-1 rounded group-hover:text-blue-300 transition-colors duration-200">
                    {contact.email}
                  </code>
                  <button
                    onClick={() => handleCopyEmail(contact.email)}
                    className="p-1 text-neutral-500 hover:text-blue-400 transition-colors duration-200"
                    title="Copy email"
                  >
                    {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                
                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-light tracking-tight">Stay Updated</h2>
            </div>
            
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Get the latest AI insights, market analysis, and exclusive updates 
              delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-neutral-500 text-xs mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}