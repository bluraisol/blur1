import React, { useState } from 'react';
import { ContentBlock } from '../../lib/supabase';
import { Plus, Save, Eye } from 'lucide-react';
import ContentBlockRenderer from './ContentBlockRenderer';

interface BlogEditorProps {
  initialContent?: ContentBlock[];
  onSave: (content: ContentBlock[]) => void;
  onPreview?: () => void;
}

export default function BlogEditor({ initialContent = [], onSave, onPreview }: BlogEditorProps) {
  const [content, setContent] = useState<ContentBlock[]>(initialContent);
  const [showBlockMenu, setShowBlockMenu] = useState(false);

  const blockTypes = [
    { type: 'heading', label: 'Heading', icon: 'H' },
    { type: 'text', label: 'Text', icon: 'T' },
    { type: 'image', label: 'Image', icon: '🖼️' },
    { type: 'code', label: 'Code', icon: '</>' },
    { type: 'quote', label: 'Quote', icon: '"' },
    { type: 'list', label: 'List', icon: '•' },
    { type: 'alert', label: 'Alert', icon: '⚠️' },
    { type: 'divider', label: 'Divider', icon: '—' }
  ];

  const addBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = {
      id: `temp-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      order_index: content.length
    };
    
    setContent([...content, newBlock]);
    setShowBlockMenu(false);
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
      case 'alert':
        return { type: 'info', title: 'Alert Title', text: 'Alert message' };
      case 'divider':
        return {};
      default:
        return {};
    }
  };

  const updateBlock = (index: number, updatedBlock: ContentBlock) => {
    const newContent = [...content];
    newContent[index] = updatedBlock;
    setContent(newContent);
  };

  const deleteBlock = (index: number) => {
    const newContent = content.filter((_, i) => i !== index);
    setContent(newContent);
  };

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Editor Toolbar */}
      <div className="sticky top-20 z-40 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800 p-4 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Blog Editor</h2>
          <div className="flex items-center space-x-3">
            {onPreview && (
              <button
                onClick={onPreview}
                className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
            )}
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="space-y-4 mb-8">
        {content.map((block, index) => (
          <ContentBlockRenderer
            key={block.id || index}
            block={block}
            isEditing={true}
            onUpdate={(updatedBlock) => updateBlock(index, updatedBlock)}
            onDelete={() => deleteBlock(index)}
          />
        ))}
      </div>

      {/* Add Block Button */}
      <div className="relative">
        <button
          onClick={() => setShowBlockMenu(!showBlockMenu)}
          className="flex items-center space-x-2 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors w-full justify-center border-2 border-dashed border-neutral-700 hover:border-neutral-600"
        >
          <Plus className="w-5 h-5" />
          <span>Add Content Block</span>
        </button>

        {/* Block Type Menu */}
        {showBlockMenu && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
              {blockTypes.map((blockType) => (
                <button
                  key={blockType.type}
                  onClick={() => addBlock(blockType.type as ContentBlock['type'])}
                  className="flex flex-col items-center space-y-2 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{blockType.icon}</span>
                  <span className="text-sm text-neutral-300">{blockType.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}