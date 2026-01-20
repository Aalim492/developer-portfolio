import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern technologies",
  },
  {
    icon: Lightbulb,
    title: "AI-Based Projects",
    description: "Experience in developing AI-powered academic solutions",
  },
  {
    icon: Users,
    title: "Collaborative Mindset",
    description: "Team player with hands-on internship training experience",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Crafting digital experiences with code
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate Full Stack Developer and BTech Computer Science &amp;
                Engineering graduate from India. My expertise lies in building
                scalable, user-friendly web applications using modern technologies
                like React.js, Next.js, TypeScript, and Node.js.
              </p>
              <p>
                Throughout my academic journey, I&apos;ve worked on various projects
                including AI-based systems for real-world problem-solving. My
                internship training at QSpiders, Noida provided me with hands-on
                experience in web development fundamentals and real-world application
                building.
              </p>
              <p>
                I&apos;m currently seeking opportunities as a Full Stack or Frontend
                Software Developer where I can contribute my skills and continue
                growing as a developer.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
