import { Briefcase, GraduationCap, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Experience & Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            My journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Internship Card */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Internship Training
                  </h3>
                  <p className="text-primary font-medium">QSpiders</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Noida, India
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Web development fundamentals training
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Hands-on project development experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Real-world application building skills
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Technology
                  </h3>
                  <p className="text-primary font-medium">
                    Computer Science & Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sharda University
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Greater Noida, India
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Strong foundation in computer science
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    AI and machine learning coursework
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Web development and software engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
