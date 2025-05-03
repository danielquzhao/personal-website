import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "My personal website built with Next.js, TypeScript, and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/danielzhao/personal-website",
      demo: "https://danielzhao.com",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A simple task manager application to keep track of your daily tasks.",
      tags: ["React", "Firebase", "CSS"],
      github: "https://github.com/danielzhao/task-manager",
      demo: "https://task-manager-danielzhao.vercel.app",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that shows current weather and forecast for any location.",
      tags: ["JavaScript", "Weather API", "HTML/CSS"],
      github: "https://github.com/danielzhao/weather-app",
      demo: "https://weather-app-danielzhao.vercel.app",
    },
    {
      id: 4,
      title: "Calculator",
      description: "A simple calculator web application with basic arithmetic operations.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/danielzhao/calculator",
      demo: "https://calculator-danielzhao.vercel.app",
    },
    {
      id: 5,
      title: "Tic Tac Toe",
      description: "A classic game of Tic Tac Toe implemented with React.",
      tags: ["React", "CSS", "Game Development"],
      github: "https://github.com/danielzhao/tic-tac-toe",
      demo: "https://tic-tac-toe-danielzhao.vercel.app",
    },
    {
      id: 6,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers and designers.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/danielzhao/portfolio-template",
      demo: "https://portfolio-template-danielzhao.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-lg p-6 hover:border-muted transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
                >
                  <Github className="mr-1 h-4 w-4" /> Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
                >
                  <ExternalLink className="mr-1 h-4 w-4" /> Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
