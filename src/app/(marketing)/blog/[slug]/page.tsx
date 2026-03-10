
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import ImageWithFallback from '@/components/ImageWithFallback';

const SocialShare = ({ post }: { post: BlogPost }) => {
  const url = `https://creativesparx.com/blog/${post.slug}`;
  const text = `Check out this article: ${post.title}`;

  return (
    <div className="flex items-center space-x-4 mt-8">
      <p className="text-text-secondary font-semibold">Share this post:</p>
      <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
        <FiTwitter size={24} />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${post.title}&summary=${post.excerpt}`}
         target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
        <FiLinkedin size={24} />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
        <FiFacebook size={24} />
      </a>
    </div>
  );
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="bg-background text-text-primary">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <span className="text-primary hover:underline cursor-pointer">&larr; Back to Blog</span>
          </Link>

          <article className="mt-8">
            <header className="mb-8">
              <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
                <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                />
              </div>
              <h1 className="text-h1 font-bold text-transparent bg-clip-text bg-primary-gradient mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-text-muted">
                <p>By {post.author}</p>
                <span className="mx-2">&bull;</span>
                <p>{post.date}</p>
              </div>
            </header>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <SocialShare post={post} />
          </article>

          <aside className="mt-16">
            <h2 className="text-h2 text-center mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                  <div className="bg-card rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
                    <div className="relative h-48 w-full">
                      <ImageWithFallback
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-h3 mb-2">{relatedPost.title}</h3>
                      <p className="text-text-secondary">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
