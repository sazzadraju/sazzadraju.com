import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getRecentPostsSimple(limit: number = 3) {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdoc'));
    
    const posts = files.map(filename => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const slug = filename.replace('.mdoc', '');
      
      return {
        slug: slug,
        entry: {
          title: data.title || slug,
          date: data.date,
          category: data.category,
          excerpt: data.excerpt,
        }
      };
    });
    
    // Sort by date
    posts.sort((a, b) => {
      const dateA = new Date(a.entry.date || '');
      const dateB = new Date(b.entry.date || '');
      return dateB.getTime() - dateA.getTime();
    });
    
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}
