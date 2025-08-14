import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Edit3, 
  Save, 
  Plus, 
  Trash2, 
  Type, 
  Image, 
  Code, 
  Quote, 
  List,
  Minus,
  AlertCircle,
  Calendar,
  User,
  Eye
} from 'lucide-react';

interface ContentBlock {
  id: string;
  type: 'heading' | 'text' | 'image' | 'code' | 'quote' | 'list' | 'divider' | 'callout';
  content: any;
  order: number;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
  featuredImage?: string;
  tags: string[];
  blocks: ContentBlock[];
}

// Mock data для демонстрации
const mockBlogPosts: { [key: string]: BlogPost } = {
  '1': {
    id: '1',
    title: 'Blur AI v2.0 Release - Revolutionary Updates',
    excerpt: 'Major update brings enhanced AI capabilities, improved accuracy, and new features to the Blur ecosystem.',
    author: 'Blur Team',
    publishedAt: '2025-01-15T10:00:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Update', 'AI', 'Features'],
    blocks: [
      {
        id: 'block-1',
        type: 'heading',
        content: { level: 2, text: 'What\'s New in v2.0' },
        order: 1
      },
      {
        id: 'block-2',
        type: 'text',
        content: { text: 'We\'re excited to announce the release of Blur AI v2.0, our most significant update yet. This release brings revolutionary improvements to our AI scanning capabilities, enhanced accuracy across all nine AI systems, and several new features requested by our community.' },
        order: 2
      },
      {
        id: 'block-3',
        type: 'callout',
        content: { 
          type: 'info',
          title: 'Performance Boost',
          text: 'Our new AI engine processes 40% more tokens per second while maintaining 99.2% accuracy.'
        },
        order: 3
      },
      {
        id: 'block-4',
        type: 'heading',
        content: { level: 3, text: 'Enhanced AI Systems' },
        order: 4
      },
      {
        id: 'block-5',
        type: 'list',
        content: {
          type: 'bullet',
          items: [
            'Twitter Scanning AI now processes 1.5M posts per second',
            'DEX Scanning AI improved accuracy to 94.2%',
            'New Smart Contract Analysis AI added',
            'Enhanced Rug Detection with 78% accuracy'
          ]
        },
        order: 5
      },
      {
        id: 'block-6',
        type: 'image',
        content: {
          url: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'AI Performance Dashboard',
          caption: 'New AI performance dashboard showing real-time metrics'
        },
        order: 6
      },
      {
        id: 'block-7',
        type: 'code',
        content: {
          language: 'javascript',
          code: `// Example API response from new Blur AI v2.0
{
  "token": "$EXAMPLE",
  "confidence": 0.94,
  "aiSystems": {
    "twitter": { "score": 0.96, "mentions": 1247 },
    "dex": { "score": 0.92, "liquidity": "2.4M" },
    "rugCheck": { "score": 0.78, "risk": "low" }
  },
  "recommendation": "strong_buy"
}`
        },
        order: 7
      },
      {
        id: 'block-8',
        type: 'quote',
        content: {
          text: 'This update represents months of research and development. We\'ve completely rebuilt our core AI engine from the ground up.',
          author: 'Blur Development Team'
        },
        order: 8
      },
      {
        id: 'block-9',
        type: 'divider',
        content: {},
        order: 9
      },
      {
        id: 'block-10',
        type: 'heading',
        content: { level: 3, text: 'What\'s Next' },
        order: 10
      },
      {
        id: 'block-11',
        type: 'text',
        content: { text: 'We\'re already working on v2.1 which will include advanced portfolio tracking, automated trading signals, and integration with major DEX platforms. Stay tuned for more updates!' },
        order: 11
      }
    ]
  },
  '2': {
    id: '2',
    title: 'New Partnership with Major DEX Platform',
    excerpt: 'Blur announces strategic partnership to enhance liquidity scanning and provide real-time DEX data.',
    author: 'Blur Team',
    publishedAt: '2025-01-10T14:30:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Partnership', 'DEX', 'Integration'],
    blocks: [
      {
        id: 'block-1',
        type: 'text',
        content: { text: 'We\'re thrilled to announce our strategic partnership with a leading DEX platform, bringing enhanced liquidity scanning and real-time market data to all Blur users.' },
        order: 1
      }
    ]
  },
  '3': {
    id: '3',
    title: 'Community Milestone: 50K Active Users',
    excerpt: 'Celebrating our growing community and the incredible success stories from our users.',
    author: 'Community Team',
    publishedAt: '2025-01-05T09:15:00Z',
    status: 'published',
    featuredImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Community', 'Milestone', 'Success'],
    blocks: [
      {
        id: 'block-1',
        type: 'text',
        content: { text: 'We\'ve reached an incredible milestone - 50,000 active users! This achievement wouldn\'t be possible without our amazing community.' },
        order: 1
      }
    ]
  }
};

