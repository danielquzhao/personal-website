"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, Download, ArrowUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="container mx-auto flex-1 py-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Hi there, I'm Daniel Zhao!</h1>
            <p className="text-xl text-gray-400">
              I&apos;m a second year Computer Science student at the{" "}
              <Link href="https://cs.uwaterloo.ca" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                University of Waterloo
              </Link>
              .
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Currently:</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Autonomy Software Developer at{" "}
                    <Link href="https://www.uwarg.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                      WARG
                    </Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Web Developer at <span className="text-white">Classic Acupuncture Inc</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Software Developer at{" "}
                    <Link href="https://uwrealitylabs.com/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                      Waterloo Reality Labs
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Button asChild className="gap-2">
                <Link href="/DanielZhao.pdf" target="_blank" rel="noopener noreferrer">
                  Download my Resume <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
              <Image
                src="/pfp.png"
                alt="Daniel Zhao"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-500 p-3 rounded-full">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p>
            I'm passionate about technology, problem-solving, and creating meaningful digital experiences.When I'm not coding, you can find me running, playing piano, or exploring new places. I believe in the power of continuous learning and am always looking for new challenges and
              opportunities to grow.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/about" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              Learn more about me <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="-mb-10">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-400 mb-4">
                  A brief description of this amazing project that showcases my skills and creativity.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`https://github.com/yourusername/project${i}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white inline-flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </Link>
                  <Link
                    href={`https://project${i}.demo.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white inline-flex items-center"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-12">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Back to top</span>
              </Button>
              <span className="text-sm text-gray-500 ml-2">© 2025 Daniel Zhao</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:danielquzhao@gmail.com" className="text-gray-500 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}