import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {post.title === "Settler" && "223 views"}
                {post.title === "Siege-GPT" && "49 views"}
                {post.title === "Edvora" && "47 views"}
                {post.title === "Netlify - 1Password Shell Plugin" && "151 views"}
                {post.title === "Railway - 1Password Shell Plugin" && "145 views"}
                {post.title === "AI Commits - 1Password Integration" && "137 views"}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
