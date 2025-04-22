"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="container mx-auto flex items-center justify-between py-12">
      <Link href="/" className="text-3xl font-semibold">
        Daniel Zhao
      </Link>
      <nav className="flex items-center gap-8">
        <Link href="/about" className="text-lg text-gray-400 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/projects" className="text-lg text-gray-400 hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/photos" className="text-lg text-gray-400 hover:text-white transition-colors">
          Photos
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only">Toggle theme</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </Button>
      </nav>
    </header>
  )
} 