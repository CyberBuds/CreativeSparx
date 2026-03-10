
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function BlogIndexPage() {
  return (
    <div className="bg-background text-text-primary">
      <main className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-h1 text-transparent bg-clip-text bg-primary-gradient">The CreativeSparx Blog</h1>
          <p className="text-body text-text-secondary mt-4 max-w-2xl mx-auto">
            Insights, tips, and stories for the modern freelancer.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="bg-card rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
                <div className="relative h-48 w-full">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-h3 mb-2">{post.title}</h2>
                  <p className="text-text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-text-muted">
                    <span>{post.author}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
