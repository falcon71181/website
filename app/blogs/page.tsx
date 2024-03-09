import React from "react";
import { getPosts } from "@/lib/blogs";
import Blogs from "./Blogs";

export const metadata = {
  title: "Blogs",
  description: "Read my blogs.",
};

export default async function PostsPage() {
  let allPosts = getPosts();

  return <Blogs allPosts={allPosts} />;
}
