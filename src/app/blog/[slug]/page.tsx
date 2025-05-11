import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/blog/${slug}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return null;
  const doc = await res.json();
  if (!doc.fields) return null;
  const fields = doc.fields;
  return {
    id: slug,
    title: fields.title?.stringValue || '',
    slug: fields.slug?.stringValue || '',
    excerpt: fields.excerpt?.stringValue || '',
    content: fields.content?.stringValue || '',
    date: fields.date?.stringValue || '',
    tags: fields.tags?.arrayValue?.values?.map((v: { stringValue: string }) => v.stringValue) || [],
    author: fields.author?.stringValue || '',
    imageUrl: fields.imageUrl?.stringValue || '',
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/blog" className="text-green-700 hover:text-amber-600 font-semibold">← Back to Blog</Link>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl font-serif font-bold text-green-900 mb-2">{post.title}</h1>
        <div className="text-green-400 text-sm mb-6">{post.date}</div>
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-xl mb-8 w-full object-cover max-h-96"
            priority
          />
        )}
        <article className="prose prose-green max-w-none text-green-900">
          {post.content?.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </article>
        <div className="mt-10">
          <Link href="/blog" className="text-green-700 hover:text-amber-600 font-semibold">← Back to Blog</Link>
        </div>
      </div>
    </div>
  );
} 