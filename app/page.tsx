"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, Download, ArrowUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-3xl font-bold tracking-tight lg:text-3xl">Hi, I'm Daniel Zhao!</h1>
            <p className="text-xl text-muted-foreground">
              I'm a second year Computer Science student at the{" "}
              <Link href="https://cs.uwaterloo.ca" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                University of Waterloo
              </Link>
              .
            </p>
            <div>
              <Button asChild className="gap-2">
                <Link href="/DanielZhao.pdf" target="_blank" rel="noopener noreferrer">
                  Download my Resume <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-52 h-52 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-border/10">
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
      </main>

      <Footer />
    </div>
  )
}