import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  tags: string[];
  author?: string;
  imageUrl?: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/blog?pageSize=20`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.documents) return [];
  return data.documents
    .map((doc: any) => {
      const fields = doc.fields;
      if (!fields?.title || !fields?.slug || !fields?.excerpt || !fields?.date) {
        return null; // skip incomplete docs
      }
      return {
        id: doc.name.split('/').pop(),
        title: fields.title.stringValue,
        slug: fields.slug.stringValue,
        excerpt: fields.excerpt.stringValue,
        content: fields.content?.stringValue || '',
        date: fields.date.stringValue,
        tags: fields.tags?.arrayValue?.values?.map((v: any) => v.stringValue) || [],
        author: fields.author?.stringValue || '',
        imageUrl: fields.imageUrl?.stringValue || '',
      };
    })
    .filter(Boolean);
}

export default async function BlogList() {
  const posts = await fetchBlogPosts();
  if (!posts.length) {
    return <div className="text-center text-green-700">No blog posts found.</div>;
  }
  return (
    <div className="space-y-8">
      {posts.map(post => (
        <article key={post.id} className="bg-white rounded-xl shadow-md p-6 border border-green-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
              {post.tags?.map(tag => (
                <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
              ))}
            </div>
            <time className="text-sm text-green-400">{post.date}</time>
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            <Link href={`/blog/${post.id}`} className="hover:text-amber-600 transition-colors">{post.title}</Link>
          </h2>
          <p className="text-green-800 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4">
            <Link href={`/blog/${post.id}`} className="text-amber-600 font-semibold hover:underline">Read More</Link>
            {/* Social Sharing Buttons */}
            <div className="flex gap-2">
              <a href={`https://twitter.com/intent/tweet?url=https://whiteglove.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="hover:text-amber-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://whiteglove.com/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="hover:text-amber-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 