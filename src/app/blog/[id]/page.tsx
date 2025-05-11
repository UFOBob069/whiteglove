import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tags: string[];
  author?: string;
  imageUrl?: string;
}

async function fetchBlogPost(id: string): Promise<BlogPost | null> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/blog/${id}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return null;
  const doc = await res.json();
  if (!doc.fields) return null;
  const fields = doc.fields;
  return {
    id,
    title: fields.title?.stringValue || '',
    excerpt: fields.excerpt?.stringValue || '',
    content: fields.content?.stringValue || '',
    date: fields.date?.stringValue || '',
    tags: fields.tags?.arrayValue?.values?.map((v: { stringValue: string }) => v.stringValue) || [],
    author: fields.author?.stringValue || '',
    imageUrl: fields.imageUrl?.stringValue || '',
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchBlogPost(params.id);
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <div>{post.content}</div>
    </div>
  );
} 