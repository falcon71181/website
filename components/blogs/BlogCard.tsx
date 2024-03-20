import React from "react";
import Link from "next/link";
import { reformatDate } from "@/lib/utils";
import { BlogMetadata } from "@/lib/blogs";

interface BlogCardProps {
  post: {
    slug: string;
    metadata: BlogMetadata;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      key={post.slug}
      href={`/blogs/${post.slug}`}
      className="group flex flex-row justify-between items-center p-2 md:p-4 rounded-lg backdrop-grayscale cursor-pointer border-[0.1px] border-gray-500 hover:border-hover_link_light dark:border-gray-700 hover:dark:border-gray-300 transition-all duration-500"
    >
      <div className="flex flex-col space-y-2">
        <span className="text-black dark:text-title_dark">
          {post.metadata.title}
        </span>
        <div className="flex flex-row space-x-2 items-center text-black_darker">
          <span>{reformatDate(post.metadata.publishedAt)}</span>
          {/* TODO - Add Views
                        <span>
                        </span>*/}
        </div>
      </div>

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:text-black_darker text-black dark:group-hover:text-gray-300 group-hover:text-blue-600 transition-all duration-500"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};

export default BlogCard;
