"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BlogCard from "@/components/blogs/BlogCard";

export default function Blogs({ allPosts }: { allPosts: any }) {
  const searchParams = useSearchParams();
  const filter_tag = searchParams.get("tag");

  const filteredPosts = filter_tag
    ? allPosts.filter((post: any) => post.metadata.tag.includes(filter_tag))
    : allPosts;

  // TODO: Hide tags that has no Blog posts
  const tags = [
    { name: "All", href: "/blogs", tag: null },
    { name: "Anime", href: "/blogs?tag=anime", tag: "anime" },
    { name: "Github", href: "/blogs?tag=github", tag: "github" },
    { name: "HTB", href: "/blogs?tag=htb", tag: "htb" },
    { name: "Personal", href: "/blogs?tag=personal", tag: "personal" },
    { name: "Technical", href: "/blogs?tag=technical", tag: "technical" },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 p-3 mt-1">
      <div className="flex flex-col">
        <Link
          href="/"
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
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold md:px-6 mb-2 sm:mb-3 lg:mb-6 md:mb-4 transition-all duration-500">
          All Blogs
        </span>
        <div className="flex flex-row space-x-4 mb-6 md:mb-4 text-sm  md:px-6">
          {tags.map(({ name, href, tag }) => (
            <Link
              key={name}
              href={href}
              className={`${tag === filter_tag ? "tracking-wider font-bold text-black dark:text-white underline" : "text-black_darker dark:text-title_dark"} hover:text-black dark:hover:text-white duration-200 hover:underline`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3 md:px-2 transition-all duration-500">
          {filteredPosts
            .sort((a: any, b: any) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post: any, index: number) => {
              return <BlogCard key={index} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}
