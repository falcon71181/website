import { cache, Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/blogs/mdx';
import { getPosts } from '@/lib/blogs';
import { reformatDate } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracing-beam';
import "@/app/mdx.css";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const CLIENT = process.env.NEXT_PUBLIC_CLIENT;

  let { metadata, slug, content } = post;
  let ogImage = metadata.image
    ? `${CLIENT}${metadata.image}`
    : `${CLIENT}/og?title=${metadata.title}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      url: `${CLIENT}/posts/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: any }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <div className='w-full p-3 mt-1'>
      <div className="flex text-sm text-secondaryDarker">
        <Link
          href="/blogs"
          className="flex flex-row text-lg space-x-2 items-center text-gray-700 dark:text-title_dark md:px-6 group cursor-pointer mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </Link>
      </div>
      <TracingBeam className='px-0 md:px-6 transition-all duration-150'>
        <h1 className="title font-medium text-2xl md:text-3xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <div className="flex flex-row space-x-2 items-center text-secondaryDarker">
            <span>{reformatDate(post.metadata.publishedAt)}</span>
            <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
            <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
          </div>
        </div>
        <hr />
        <article className="prose prose-invert pb-10">
          <CustomMDX source={post.content} />
        </article>
      </TracingBeam>
    </div>
  );
}
