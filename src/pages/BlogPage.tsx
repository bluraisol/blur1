import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';

export default function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate('/');
  };

  // Пример данных для первого поста
  const blogPost = {
    id: 1,
    title: "Blur v2.0 - Major Update Release",
    subtitle: "Enhanced AI scanning capabilities and new features",
    date: "January 15, 2025",
    readTime: "3 min read",
    category: "Update",
    author: {
      name: "Blur Team",
      avatar: "/media/static/logo2.png"
    },
    content: [
      {
        type: "paragraph",
        text: "We're excited to announce the release of Blur v2.0, our biggest update yet. This release brings significant improvements to our AI scanning capabilities and introduces several new features requested by our community."
      },
      {
        type: "heading",
        text: "🚀 What's New"
      },
      {
        type: "list",
        items: [
          "Enhanced Twitter AI scanning - now processes 1M+ posts per second",
          "Improved DEX scanning with better liquidity analysis",
          "New Success Ratio AI with 65.1% accuracy",
          "Advanced holder distribution analysis",
          "Real-time rug pull detection improvements"
        ]
      },
      {
        type: "heading",
        text: "🔧 Technical Improvements"
      },
      {
        type: "paragraph",
        text: "Our development team has been working tirelessly to optimize the core AI systems. The new architecture allows for faster processing and more accurate predictions."
      },
      {
        type: "code",
        text: "Processing Speed: 30,000 coins/second\nAccuracy Rate: Up to 100% for Twitter AI\nResponse Time: <0.3 seconds"
      },
      {
        type: "heading",
        text: "📊 Performance Metrics"
      },
      {
        type: "paragraph",
        text: "Since the last update, we've seen remarkable improvements in our detection capabilities:"
      },
      {
        type: "list",
        items: [
          "11,928 coins detected (+2,341 from last month)",
          "34,591x total return (+5,123x improvement)",
          "2.9x average return (stable performance)",
          "61.2% average hit rate (+3.4% improvement)"
        ]
      },
      {
        type: "heading",
        text: "🎯 What's Next"
      },
      {
        type: "paragraph",
        text: "We're already working on v2.1 which will include even more advanced features like cross-chain analysis and enhanced social sentiment tracking. Stay tuned for more updates!"
      }
    ],
    tags: ["Update", "AI", "Performance", "Features"]
  };

  const renderContent = (content: any) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-neutral-300 leading-relaxed mb-6">
            {content.text}
          </p>
        );
      case 'heading':
        return (
          <h3 className="text-2xl font-medium text-neutral-100 mb-4 mt-8">
            {content.text}
          </h3>
        );
      case 'list':
        return (
          <ul className="space-y-2 mb-6">
            {content.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-4 mb-6">
            <pre className="text-blue-400 font-mono text-sm whitespace-pre-line">
              {content.text}
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-20">
      {/* Header */}
      <header className="border-b border-neutral-800/30 bg-neutral-950/90 backdrop-blur-sm pt-8">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {blogPost.category}
            </div>
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
            {blogPost.title}
          </h1>
          
          <p className="text-xl text-neutral-400 leading-relaxed mb-6">
            {blogPost.subtitle}
          </p>
          
          <div className="flex items-center space-x-3">
            <img 
              src={blogPost.author.avatar} 
              alt={blogPost.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-neutral-200">{blogPost.author.name}</div>
              <div className="text-sm text-neutral-500">Author</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-invert max-w-none">
          {blogPost.content.map((content, index) => (
            <div key={index}>
              {renderContent(content)}
            </div>
          ))}
        </article>
        
        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-neutral-800/30">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="w-4 h-4 text-neutral-500" />
            <span className="text-neutral-500 text-sm">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-neutral-800/50 text-neutral-300 rounded-full text-sm hover:bg-neutral-700/50 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-neutral-800/30">
          <div className="flex justify-between items-center">
            <button className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Post</span>
            </button>
            <button className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors">
              <span>Next Post</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}