import Link from "next/link"
import { ExternalLink, Github, Brain, FileText, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Skin Disease Detection System",
    description:
      "An AI-powered system for skin disease prediction using image upload. Utilizes machine learning algorithms to analyze skin images and provide accurate disease predictions.",
    tech: ["Python", "Machine Learning", "TensorFlow", "Flask"],
    icon: Brain,
    github: "#",
    demo: "#",
  },
  {
    title: "Notes App",
    description:
      "A full-featured CRUD-based notes management application. Users can create, read, update, and delete notes with a clean and intuitive interface.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    icon: FileText,
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Website",
    description:
      "A full stack shopping website with product listings, cart functionality, and user authentication. Features responsive design and seamless shopping experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    icon: ShoppingCart,
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Featured work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button asChild variant="outline" size="sm" className="rounded-full bg-transparent">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
