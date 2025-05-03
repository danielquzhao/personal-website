import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto">
        <div className="border-t border-gray-800 max-w-4xl mx-auto pt-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              Daniel Zhao © 2025
            </div>
            <div className="flex space-x-6">
              <Link
                href="mailto:danielquzhao@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://github.com/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 