import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import WebringIcon from "@/components/WebringIcon"

export default function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto">
        <div className="border-t-2 border-border max-w-4xl mx-auto pt-8">
          <div className="flex justify-between items-center">
            <div className="text-muted-foreground text-sm">
              Daniel Zhao © 2025
            </div>
            <div className="flex items-center gap-2">
              <Link className="text-muted-foreground hover:text-foreground transition-colors" href='https://cs.uwatering.com/#https://www.danielquzhao.com/?nav=prev'>←</Link>
              <Link href="https://cs.uwatering.com/#your-site-here" target="_blank"><WebringIcon size={24} className="text-muted-foreground"/></Link>
              <Link className="text-muted-foreground hover:text-foreground transition-colors" href='https://cs.uwatering.com/#https://www.danielquzhao.com/?nav=next'>→</Link>
            </div>
            <div className="flex space-x-6">
              <Link
                href="mailto:danielquzhao@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://github.com/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/danielquzhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
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