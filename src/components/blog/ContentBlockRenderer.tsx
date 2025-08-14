import React from 'react';
import { ContentBlock } from '../../lib/supabase';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

interface ContentBlockRendererProps {
  block: ContentBlock;
  isEditing?: boolean;
  onUpdate?: (block: ContentBlock) => void;
  onDelete?: () => void;
}

export default function ContentBlockRenderer({ 
  block, 
  isEditing = false, 
  onUpdate, 
  onDelete 
}: ContentBlockRendererProps) {
  
  const renderBlock = () => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.content.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag className={`font-light tracking-tight ${
            block.content.level === 1 ? 'text-4xl md:text-5xl mb-8' :
            block.content.level === 2 ? 'text-3xl md:text-4xl mb-6' :
            block.content.level === 3 ? 'text-2xl md:text-3xl mb-4' :
            'text-xl md:text-2xl mb-4'
          }`}>
            {block.content.text}
          </HeadingTag>
        );

      case 'text':
        return (
          <p className="text-neutral-300 leading-relaxed mb-6">
            {block.content.text}
          </p>
        );

      case 'image':
        return (
          <div className="mb-8">
            <img 
              src={block.content.url} 
              alt={block.content.alt || ''} 
              className="w-full rounded-xl shadow-lg"
            />
            {block.content.caption && (
              <p className="text-sm text-neutral-500 text-center mt-2">
                {block.content.caption}
              </p>
            )}
          </div>
        );

      case 'code':
        return (
          <div className="mb-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              {block.content.language && (
                <div className="px-4 py-2 bg-neutral-800 text-xs text-neutral-400 uppercase tracking-wider">
                  {block.content.language}
                </div>
              )}
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-blue-400 font-mono">
                  {block.content.code}
                </code>
              </pre>
            </div>
          </div>
        );

      case 'quote':
        return (
          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-500/5 rounded-r-lg">
            <p className="text-lg text-neutral-200 italic mb-2">
              "{block.content.text}"
            </p>
            {block.content.author && (
              <cite className="text-sm text-neutral-400">
                — {block.content.author}
              </cite>
            )}
          </blockquote>
        );

      case 'list':
        const ListTag = block.content.type === 'numbered' ? 'ol' : 'ul';
        return (
          <ListTag className={`mb-6 space-y-2 ${
            block.content.type === 'numbered' ? 'list-decimal list-inside' : 'list-disc list-inside'
          }`}>
            {block.content.items.map((item: string, index: number) => (
              <li key={index} className="text-neutral-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ListTag>
        );

      case 'divider':
        return (
          <hr className="border-neutral-800 my-12" />
        );

      case 'alert':
        const alertStyles = {
          info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info, color: 'text-blue-400' },
          success: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: CheckCircle, color: 'text-green-400' },
          warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: AlertTriangle, color: 'text-yellow-400' },
          error: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: XCircle, color: 'text-red-400' }
        };
        
        const alertType = block.content.type || 'info';
        const style = alertStyles[alertType as keyof typeof alertStyles];
        const IconComponent = style.icon;

        return (
          <div className={`${style.bg} ${style.border} border rounded-xl p-6 mb-8`}>
            <div className="flex items-start space-x-3">
              <IconComponent className={`w-5 h-5 ${style.color} flex-shrink-0 mt-0.5`} />
              <div>
                {block.content.title && (
                  <h4 className={`font-medium ${style.color} mb-2`}>
                    {block.content.title}
                  </h4>
                )}
                <p className="text-neutral-300 leading-relaxed">
                  {block.content.text}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isEditing) {
    return (
      <div className="relative group border border-neutral-800 rounded-lg p-4 mb-4 hover:border-neutral-700 transition-colors">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onDelete}
            className="text-red-400 hover:text-red-300 text-xs px-2 py-1 bg-neutral-900 rounded"
          >
            Delete
          </button>
        </div>
        {renderBlock()}
      </div>
    );
  }

  return renderBlock();
}