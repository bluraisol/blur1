import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Edit3, Save, X, Plus, Trash2 } from 'lucide-react';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'quote' | 'image' | 'divider' | 'callout' | 'table' | 'video' | 'stats' | 'timeline';
  text?: string;
  items?: string[];
  url?: string;
  alt?: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
  rows?: string[][];
  headers?: string[];
  stats?: { label: string; value: string; change?: string }[];
  timelineItems?: { date: string; title: string; description: string }[];
}

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  content: ContentBlock[];
  tags: string[];
}

export default function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEditorMode = searchParams.has('editor');

  // Состояние для редактирования
  const [isEditing, setIsEditing] = useState(isEditorMode);
  const [editedPost, setEditedPost] = useState<BlogPost | null>(null);

  // Исходные данные поста
  const initialBlogPost: BlogPost = {
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

  // Загружаем данные из localStorage или используем исходные
  useEffect(() => {
    const savedPost = localStorage.getItem(`blog-post-${id}`);
    if (savedPost) {
      setEditedPost(JSON.parse(savedPost));
    } else {
      setEditedPost(initialBlogPost);
    }
  }, [id]);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleSave = () => {
    if (editedPost) {
      localStorage.setItem(`blog-post-${id}`, JSON.stringify(editedPost));
      setIsEditing(false);
      // Убираем параметр editor из URL
      navigate(`/blog/${id}`, { replace: true });
    }
  };

  const handleCancel = () => {
    // Восстанавливаем исходные данные
    const savedPost = localStorage.getItem(`blog-post-${id}`);
    if (savedPost) {
      setEditedPost(JSON.parse(savedPost));
    } else {
      setEditedPost(initialBlogPost);
    }
    setIsEditing(false);
    navigate(`/blog/${id}`, { replace: true });
  };

  const updatePost = (field: keyof BlogPost, value: any) => {
    if (editedPost) {
      setEditedPost({ ...editedPost, [field]: value });
    }
  };

  const updateContent = (index: number, field: keyof ContentBlock, value: any) => {
    if (editedPost) {
      const newContent = [...editedPost.content];
      newContent[index] = { ...newContent[index], [field]: value };
      setEditedPost({ ...editedPost, content: newContent });
    }
  };

  const addContentBlock = (type: ContentBlock['type']) => {
    if (editedPost) {
      const newBlock: ContentBlock = {
        type,
        ...(type === 'list' ? { items: [''] } : { text: '' })
      };
      setEditedPost({
        ...editedPost,
        content: [...editedPost.content, newBlock]
      });
    }
  };

  const removeContentBlock = (index: number) => {
    if (editedPost) {
      const newContent = editedPost.content.filter((_, i) => i !== index);
      setEditedPost({ ...editedPost, content: newContent });
    }
  };

  const addListItem = (contentIndex: number) => {
    if (editedPost) {
      const newContent = [...editedPost.content];
      const block = newContent[contentIndex];
      if (block.type === 'list' && block.items) {
        block.items.push('');
        setEditedPost({ ...editedPost, content: newContent });
      }
    }
  };

  const updateListItem = (contentIndex: number, itemIndex: number, value: string) => {
    if (editedPost) {
      const newContent = [...editedPost.content];
      const block = newContent[contentIndex];
      if (block.type === 'list' && block.items) {
        block.items[itemIndex] = value;
        setEditedPost({ ...editedPost, content: newContent });
      }
    }
  };

  const removeListItem = (contentIndex: number, itemIndex: number) => {
    if (editedPost) {
      const newContent = [...editedPost.content];
      const block = newContent[contentIndex];
      if (block.type === 'list' && block.items) {
        block.items = block.items.filter((_, i) => i !== itemIndex);
        setEditedPost({ ...editedPost, content: newContent });
      }
    }
  };

  const renderContent = (content: ContentBlock, index: number) => {
    if (isEditing) {
      return (
        <div key={index} className="border border-neutral-800/50 rounded-lg p-4 mb-4 group">
          <div className="flex items-center justify-between mb-3">
            <select
              value={content.type}
              onChange={(e) => updateContent(index, 'type', e.target.value)}
              className="bg-neutral-900/50 border border-neutral-700/50 rounded px-3 py-1 text-sm text-neutral-200"
            >
              <option value="paragraph">Paragraph</option>
              <option value="heading">Heading</option>
              <option value="list">List</option>
              <option value="code">Code</option>
            </select>
            <button
              onClick={() => removeContentBlock(index)}
              className="p-1 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {content.type === 'list' ? (
            <div className="space-y-2">
              {content.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateListItem(index, itemIndex, e.target.value)}
                    className="flex-1 bg-neutral-900/50 border border-neutral-700/50 rounded px-3 py-2 text-neutral-200"
                    placeholder="List item..."
                  />
                  <button
                    onClick={() => removeListItem(index, itemIndex)}
                    className="p-1 text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addListItem(index)}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add item</span>
              </button>
            </div>
          ) : (
            <textarea
              value={content.text || ''}
              onChange={(e) => updateContent(index, 'text', e.target.value)}
              className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded px-3 py-2 text-neutral-200 resize-vertical"
              rows={content.type === 'code' ? 6 : content.type === 'heading' ? 2 : 4}
              placeholder={`Enter ${content.type} content...`}
            />
          )}
        </div>
      );
    }

    // Обычный режим просмотра
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-neutral-300 leading-relaxed mb-6">
            {content.text}
          </p>
        );
      case 'heading':
        return (
          <h3 key={index} className="text-2xl font-medium text-neutral-100 mb-4 mt-8">
            {content.text}
          </h3>
        );
      case 'list':
        return (
          <ul key={index} className="space-y-2 mb-6">
            {content.items?.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <div key={index} className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-4 mb-6">
            <pre className="text-blue-400 font-mono text-sm whitespace-pre-line">
              {content.text}
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  if (!editedPost) {
    return <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-20">
      {/* Header */}
      <header className="border-b border-neutral-800/30 bg-neutral-950/90 backdrop-blur-sm pt-8">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleGoBack}
              className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            
            {isEditing ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-4 py-2 text-neutral-400 hover:text-neutral-100 border border-neutral-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 text-neutral-400 hover:text-neutral-100 border border-neutral-700 rounded-lg transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-3 mb-4">
            {isEditing ? (
              <input
                type="text"
                value={editedPost.category}
                onChange={(e) => updatePost('category', e.target.value)}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
              />
            ) : (
              <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                {editedPost.category}
              </div>
            )}
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <Calendar className="w-4 h-4" />
              {isEditing ? (
                <input
                  type="text"
                  value={editedPost.date}
                  onChange={(e) => updatePost('date', e.target.value)}
                  className="bg-transparent border-b border-neutral-700 text-neutral-300"
                />
              ) : (
                <span>{editedPost.date}</span>
              )}
            </div>
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <Clock className="w-4 h-4" />
              {isEditing ? (
                <input
                  type="text"
                  value={editedPost.readTime}
                  onChange={(e) => updatePost('readTime', e.target.value)}
                  className="bg-transparent border-b border-neutral-700 text-neutral-300"
                />
              ) : (
                <span>{editedPost.readTime}</span>
              )}
            </div>
          </div>
          
          {isEditing ? (
            <div className="space-y-4 mb-6">
              <input
                type="text"
                value={editedPost.title}
                onChange={(e) => updatePost('title', e.target.value)}
                className="w-full text-4xl md:text-5xl font-light leading-tight bg-transparent border-b border-neutral-700 text-neutral-100"
                placeholder="Post title..."
              />
              <textarea
                value={editedPost.subtitle}
                onChange={(e) => updatePost('subtitle', e.target.value)}
                className="w-full text-xl text-neutral-400 leading-relaxed bg-transparent border-b border-neutral-700 resize-none"
                rows={2}
                placeholder="Post subtitle..."
              />
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
                {editedPost.title}
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed mb-6">
                {editedPost.subtitle}
              </p>
            </>
          )}
          
          <div className="flex items-center space-x-3">
            <img 
              src={editedPost.author.avatar} 
              alt={editedPost.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={editedPost.author.name}
                  onChange={(e) => updatePost('author', { ...editedPost.author, name: e.target.value })}
                  className="font-medium text-neutral-200 bg-transparent border-b border-neutral-700"
                />
              ) : (
                <div className="font-medium text-neutral-200">{editedPost.author.name}</div>
              )}
              <div className="text-sm text-neutral-500">Author</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-invert max-w-none">
          {editedPost.content.map((content, index) => renderContent(content, index))}
          
          {isEditing && (
            <div className="mt-8 p-4 border-2 border-dashed border-neutral-700 rounded-lg">
              <div className="text-center">
                <p className="text-neutral-400 mb-4">Add new content block:</p>
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() => addContentBlock('paragraph')}
                    className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-sm transition-colors"
                  >
                    Paragraph
                  </button>
                  <button
                    onClick={() => addContentBlock('heading')}
                    className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-sm transition-colors"
                  >
                    Heading
                  </button>
                  <button
                    onClick={() => addContentBlock('list')}
                    className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-sm transition-colors"
                  >
                    List
                  </button>
                  <button
                    onClick={() => addContentBlock('code')}
                    className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-sm transition-colors"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          )}
        </article>
        
        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-neutral-800/30">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="w-4 h-4 text-neutral-500" />
            <span className="text-neutral-500 text-sm">Tags</span>
          </div>
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editedPost.tags.join(', ')}
                onChange={(e) => updatePost('tags', e.target.value.split(', ').filter(tag => tag.trim()))}
                className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded px-3 py-2 text-neutral-200"
                placeholder="Enter tags separated by commas..."
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {editedPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-neutral-800/50 text-neutral-300 rounded-full text-sm hover:bg-neutral-700/50 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Navigation */}
        {!isEditing && (
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
        )}
      </main>
    </div>
  );
}