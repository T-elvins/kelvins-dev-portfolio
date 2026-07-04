"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";
import blogs from "@/data/blogs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SmoothScroll from "@/components/smooth-scroll";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-24 gap-4">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link href="/blogs">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </main>
    );
  }

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <SmoothScroll>
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8">
        <article className="max-w-3xl mx-auto">
          <Link href="/blogs">
            <Button variant="ghost" className="mb-8 pl-0 font-mono">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>

          <span className="text-xs font-mono px-2 py-1 rounded-full border border-border">
            {post.tag}
          </span>

          <h1
            className={cn(
              "text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight"
            )}
          >
            {post.title}
          </h1>

          <p className="text-sm font-mono text-muted-foreground mb-8">
            {formatDate(post.date)} · {post.readTime} · By Kelvins Ontiri
          </p>

          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-none font-mono">
            {post.content.map((para, idx) => (
              <p key={idx} className="mb-5 leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>

          {post.pricingTiers && (
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {post.pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "rounded-2xl border p-6 flex flex-col",
                    tier.highlighted
                      ? "border-primary shadow-lg scale-[1.02] bg-primary/5"
                      : "border-border bg-card/40"
                  )}
                >
                  {tier.highlighted && (
                    <span className="text-xs font-mono uppercase tracking-wide text-primary mb-2 w-fit px-2 py-1 rounded-full border border-primary">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                  <p className="text-2xl font-extrabold mb-2">{tier.price}</p>
                  <p className="text-sm text-muted-foreground font-mono mb-4">
                    {tier.bestFor}
                  </p>
                  <ul className="space-y-2 text-sm font-mono">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-sm text-muted-foreground mb-6">
              Got a project in mind? Let&apos;s build it properly.
            </p>
            <Link href="/#contact">
              <Button variant="default">Start a Project</Button>
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <div className="max-w-5xl mx-auto mt-24">
            <h2 className="text-2xl font-bold mb-8">More from the blog</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group flex flex-col rounded-xl border border-border overflow-hidden bg-card/40 hover:bg-card/70 transition-colors"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold group-hover:underline underline-offset-4">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </SmoothScroll>
  );
}

export default BlogPostPage;
