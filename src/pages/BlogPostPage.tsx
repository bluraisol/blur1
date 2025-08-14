import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { blogApi, BlogPost } from '../lib/supabase';
import { Calendar, Clock, ArrowLeft, Edit, Eye } from 'lucide-react';
import ContentBlockRenderer from '../components/blog/ContentBlockRenderer';
import BlogEditor from '../components/blog/BlogEditor';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const isEditor = searchParams.get('editor') === 'true';
  const [isEditing, setIsEditing] = useState(isEditor);

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const postData = await blogApi.getPostBySlug(id!);
      setPost(postData);
    } catch (err) {
      setError('Post not found');
      console.error('Error loading post:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (content: any[]) => {
    if (!post) return;
    
    try {
      await blogApi.updatePost(post.id, { content });
      await loadPost(); // Reload to get updated data
      setIsEditing(false);
    } catch (err) {
      console.error('Error saving post:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: any[]) => {
    const wordsPerMinute = 200;
    const totalWords = content.reduce((acc, block) => {
      if (block.type === 'text') {
        return acc + (block.content.text?.split(' ').length || 0);
      }
      return acc;
    }, 0);
    return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-800 rounded mb-4"></div>
            <div className="h-4 bg-neutral-800 rounded mb-8 w-1/2"></div>
            <div className="space-y-4">
              <div className="h-4 bg-neutral-800 rounded"></div>
              <div className="h-4 bg-neutral-800 rounded"></div>
              <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
          <p className="text-neutral-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              {isEditing ? <Eye className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              <span>{isEditing ? 'Preview' : 'Edit'}</span>
            </button>
          </div>
        </div>

        {isEditing ? (
          <BlogEditor
            initialContent={post.content || []}
            onSave={handleSave}
            onPreview={() => setIsEditing(false)}
          />
        ) : (
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              {post.featured_image && (
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-2xl"
                />
              )}
              
              <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{calculateReadTime(post.content || [])} min read</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content && post.content.map((block, index) => (
                <ContentBlockRenderer key={index} block={block} />
              ))}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}