import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function PhotosPage() {
  const photos = [
    {
      id: 1,
      title: "Campus Life",
      src: "/placeholder.svg?height=400&width=600",
      alt: "University of Waterloo campus",
    },
    {
      id: 2,
      title: "Coding Session",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Laptop with code on screen",
    },
    {
      id: 3,
      title: "Hackathon",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team working at a hackathon",
    },
    {
      id: 4,
      title: "Nature Walk",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Forest trail",
    },
    {
      id: 5,
      title: "Downtown Waterloo",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Downtown Waterloo street view",
    },
    {
      id: 6,
      title: "Study Group",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students studying together",
    },
    {
      id: 7,
      title: "Winter Campus",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Snowy campus view",
    },
    {
      id: 8,
      title: "Sunset",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Beautiful sunset",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-8">Photos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
