import React, { Suspense } from "react";
import { getPosts } from "@/lib/blogs";
import Blogs from "./Blogs";
import Loader from "@/components/blogs/Loader";

export const metadata = {
  title: "Blogs",
  description: "Read my blogs.",
};

export default async function PostsPage() {
  let allPosts = getPosts();

  return (
    <Suspense fallback={<Loader />}>
      <Blogs allPosts={allPosts} />
    </ Suspense>
  );
}
