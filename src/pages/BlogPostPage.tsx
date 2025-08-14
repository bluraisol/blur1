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
  Eye,
  Home,
  MoveLeft,
  Clock
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
    title: 'Blur v2.0: asdasdasd',
    excerpt: 'Sosiski',
    author: 'Blur Team',
    publishedAt: '2025-08-15T10:00:00Z',
    status: 'published',
    tags: ['Update'],
    blocks: [
      {
        id: 'block-1',
        type: 'text',
        content: { text: 'Hello! It\'s been a while since our last update — and yes, the bot has been quiet for too long. But the silence had its purpose. We\'ve used this downtime to fix, improve, and prepare several changes aimed at making Blur smoother, more stable, and easier to use.' },
        order: 1
      },
      {
        id: 'block-2',
        type: 'heading',
        content: { level: 2, text: 'Here\'s what\'s new' },
        order: 2
      },
      {
        id: 'block-3',
        type: 'text',
        content: { text: 'We\'re excited to announce the release of Blur AI v2.0, our most significant update yet. This release brings revolutionary improvements to our AI scanning capabilities, enhanced accuracy across all nine AI systems, and several new features requested by our community.' },
        order: 3
      }
    ]
  },
  'test': {
    id: 'test',
    title: 'Test Post',
    excerpt: 'This is a test post.',
    author: 'Blur Team',
    publishedAt: '2025-08-15T10:00:00Z',
    status: 'published',
    tags: [],
    blocks: [
      {
        id: 'block-1',
        type: 'heading',
        content: { level: 2, text: 'What\'s New in v2.0?' },
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
  }
};

// Author avatars mapping
const authorAvatars: { [key: string]: string } = {
  'Blur Team': '/media/static/logo2.png'
};

// Reading time calculation
const calculateReadingTime = (blocks: ContentBlock[]): number => {
  const wordsPerMinute = 200;
  let totalWords = 0;
  
  blocks.forEach(block => {
    switch (block.type) {
      case 'text':
        totalWords += block.content.text.split(' ').length;
        break;
      case 'heading':
        totalWords += block.content.text.split(' ').length;
        break;
      case 'quote':
        totalWords += block.content.text.split(' ').length;
        break;
      case 'list':
        totalWords += block.content.items.join(' ').split(' ').length;
        break;
      case 'callout':
        totalWords += (block.content.title + ' ' + block.content.text).split(' ').length;
        break;
    }
  });
  
  return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
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
  const hasEditorFlag = searchParams.get('editor') === 'true';
  const isCreateNew = id === 'create-new';
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(isCreateNew || hasEditorFlag);
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
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-3">
                <select
                  value={block.content.level}
                  onChange={(e) => updateBlock(block.id, { ...block.content, level: parseInt(e.target.value) })}
                  className="bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm"
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
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-lg"
                  onBlur={() => setEditingBlockId(null)}
                  autoFocus
                />
              </div>
            ) : (
              <HeadingTag
                className={`font-light tracking-tight cursor-pointer text-neutral-100 ${
                  block.content.level === 1 ? 'text-4xl' :
                  block.content.level === 2 ? 'text-3xl' :
                  block.content.level === 3 ? 'text-2xl' :
                  'text-xl'
                } ${isEditing ? 'hover:text-blue-400 transition-colors' : ''}`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.text}
              </HeadingTag>
            )}
          </div>
        );

      case 'text':
        return (
          <div key={block.id} className="relative group mb-6">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
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
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 min-h-[120px] text-neutral-100"
                onBlur={() => setEditingBlockId(null)}
                autoFocus
              />
            ) : (
              <p
                className={`text-neutral-300 leading-relaxed cursor-pointer ${
                  isEditing ? 'hover:text-neutral-100 transition-colors' : ''
                }`}
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
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={block.content.url}
                  onChange={(e) => updateBlock(block.id, { ...block.content, url: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Alt text"
                  value={block.content.alt}
                  onChange={(e) => updateBlock(block.id, { ...block.content, alt: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Caption"
                  value={block.content.caption}
                  onChange={(e) => updateBlock(block.id, { ...block.content, caption: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <figure
                className={`cursor-pointer ${isEditing ? 'hover:opacity-80 transition-opacity' : ''}`}
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
                  <figcaption className="text-sm text-neutral-400 mt-3 text-center">
                    {block.content.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        );

      case 'code':
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg">
                <input
                  type="text"
                  placeholder="Language"
                  value={block.content.language}
                  onChange={(e) => updateBlock(block.id, { ...block.content, language: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <textarea
                  value={block.content.code}
                  onChange={(e) => updateBlock(block.id, { ...block.content, code: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3 font-mono text-sm min-h-[200px]"
                  placeholder="Your code here..."
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div
                className={`cursor-pointer ${isEditing ? 'hover:opacity-80 transition-opacity' : ''}`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
                  <div className="flex items-center justify-between px-4 py-3 bg-neutral-800 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">{block.content.language}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-neutral-100 font-mono">{block.content.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        );

      case 'quote':
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg">
                <textarea
                  placeholder="Quote text"
                  value={block.content.text}
                  onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3 min-h-[120px]"
                />
                <input
                  type="text"
                  placeholder="Author (optional)"
                  value={block.content.author}
                  onChange={(e) => updateBlock(block.id, { ...block.content, author: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <blockquote
                className={`border-l-4 border-blue-500 pl-6 py-4 cursor-pointer ${
                  isEditing ? 'hover:border-blue-400 transition-colors' : ''
                }`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <p className="text-lg text-neutral-200 italic mb-3">{block.content.text}</p>
                {block.content.author && (
                  <cite className="text-sm text-neutral-400">— {block.content.author}</cite>
                )}
              </blockquote>
            )}
          </div>
        );

      case 'list':
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg">
                <select
                  value={block.content.type}
                  onChange={(e) => updateBlock(block.id, { ...block.content, type: e.target.value })}
                  className="bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                >
                  <option value="bullet">Bullet List</option>
                  <option value="numbered">Numbered List</option>
                </select>
                {block.content.items.map((item: string, index: number) => (
                  <div key={index} className="flex space-x-3">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const newItems = [...block.content.items];
                        newItems[index] = e.target.value;
                        updateBlock(block.id, { ...block.content, items: newItems });
                      }}
                      className="flex-1 bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                    />
                    <button
                      onClick={() => {
                        const newItems = block.content.items.filter((_: any, i: number) => i !== index);
                        updateBlock(block.id, { ...block.content, items: newItems });
                      }}
                      className="p-3 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      const newItems = [...block.content.items, 'New item'];
                      updateBlock(block.id, { ...block.content, items: newItems });
                    }}
                    className="px-4 py-2 bg-neutral-700 text-neutral-300 rounded hover:bg-neutral-600 transition-colors"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => setEditingBlockId(null)}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`cursor-pointer ${isEditing ? 'hover:opacity-80 transition-opacity' : ''}`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                {block.content.type === 'numbered' ? (
                  <ol className="list-decimal list-inside space-y-2 text-neutral-300 pl-4">
                    {block.content.items.map((item: string, index: number) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 pl-4">
                    {block.content.items.map((item: string, index: number) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );

      case 'callout':
        const calloutColors = {
          info: 'border-blue-500/30 bg-blue-500/5 text-blue-300',
          warning: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-300',
          error: 'border-red-500/30 bg-red-500/5 text-red-300',
          success: 'border-green-500/30 bg-green-500/5 text-green-300'
        };
        
        return (
          <div key={block.id} className="relative group mb-8">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {isEditingThis ? (
              <div className="space-y-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg">
                <select
                  value={block.content.type}
                  onChange={(e) => updateBlock(block.id, { ...block.content, type: e.target.value })}
                  className="bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
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
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3"
                />
                <textarea
                  placeholder="Content"
                  value={block.content.text}
                  onChange={(e) => updateBlock(block.id, { ...block.content, text: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-3 min-h-[120px]"
                />
                <button
                  onClick={() => setEditingBlockId(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div
                className={`border rounded-lg p-6 cursor-pointer ${calloutColors[block.content.type as keyof typeof calloutColors]} ${
                  isEditing ? 'hover:opacity-80 transition-opacity' : ''
                }`}
                onClick={() => isEditing && setEditingBlockId(block.id)}
              >
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">{block.content.title}</h4>
                    <p className="opacity-90 leading-relaxed">{block.content.text}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'divider':
        return (
          <div key={block.id} className="relative group mb-12">
            {isEditing && (
              <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <hr className="border-neutral-800" />
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
          <h1 className="text-3xl font-light mb-6">Post Not Found</h1>
          <button
            onClick={() => navigate('/blog/1')}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mx-auto"
          >
            <MoveLeft className="w-5 h-5" />
            <span>Back to Last Blog</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <article>
          {/* Article Header */}
          <header className="mb-16">
            {/* 1. Теги, дата, время чтения */}
            <div className="flex items-center space-x-6 mb-8 text-sm text-neutral-400">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Date */}
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              {/* Reading Time */}
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{calculateReadingTime(post.blocks)} min read</span>
              </div>
            </div>

            {/* 2. Заголовок */}
            {isEditing ? (
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full text-4xl md:text-5xl font-light leading-tight mb-4 bg-transparent border-b border-neutral-800 pb-4 focus:outline-none focus:border-blue-500 text-neutral-100"
                placeholder="Enter title..."
              />
            ) : (
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4 text-neutral-100">
                {post.title}
              </h1>
            )}

            {/* 3. Подзаголовок */}
            {isEditing ? (
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="w-full text-lg text-neutral-400 leading-relaxed mb-8 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-4 min-h-[100px] focus:outline-none focus:border-blue-500"
                placeholder="Enter excerpt..."
              />
            ) : (
              <p className="text-lg text-neutral-400 leading-relaxed mb-8 font-light">
                {post.excerpt}
              </p>
            )}

            {/* 4. Автор */}
            <div className="flex items-center space-x-4">
              <img 
                src={authorAvatars[post.author] || authorAvatars['Blur Team']}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-neutral-800"
              />
              <div>
                <div className="text-neutral-100 font-medium">{post.author}</div>
                <div className="text-neutral-500 text-sm">Author</div>
              </div>
            </div>
          </header>

          {/* Separator */}
          <div className="border-t border-neutral-800/50 mt-6 mb-12"></div>

          {/* Content Blocks */}
          <div className="space-y-6">
            {post.blocks
              .sort((a, b) => a.order - b.order)
              .map(renderBlock)}
          </div>

          {/* Add Block Panel */}
          {isEditing && (
            <div className="mt-16 p-8 bg-neutral-900/50 rounded-xl border border-neutral-800/50">
              <h3 className="text-lg font-medium mb-6 text-neutral-200">Add Content Block</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {blockTypes.map((blockType) => {
                  const IconComponent = blockType.icon;
                  return (
                    <button
                      key={blockType.type}
                      onClick={() => addBlock(blockType.type as ContentBlock['type'])}
                      className="flex items-center space-x-3 p-4 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg transition-colors text-sm border border-neutral-700/50 hover:border-neutral-600/50"
                    >
                      <IconComponent className="w-4 h-4 text-neutral-400" />
                      <span className="text-neutral-300">{blockType.label}</span>
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