const blockTypes = [
  { type: 'heading', icon: Type, label: 'Heading' },
  { type: 'text', icon: Type, label: 'Text' },
  { type: 'image', icon: Image, label: 'Image' },
  { type: 'code', icon: Code, label: 'Code' },
  { type: 'quote', icon: Quote, label: 'Quote' },
  { type: 'list', icon: List, label: 'List' },
  { type: 'divider', icon: Minus, label: 'Divider' },
  { type: 'callout', icon: AlertCircle, label: 'Callout' }
];

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isEditor = searchParams.get('editor') === 'true';
  const isCreateNew = id === 'create-new';
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(isCreateNew);
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);

  useEffect(() => {
    if (isCreateNew) {
      setPost({
        id: 'new',
        title: 'New Blog Post',
        excerpt: 'Enter your excerpt here...',
        author: 'Blur Team',
        publishedAt: new Date().toISOString(),
        status: 'draft',
        tags: [],
        blocks: []
      });
    } else if (id && mockBlogPosts[id]) {
      setPost(mockBlogPosts[id]);
    }
  }, [id, isCreateNew]);

  const addBlock = (type: ContentBlock['type']) => {
    if (!post) return;
    
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      order: post.blocks.length + 1
    };
    
    setPost({
      ...post,
      blocks: [...post.blocks, newBlock]
    });
    setEditingBlockId(newBlock.id);
  };

  const updateBlock = (blockId: string, content: any) => {
    if (!post) return;
    
    setPost({
      ...post,
      blocks: post.blocks.map(block =>
        block.id === blockId ? { ...block, content } : block
      )
    });
  };

  const deleteBlock = (blockId: string) => {
    if (!post) return;
    
    setPost({
      ...post,
      blocks: post.blocks.filter(block => block.id !== blockId)
    });
  };

  const getDefaultContent = (type: ContentBlock['type']) => {
    switch (type) {
      case 'heading':
        return { level: 2, text: 'New Heading' };
      case 'text':
        return { text: 'Enter your text here...' };
      case 'image':
        return { url: '', alt: '', caption: '' };
      case 'code':
        return { language: 'javascript', code: '// Your code here' };
      case 'quote':
        return { text: 'Your quote here', author: '' };
      case 'list':
        return { type: 'bullet', items: ['Item 1', 'Item 2'] };
      case 'callout':
        return { type: 'info', title: 'Note', text: 'Your callout text here' };
      case 'divider':
        return {};
      default:
        return {};
    }
  };

  const renderBlock = (block: ContentBlock) => {
    const isEditingThis = editingBlockId === block.id && isEditing;

    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.content.level}` as keyof JSX.IntrinsicElements;
        return (
          <div key={block.id} className="relative group">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-2">
                <select
                  value={block.content.level}
                  onChange={(e) => updateBlock(block.id, { ...block.content, level: parseInt(e.target.value) })}
                  className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-sm"
                >
                  <option value={1}>H1</option>
                  <option value={2}>H2</option>
                  <option value={3}>H3</option>
                  <option value={4}>H4</option>
                </select>
                <input
                  type="text"
                  value={block.content.text}
                  onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                  onBlur={() => setEditingBlockId(null)}
                  autoFocus
                />
              </div>
            ) : (
              <HeadingTag
                className={`font-light tracking-tight cursor-pointer ${
                  block.content.level === 1 ? 'text-4xl mb-6' :
                  block.content.level === 2 ? 'text-3xl mb-4' :
                  block.content.level === 3 ? 'text-2xl mb-3' :
                  'text-xl mb-2'
                }`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.text}
              </HeadingTag>
            )}
          </div>
        );

      case 'text':
        return (
          <div key={block.id} className="relative group">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <textarea
                value={block.content.text}
                onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 min-h-[100px]"
                onBlur={() => setEditingBlockId(null)}
                autoFocus
              />
            ) : (
              <p
                className="text-neutral-300 leading-relaxed mb-6 cursor-pointer"
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.text}
              </p>
            )}
          </div>
        );

      case 'image':
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3 p-4 bg-neutral-800/50 rounded-lg">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={block.content.url}
                  onChange={(e) => updateBlock(block.id, { ...block.content, url: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Alt text"
                  value={block.content.alt}
                  onChange={(e) => updateBlock(block.id, { ...block.content, alt: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Caption"
                  value={block.content.caption}
                  onChange={(e) => updateBlock(block.id, { ...block.content, caption: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <figure
                className="cursor-pointer"
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.url && (
                  <img
                    src={block.content.url}
                    alt={block.content.alt}
                    className="w-full rounded-lg shadow-lg"
                  />
                )}
                {block.content.caption && (
                  <figcaption className="text-sm text-neutral-400 mt-2 text-center">
                    {block.content.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        );

      case 'code':
        return (
          <div key={block.id} className="relative group mb-6">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3 p-4 bg-neutral-800/50 rounded-lg">
                <input
                  type="text"
                  placeholder="Language"
                  value={block.content.language}
                  onChange={(e) => updateBlock(block.id, { ...block.content, language: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <textarea
                  value={block.content.code}
                  onChange={(e) => updateBlock(block.id, { ...block.content, code: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 font-mono text-sm min-h-[150px]"
                  placeholder="Your code here..."
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <div className="bg-neutral-900 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400">{block.content.language}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-neutral-100">{block.content.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        );

      case 'quote':
        return (
          <div key={block.id} className="relative group mb-6">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3 p-4 bg-neutral-800/50 rounded-lg">
                <textarea
                  placeholder="Quote text"
                  value={block.content.text}
                  onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 min-h-[100px]"
                />
                <input
                  type="text"
                  placeholder="Author (optional)"
                  value={block.content.author}
                  onChange={(e) => updateBlock(block.id, { ...block.content, author: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <blockquote
                className="border-l-4 border-blue-500 pl-6 py-2 cursor-pointer"
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <p className="text-lg text-neutral-200 italic mb-2">{block.content.text}</p>
                {block.content.author && (
                  <cite className="text-sm text-neutral-400">— {block.content.author}</cite>
                )}
              </blockquote>
            )}
          </div>
        );

      case 'list':
        return (
          <div key={block.id} className="relative group mb-6">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3 p-4 bg-neutral-800/50 rounded-lg">
                <select
                  value={block.content.type}
                  onChange={(e) => updateBlock(block.id, { ...block.content, type: e.target.value })}
                  className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1"
                >
                  <option value="bullet">Bullet List</option>
                  <option value="numbered">Numbered List</option>
                </select>
                {block.content.items.map((item: string, index: number) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const newItems = [...block.content.items];
                        newItems[index] = e.target.value;
                        updateBlock(block.id, { ...block.content, items: newItems });
                      }}
                      className="flex-1 bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                    />
                    <button
                      onClick={() => {
                        const newItems = block.content.items.filter((_: any, i: number) => i !== index);
                        updateBlock(block.id, { ...block.content, items: newItems });
                      }}
                      className="p-2 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newItems = [...block.content.items, 'New item'];
                    updateBlock(block.id, { ...block.content, items: newItems });
                  }}
                  className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded hover:bg-neutral-600 transition-colors"
                >
                  Add Item
                </button>
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.type === 'numbered' ? (
                  <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                    {block.content.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    {block.content.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );

      case 'callout':
        const calloutColors = {
          info: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
          warning: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
          error: 'border-red-500/30 bg-red-500/10 text-red-300',
          success: 'border-green-500/30 bg-green-500/10 text-green-300'
        };
        
        return (
          <div key={block.id} className="relative group mb-6">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3 p-4 bg-neutral-800/50 rounded-lg">
                <select
                  value={block.content.type}
                  onChange={(e) => updateBlock(block.id, { ...block.content, type: e.target.value })}
                  className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1"
                >
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="error">Error</option>
                  <option value="success">Success</option>
                </select>
                <input
                  type="text"
                  placeholder="Title"
                  value={block.content.title}
                  onChange={(e) => updateBlock(block.id, { ...block.content, title: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2"
                />
                <textarea
                  placeholder="Content"
                  value={block.content.text}
                  onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 min-h-[100px]"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div
                className={`border rounded-lg p-4 cursor-pointer ${calloutColors[block.content.type as keyof typeof calloutColors]}`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{block.content.title}</h4>
                    <p className="opacity-90">{block.content.text}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'divider':
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <hr className="border-neutral-700" />
          </div>
        );

      default:
        return null;
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800/50 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="flex items-center space-x-4">
              {!isCreateNew && (
                <div className="flex items-center space-x-2 text-sm text-neutral-400">
                  <Eye className="w-4 h-4" />
                  <span>{post.status === 'published' ? 'Published' : 'Draft'}</span>
                </div>
              )}
              
              {(isEditor || isCreateNew) && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isEditing 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  <span>{isEditing ? 'Save' : 'Edit'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <article className="mb-12">
          <header className="mb-12">
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}

            {/* Title */}
            {isEditing ? (
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full text-4xl md:text-5xl font-light leading-tight mb-6 bg-transparent border-b border-neutral-700 pb-2 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                {post.title}
              </h1>
            )}

            {/* Excerpt */}
            {isEditing ? (
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="w-full text-xl text-neutral-400 leading-relaxed mb-8 bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              {post.tags.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span>Tags:</span>
                  <div className="flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Content Blocks */}
          <div className="prose prose-invert max-w-none">
            {post.blocks
              .sort((a, b) => a.order - b.order)
              .map(renderBlock)}
          </div>

          {/* Add Block Buttons */}
          {isEditing && (
            <div className="mt-12 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800/50">
              <h3 className="text-lg font-medium mb-4">Add Content Block</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {blockTypes.map((blockType) => {
                  const IconComponent = blockType.icon;
                  return (
                    <button
                      key={blockType.type}
                      onClick={() => addBlock(blockType.type as ContentBlock['type'])}
                      className="flex items-center space-x-2 p-3 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg transition-colors text-sm"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{blockType.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}