import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ChordCraft",
      description: "A web app that lets users play an interactive piano to generate and save sheet music compositions. Built at GeeseHacks 2025.",
      tags: ["JavaScript", "React", "Firebase", "ABCJS"],
      github: "https://github.com/yivwon/geesehacks",
      demo: null,
      image: "/chordcraft.png",
    },
    {
      id: 2,
      title: "Terra",
      description: "An AR mobile app that lets users place customizable 3D blocks in real-world environments using intuitive touch and raycasting controls. Built at UofTHacks 2025.",
      tags: ["C#", "Unity", "AR Foundation", "ARCore"],
      github: "https://github.com/MiniCube11/uofthacks",
      demo: null,
      image: "/terra.png",
    },
    {
      id: 3,
      title: "TrashMap",
      description: "An AI-powered web app that uses computer vision to identify waste items and guide users to proper disposal sites. Built at DeltaHacks 2025.",
      tags: ["Python", "Streamlit", "Google Cloud Vision API", "OpenAI API"],
      github: "https://github.com/AlexanderAmpuero/DeltaHacks_2025",
      demo: null,
      image: "/trashmap.png"
    },
    {
      id: 4,
      title: "Personal Website",
      description: "My personal website created to showcase my skills and interests.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/danielquzhao/personal-website",
      demo: null,
      image: "/portfolio.png"
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
              className="border border-border rounded-lg overflow-hidden hover:border-muted transition-colors"
            >
              <div className="relative w-full h-48 bg-secondary">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">No image available</span>
                  </div>
                )}
              </div>
            
              <div className="p-6">
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
                  
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
