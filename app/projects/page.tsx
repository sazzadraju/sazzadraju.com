import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Header from "@/components/Header";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">All Projects</h1>
          <p className="text-xl text-gray-600">Comprehensive portfolio of my work across different industries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
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
      </div>
    </main>
    </>
  );
}
