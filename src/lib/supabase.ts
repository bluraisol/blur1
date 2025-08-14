import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Validate URL format
try {
  new URL(supabaseUrl);
} catch {
  console.warn('Invalid Supabase URL provided. Using placeholder. Please connect to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: ContentBlock[];
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  author_id?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface ContentBlock {
  id?: string;
  type: 'text' | 'heading' | 'image' | 'code' | 'quote' | 'list' | 'divider' | 'alert';
  content: any;
  order_index?: number;
}

// Blog API functions
export const blogApi = {
  // Get published posts
  async getPublishedPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });
    
    if (error) throw error;
    return data as BlogPost[];
  },

  // Get post by slug
  async getPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  // Create new post
  async createPost(post: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{
        ...post,
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  // Update post
  async updatePost(id: string, updates: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  // Delete post
  async deletePost(id: string) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};