import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-12">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=400&width=400" alt="Daniel Zhao" fill className="object-cover" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Daniel Zhao</h1>
              <p className="text-gray-400 mb-6">First-year Computer Science student at the University of Waterloo</p>
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
                  Hello! I'm Daniel, a first-year Computer Science student at the University of Waterloo. I'm passionate
                  about technology, problem-solving, and creating meaningful digital experiences.
                </p>
                <p>
                  My journey in computer science began when I was in high school, where I first discovered my love for
                  coding through creating simple games and websites. This passion led me to pursue a degree in Computer
                  Science at the University of Waterloo, where I'm currently expanding my knowledge and skills.
                </p>
                <p>
                  I'm particularly interested in web development, artificial intelligence, and software engineering. I
                  enjoy the process of turning ideas into reality through code and am constantly learning new
                  technologies and frameworks to enhance my abilities.
                </p>
                <p>
                  When I'm not coding or studying, you can find me playing basketball, reading tech blogs, or exploring
                  new places. I believe in the power of continuous learning and am always looking for new challenges and
                  opportunities to grow.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="border-l-2 border-gray-800 pl-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">University of Waterloo</h3>
                  <p className="text-gray-400">Bachelor of Computer Science</p>
                  <p className="text-gray-500">2024 - 2028 (Expected)</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>First-year Computer Science student</li>
                    <li>Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming</li>
                    <li>Member of the Computer Science Club</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">High School</h3>
                  <p className="text-gray-400">High School Diploma</p>
                  <p className="text-gray-500">2020 - 2024</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Graduated with honors</li>
                    <li>President of the Coding Club</li>
                    <li>Participated in various programming competitions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">TypeScript</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Java</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">C++</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">HTML/CSS</span>
                  </div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Next.js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Express</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">MongoDB</span>
                  </div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Git</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">GitHub</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">VS Code</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">Docker</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">AWS</span>
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

            <section>
              <h2 className="text-2xl font-bold mb-4">Interests</h2>
              <div className="prose prose-invert max-w-none">
                <p>Beyond coding and academics, I have a variety of interests that keep me balanced and inspired:</p>
                <ul>
                  <li>
                    <strong>Technology & Innovation:</strong> I enjoy staying up-to-date with the latest tech trends and
                    innovations.
                  </li>
                  <li>
                    <strong>Basketball:</strong> Playing basketball is my favorite way to stay active and clear my mind.
                  </li>
                  <li>
                    <strong>Reading:</strong> I love reading books on technology, science fiction, and personal
                    development.
                  </li>
                  <li>
                    <strong>Photography:</strong> Capturing moments and exploring photography as a creative outlet.
                  </li>
                  <li>
                    <strong>Travel:</strong> Exploring new places and experiencing different cultures.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
