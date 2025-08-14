import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Plus, Edit3 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
  featuredImage?: string;
  tags: string[];
}

// Mock data
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Blur AI v2.0 Release - Revolutionary Updates',
    excerpt: 'Major update brings enhanced AI capabilities, improved accuracy, and new features to the Blur ecosystem.',
    author: 'Blur Team',
    publishedAt: '2025-01-15T10:00:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Update', 'AI', 'Features']
  },
  {
    id: '2',
    title: 'New Partnership with Major DEX Platform',
    excerpt: 'Blur announces strategic partnership to enhance liquidity scanning and provide real-time DEX data.',
    author: 'Blur Team',
    publishedAt: '2025-01-10T14:30:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Partnership', 'DEX', 'Integration']
  },
  {
    id: '3',
    title: 'Community Milestone: 50K Active Users',
    excerpt: 'Celebrating our growing community and the incredible success stories from our users.',
    author: 'Community Team',
    publishedAt: '2025-01-05T09:15:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Community', 'Milestone', 'Success']
  }
];

export default function BlogListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            <h1 className="text-4xl md:text-6xl font-light leading-none tracking-tighter mb-4">
              Blur <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Blog</span>
            </h1>
            
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Latest updates, features, and insights from the Blur team
            </p>
          </div>
          
          <button
            onClick={() => navigate('/blog/create-new')}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-medium text-neutral-100 group-hover:text-white transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blog/${post.id}?editor=true`);
                    }}
                    className="p-1 text-neutral-500 hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Edit3 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {mockBlogPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-light text-neutral-300 mb-4">No blog posts yet</h3>
            <p className="text-neutral-500 mb-8">Start by creating your first blog post</p>
            <button
              onClick={() => navigate('/blog/create-new')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create First Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}