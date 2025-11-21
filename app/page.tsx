import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { getRecentPostsSimple } from "@/lib/blog-simple";
import ClientHeader from "@/components/ClientHeader";
import ContactModal from "@/components/ContactModal";

export default async function Home() {
  const recentPosts = await getRecentPostsSimple(3);
  return (
    <main className="min-h-screen bg-white">
      <ClientHeader />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left Side - Content */}
            <div className="flex-[2]">
              <Badge className="bg-slate-800 text-white hover:bg-slate-900 mb-3">Available for opportunities</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-gray-900">
                {profile.name}
              </h1>
              <p className="text-2xl font-semibold mb-4 text-slate-700">
                Product Manager & SaaS Expert
              </p>
              
              {/* Career Summary */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>12+ years</strong> leading global teams in <strong>SaaS, ERP, and cloud solutions</strong>. Specialized in <strong>CMMI L3, GDPR, and ISO 27001 compliance</strong> with <strong>operational excellence</strong> across <strong>retail, healthcare, and logistics</strong>. Expert in <strong>Agile methodologies</strong> and reducing costs by up to <strong>30%</strong>.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-6 flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📍</span>
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>🌐</span>
                  <span>Global Team Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>🏆</span>
                  <span>National ICT Award Winner</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>💼</span>
                  <span>$500K+ Budget Management</span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" asChild className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
                  <Link href="#projects">View Work</Link>
                </Button>

              </div>
            </div>
            
            {/* Right Side - Profile Picture */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-gray-50 border">
              <div className="text-3xl font-bold mb-1 text-slate-800">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border">
              <div className="text-3xl font-bold mb-1 text-slate-800">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border">
              <div className="text-3xl font-bold mb-1 text-slate-800">1M+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border">
              <div className="text-3xl font-bold mb-1 text-slate-800">30+</div>
              <div className="text-sm text-gray-600">Team Members Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">{profile.summary}</p>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Throughout my career, I have successfully delivered high-impact projects across multiple industries, consistently exceeding client expectations. My approach combines strategic thinking with hands-on execution, ensuring that products not only meet technical requirements but also drive measurable business outcomes.
              </p>
              <Button variant="outline" asChild className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
                <Link href="/resume.pdf" target="_blank">Download Resume →</Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Technical Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} className="bg-slate-800 text-white hover:bg-slate-900 text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Project Management</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.projectManagement.map((skill) => (
                    <Badge key={skill} className="bg-slate-800 text-white hover:bg-slate-900 text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Compliance</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.compliance.map((skill) => (
                    <Badge key={skill} className="bg-slate-800 text-white hover:bg-slate-900 text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Featured Projects</h2>
            <p className="text-gray-600">Award-winning solutions that drive business impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, idx) => (
              <Card key={project.title} className="border-2 hover:border-slate-800 transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-slate-800 text-white text-xs">{project.category}</Badge>
                    <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate-700">{project.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
              <Link href="/projects">View All Projects →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Experience</h2>
            <p className="text-gray-600">Leading teams and delivering results</p>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="relative pl-6 border-l-2 border-slate-300">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-800"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <Badge className="mb-2 bg-slate-800 text-white text-xs">{exp.period}</Badge>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{exp.title}</h3>
                  <p className="text-slate-700 font-semibold mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-3">{exp.location}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-slate-700 mt-0.5">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Latest from Blog</h2>
            <p className="text-gray-600">Insights on product management, SaaS, and leadership</p>
          </div>
          
          {recentPosts.length === 0 ? (
            <div className="text-center py-12 col-span-3">
              <p className="text-gray-600">Blog posts coming soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="border-2 hover:border-slate-800 transition-all hover:shadow-lg h-full">
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2 bg-slate-800 text-white text-xs capitalize">{post.entry.category}</Badge>
                    <CardTitle className="text-lg">{post.entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{post.entry.excerpt}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(post.entry.date || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
              <Link href="/blog">View All Posts →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <ContactModal variant="secondary" />
            <Button variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-gray-900">
              <Link href={profile.linkedin} target="_blank">LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-black text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>© 2025 {profile.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href={profile.linkedin} target="_blank" className="hover:text-slate-300 transition">LinkedIn</Link>
            <Link href="#blog" className="hover:text-slate-300 transition">Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
