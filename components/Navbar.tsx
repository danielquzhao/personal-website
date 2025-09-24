"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only show the theme toggle after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <header className="container mx-auto flex items-center justify-between py-12">
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
          DZ
        </Link>
        <Link href="/about" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
        <Link href="/projects" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
          Projects
        </Link>
      </nav>
      <div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span className="sr-only">Toggle theme</span>
          {mounted ? (
            theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          ) : (
            // Render a placeholder during SSR to avoid hydration mismatch
            <div className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  )
} 