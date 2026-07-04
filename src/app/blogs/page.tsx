"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogs from "@/data/blogs";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/smooth-scroll";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogsPage() {
  const [featured, ...rest] = blogs;

  return (
    <SmoothScroll>
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Notes from the field
          </p>
          <h1
            className={cn(
              "bg-clip-text text-4xl md:text-6xl text-transparent mb-6",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/30"
            )}
          >
            The Blog
          </h1>
          <p className="max-w-2xl text-muted-foreground font-mono mb-16">
            Thoughts on building real products — fintech apps, marketplaces,
            e-commerce platforms and corporate websites — written by me,
            Kelvins, a full-stack developer & digital product designer.
          </p>

          {featured && (
            <Link href={`/blogs/${featured.slug}`} className="group block mb-16">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl border border-border overflow-hidden bg-card/40 hover:bg-card/70 transition-colors">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:pr-10">
                  <span className="text-xs font-mono px-2 py-1 rounded-full border border-border">
                    {featured.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3 group-hover:underline underline-offset-4">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground font-mono text-sm mb-4">
                    {featured.excerpt}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    {formatDate(featured.date)} · {featured.readTime}
                  </p>
                </div>
              </div>
            </Link>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col rounded-xl border border-border overflow-hidden bg-card/40 hover:bg-card/70 transition-colors"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-mono px-2 py-1 rounded-full border border-border w-fit">
                    {post.tag}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 group-hover:underline underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-auto">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default BlogsPage;
