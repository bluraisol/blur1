/*
  # Blog System Schema

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (jsonb) - structured content blocks
      - `featured_image` (text)
      - `status` (text) - draft, published, archived
      - `author_id` (uuid)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published_at` (timestamp)
    - `content_blocks`
      - `id` (uuid, primary key)
      - `post_id` (uuid, foreign key)
      - `type` (text) - text, image, code, quote, list, etc.
      - `content` (jsonb)
      - `order_index` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
</sql>

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content jsonb DEFAULT '[]'::jsonb,
  featured_image text,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  author_id uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz
);

CREATE TABLE IF NOT EXISTS content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('text', 'heading', 'image', 'code', 'quote', 'list', 'divider', 'alert')),
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts
CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Anyone can read content blocks of published posts"
  ON content_blocks
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts 
      WHERE blog_posts.id = content_blocks.post_id 
      AND blog_posts.status = 'published'
    )
  );

-- Admin write access (you can modify this based on your auth setup)
CREATE POLICY "Authenticated users can manage posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage content blocks"
  ON content_blocks
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_content_blocks_post_id ON content_blocks(post_id);
CREATE INDEX IF NOT EXISTS idx_content_blocks_order ON content_blocks(post_id, order_index);

-- Insert sample blog post
INSERT INTO blog_posts (title, slug, excerpt, status, published_at, content) VALUES 
(
  'Blur v2.0 Release - Revolutionary AI Updates',
  'blur-v2-release',
  'Major update introducing enhanced AI scanning capabilities, improved accuracy, and new features for memecoin analysis.',
  'published',
  now(),
  '[
    {
      "type": "heading",
      "content": {
        "level": 2,
        "text": "What''s New in Blur v2.0"
      }
    },
    {
      "type": "text",
      "content": {
        "text": "We''re excited to announce the release of Blur v2.0, our most significant update yet. This release brings revolutionary improvements to our AI scanning systems and introduces powerful new features."
      }
    },
    {
      "type": "alert",
      "content": {
        "type": "success",
        "title": "Performance Boost",
        "text": "AI scanning speed increased by 300% with improved accuracy across all systems."
      }
    },
    {
      "type": "heading",
      "content": {
        "level": 3,
        "text": "Enhanced AI Systems"
      }
    },
    {
      "type": "list",
      "content": {
        "type": "bullet",
        "items": [
          "Twitter AI now processes 1M+ posts per second",
          "DEX Scanning AI accuracy improved to 91.8%",
          "New Phishing Detection AI with 64.4% accuracy",
          "Enhanced Smart Holder identification"
        ]
      }
    },
    {
      "type": "code",
      "content": {
        "language": "javascript",
        "code": "// Example API response\n{\n  \"coin\": \"$BLUR\",\n  \"confidence\": 0.918,\n  \"signals\": [\n    \"high_volume\",\n    \"verified_influencer\",\n    \"low_rug_probability\"\n  ]\n}"
      }
    },
    {
      "type": "quote",
      "content": {
        "text": "This update represents months of research and development. We''ve completely rebuilt our core AI systems from the ground up.",
        "author": "Blur Team"
      }
    }
  ]'::jsonb
);

-- Insert content blocks for the sample post
INSERT INTO content_blocks (post_id, type, content, order_index)
SELECT 
  (SELECT id FROM blog_posts WHERE slug = 'blur-v2-release'),
  'text',
  '{"text": "Additional content block example for demonstration purposes."}'::jsonb,
  1;