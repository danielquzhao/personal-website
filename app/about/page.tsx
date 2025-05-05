import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex flex-col">
          <div className="mb-12 flex flex-col items-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden mb-10">
              <Image src="/scene.png" alt="Daniel Zhao" fill className="object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Daniel Zhao</h1>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-xl">
              <div className="flex flex-col">
                <span className="text-muted-foreground font-medium mb-1">Location:</span>
                <span>Waterloo, ON</span>
              </div>

              <div className="flex flex-col">
                <span className="text-muted-foreground font-medium mb-1">Email:</span>
                <a
                  href="mailto:danielquzhao@gmail.com"
                  className="hover:underline break-words"
                >
                  danielquzhao@gmail.com
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-muted-foreground font-medium mb-1">GitHub:</span>
                <a
                  href="https://github.com/danielquzhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-words"
                >
                  github.com/danielquzhao
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-muted-foreground font-medium mb-1">LinkedIn:</span>
                <a
                  href="https://linkedin.com/in/danielquzhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-words"
                >
                  linkedin.com/in/danielquzhao
                </a>
              </div>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="prose prose-invert dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  I'm passionate about technology, problem-solving, and creating meaningful digital experiences. When I'm not coding, you can find me running, playing piano, or exploring new places. I believe in the power of continuous learning and am always looking for new challenges and opportunities to grow.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="border-l-2 border-border pl-8 ml-8 space-y-6">

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0 mr-6 -ml-16">
                      <Image src="/acupuncture-logo.png" alt="Classic Acupuncture" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Classic Acupuncture Inc</h3>
                      <p className="text-muted-foreground">Web Developer</p>
                      <p className="text-muted-foreground">Mar. 2025 - Present</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0 mr-6 -ml-16">
                      <Image src="/wrl-logo.png" alt="Waterloo Reality Labs" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Waterloo Reality Labs</h3>
                      <p className="text-muted-foreground">Software Developer</p>
                      <p className="text-muted-foreground">Sep. 2024 - Apr. 2025</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0 mr-6 -ml-16">
                      <Image src="/music-logo.png" alt="Royal Music Academy" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Royal Music Academy</h3>
                      <p className="text-muted-foreground">Piano Teacher</p>
                      <p className="text-muted-foreground">Sep. 2023 - May. 2024</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0 mr-6 -ml-16">
                      <Image src="/taekwondo-logo.png" alt="Hong Park Taekwondo" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Hong Park Taekwondo</h3>
                      <p className="text-muted-foreground">Taekwondo Instructor</p>
                      <p className="text-muted-foreground">Sep. 2021 - Jun. 2022</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0 mr-6 -ml-16">
                      <Image src="/subway-logo.png" alt="Subway" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Subway</h3>
                      <p className="text-muted-foreground">Sandwich Engineer</p>
                      <p className="text-muted-foreground">Jul. 2021 - Aug. 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary px-2 py-1 rounded text-sm">C</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">C++</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">C#</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">HTML</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">CSS</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">TypeScript</span>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Next.js</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Express.js</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Flask</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Git</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Bash</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Linux</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Docker</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">MongoDB</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">PostgreSQL</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Firebase</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">AWS</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Vercel</span>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Problem Solving</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Teamwork</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Communication</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Time Management</span>
                    <span className="bg-secondary px-2 py-1 rounded text-sm">Adaptability</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
