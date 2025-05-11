import BlogList from './BlogList';

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-green-900 mb-4 text-center">White Glove Blog</h1>
        <p className="text-green-700 text-lg mb-10 text-center">Luxury golf travel tips, destination guides, and expert advice from our concierge team.</p>
        <BlogList />
      </div>
    </div>
  );
} 