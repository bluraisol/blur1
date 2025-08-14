import React, { useState } from 'react';
import { Twitter, Send, ExternalLink, Copy, Check, FileText, ArrowRight } from 'lucide-react';

export default function ConnectPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState('');

  const socialLinks = [
    {
      name: 'Blur Connect',
      handle: '@blurconnect',
      url: 'https://x.com/bluronsol',
      icon: Send,
      description: 'CCO, Community & Support Lead'
    },
    {
      name: 'Twitter',
      handle: '@bluronsol',
      url: 'https://x.com/bluronsol',
      icon: 'x',
      description: 'Latest updates and announcements'
    },
    {
      name: 'Telegram',
      handle: '@blurbotai',
      url: 'https://t.me/blurbotai',
      icon: Send,
      description: 'Community discussions and support'
    }
  ];

  const contactEmails = [
    { label: 'General', email: 'hello@blur.ceo', description: 'General questions, feedback, partnerships and business inquiries' },
    { label: 'Media & Press', email: 'press@blur.ceo', description: 'Press releases, interviews, and media resources' },
    { label: 'Support', email: 'help@blur.ceo', description: 'Technical support and help' },
  ];

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
        setCopiedEmail('');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-6">
            Let's <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Connect</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Join our community, get support, or reach out for partnerships. We're here to help you succeed.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Social & Community */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Join our community</h2>
              
              <div className="space-y-6">
                {socialLinks.map((social, index) => {
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-between p-6 border border-neutral-800/50 rounded-xl hover:border-neutral-700/50 transition-all duration-300 group-hover:transform group-hover:translate-x-2"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-neutral-900/50 border border-neutral-800/50 rounded-xl flex items-center justify-center group-hover:border-blue-500/30 transition-colors duration-300">
                            {social.icon === 'x' ? (
                              <img 
                                src="/media/static/x.png" 
                                alt="X (Twitter)" 
                                className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                              />
                            ) : (
                              <social.icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                            )}
                          </div>
                          <div>
                            <div className="text-neutral-200 font-medium text-lg group-hover:text-white transition-colors duration-300">{social.name}</div>
                            <div className="text-neutral-500 text-sm mb-1">{social.handle}</div>
                            <div className="text-neutral-600 text-xs">{social.description}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Get In Touch</h2>
              
              <div className="space-y-4">
                {contactEmails.map((contact, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="relative flex items-center justify-between p-6 border border-neutral-800/50 rounded-xl hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-neutral-900/50 border border-neutral-800/50 rounded-xl flex items-center justify-center group-hover:border-blue-500/30 transition-colors duration-300">
                          <img 
                            src="/media/static/email.png" 
                            alt="Email" 
                            className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-neutral-300 text-sm mb-1">{contact.label}</div>
                          <div className="text-neutral-200 font-mono text-lg group-hover:text-white transition-colors duration-300">{contact.email}</div>
                          <div className="text-neutral-600 text-xs">{contact.description}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopyEmail(contact.email)}
                        className="p-3 text-neutral-500 hover:text-blue-400 transition-colors duration-300 hover:bg-neutral-800/30 rounded-lg"
                        title="Copy email"
                      >
                        {emailCopied && copiedEmail === contact.email ? 
                          <Check className="w-5 h-5 text-green-400" /> : 
                          <Copy className="w-5 h-5" />
                        }
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-neutral-800/30 pt-12">
              <h3 className="text-2xl font-light text-neutral-200 mb-6">Stay Updated</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="example@blur.ceo"
                    className="flex-1 bg-neutral-900/50 border border-neutral-800/50 rounded-xl px-4 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                    Subscribe
                  </button>
                </div>
                <p className="text-neutral-500 text-sm">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}