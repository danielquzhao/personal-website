import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-12">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-full md:h-auto md:aspect-square rounded-lg overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=400&width=400" alt="Daniel Zhao" fill className="object-cover" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Daniel Zhao</h1>
              <p className="text-gray-400 mb-6">Second-year Computer Science student at the University of Waterloo</p>
              <div className="space-y-4">
                <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center">
                  <span className="text-gray-500 w-24 md:w-auto lg:w-24 font-medium md:mb-1 lg:mb-0">Location:</span>
                  <span>Waterloo, ON</span>
                </div>

                <div className="flex flex-row md:flex-col lg:flex-row items-start md:items-start lg:items-start">
                  <span className="text-gray-500 w-24 md:w-auto lg:w-24 font-medium md:mb-1 lg:mb-0">Email:</span>
                  <a
                    href="mailto:danielquzhao@gmail.com"
                    className="hover:underline break-words"
                  >
                    danielquzhao@gmail.com
                  </a>
                </div>

                <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center">
                  <span className="text-gray-500 w-24 md:w-auto lg:w-24 font-medium md:mb-1 lg:mb-0">GitHub:</span>
                  <a
                    href="https://github.com/danielquzhao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-words"
                  >
                    github.com/danielquzhao
                  </a>
                </div>

                <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center">
                  <span className="text-gray-500 w-24 md:w-auto lg:w-24 font-medium md:mb-1 lg:mb-0">LinkedIn:</span>
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
          </div>

          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Hello! I'm Daniel, a second-year Computer Science student at the University of Waterloo. I'm passionate
                  about technology, problem-solving, and creating meaningful digital experiences.
                </p>
                <p>
                  I'm particularly interested in web development, artificial intelligence, and software engineering. I
                  enjoy the process of turning ideas into reality through code and am constantly learning new
                  technologies and frameworks to enhance my abilities.
                </p>
                <p>
                  When I'm not coding, you can find me running, playing piano, or exploring new places. I believe in the power of continuous learning and am always looking for new challenges and
                  opportunities to grow.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="border-l-2 border-gray-800 pl-8 ml-5 space-y-6">
                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/warg-logo.png" alt="WARG" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Waterloo Aerial Robotics Group</h3>
                      <p className="text-gray-400">Autonomy Software Developer</p>
                      <p className="text-gray-500">May. 2025 - Present</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Second-year Computer Science student</li>
                        <li>Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming</li>
                        <li>Member of the Computer Science Club</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/electrium-logo.png" alt="Electrium" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Electrium Mobility</h3>
                      <p className="text-gray-400">Web Developer</p>
                      <p className="text-gray-500">Apr. 2025 - Present</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/acupuncture-logo.png" alt="Classic Acupuncture" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Classic Acupuncture Inc</h3>
                      <p className="text-gray-400">Web Developer</p>
                      <p className="text-gray-500">Jan. 2025 - Apr. 2025</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/wrl-logo.png" alt="Waterloo Reality Labs" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Waterloo Reality Labs</h3>
                      <p className="text-gray-400">Software Developer</p>
                      <p className="text-gray-500">Sep. 2024 - Apr. 2025</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/music-logo.png" alt="Royal Music Academy" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Royal Music Academy</h3>
                      <p className="text-gray-400">Piano Teacher</p>
                      <p className="text-gray-500">Sep. 2023 - May. 2024</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/taekwondo-logo.png" alt="Hong Park Taekwondo" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Hong Park Taekwondo</h3>
                      <p className="text-gray-400">Taekwondo Instructor</p>
                      <p className="text-gray-500">Sep. 2021 - Jun. 2022</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 mr-6 -ml-16">
                      <Image src="/subway-logo.png" alt="Subway" fill className="object-cover" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold">Subway</h3>
                      <p className="text-gray-400">Sandwich Engineer</p>
                      <p className="text-gray-500">Jul. 2021 - Aug. 2021</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Graduated with honors</li>
                        <li>President of the Coding Club</li>
                        <li>Participated in various programming competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">C</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">C++</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">C#</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">HTML</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">CSS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">TypeScript</span>
                  </div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Next.js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Express.js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Flask</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  </div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Git</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Bash</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Linux</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Docker</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">MongoDB</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Firebase</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">AWS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Vercel</span>
                  </div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Problem Solving</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Teamwork</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Communication</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Time Management</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Adaptability</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
