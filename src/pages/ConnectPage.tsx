import React, { useState } from 'react';
import { Twitter, Send, Mail, ExternalLink, Copy, Check, FileText } from 'lucide-react';

export default function ConnectPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const socialLinks = [
    {
      name: 'Twitter',
      handle: '@bluronsol',
      url: 'https://x.com/bluronsol',
      icon: Twitter
    },
    {
      name: 'Telegram',
      handle: '@bluronsol',
      url: 'https://t.me/bluronsol',
      icon: Send
    },
    {
      name: 'Blur Bot',
      handle: '@BlurCryptoBot',
      url: 'https://t.me/BlurCryptoBot',
      icon: FileText
    }
  ];

  const contactEmails = [
    { label: 'Business', email: 'business@blur.ceo' },
    { label: 'Support', email: 'support@blur.ceo' },
    { label: 'General', email: 'hello@blur.ceo' }
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

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Connect</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Join our community and stay updated with AI-powered memecoin insights.
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-neutral-200 mb-8 text-center">Social Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <IconComponent className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                    <div>
                      <div className="text-neutral-200 font-medium">{social.name}</div>
                      <div className="text-neutral-500 text-sm">{social.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-200" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-neutral-200 mb-8 text-center">Contact</h2>
          
          <div className="space-y-4">
            {contactEmails.map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-neutral-800 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <div>
                    <div className="text-neutral-300 text-sm">{contact.label}</div>
                    <div className="text-neutral-200 font-mono text-sm">{contact.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyEmail(contact.email)}
                  className="p-2 text-neutral-500 hover:text-blue-400 transition-colors duration-200"
                  title="Copy email"
                >
                  {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">Stay Updated</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Get AI insights and market updates delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-neutral-500 text-xs mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}