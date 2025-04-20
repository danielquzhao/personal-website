import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "My First Year at UWaterloo",
      excerpt:
        "Reflections on my experiences, challenges, and growth during my first year studying Computer Science at the University of Waterloo.",
      date: "April 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Getting Started with Next.js",
      excerpt: "A beginner's guide to building modern web applications with Next.js, React, and TypeScript.",
      date: "March 22, 2025",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Power of Tailwind CSS",
      excerpt:
        "How Tailwind CSS has revolutionized my approach to styling web applications and improved my development workflow.",
      date: "February 10, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "My Internship Search Experience",
      excerpt:
        "Tips, strategies, and lessons learned from my journey to secure a software engineering internship as a first-year student.",
      date: "January 5, 2025",
      readTime: "10 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <p className="text-gray-400 mb-12 max-w-2xl">
          Welcome to my blog where I share my thoughts, experiences, and learnings about computer science, web
          development, and student life at the University of Waterloo.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-800 pb-8">
              <Link href={`/blog/${post.id}`} className="block group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-gray-300">{post.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-400">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-400 group-hover:text-white">Read more →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
