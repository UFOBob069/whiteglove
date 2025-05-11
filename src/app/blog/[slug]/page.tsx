import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  if (!params.slug) return notFound();
  return <div>Slug: {params.slug}</div>;
} 