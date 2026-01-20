const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Technologies I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
