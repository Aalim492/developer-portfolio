"use client"

import Link from "next/link"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Hi, I&apos;m{" "}
              <span className="text-primary">Mohd Aalim</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full Stack Developer
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              I build accessible, pixel-perfect web applications that blend
              thoughtful design with robust engineering. Passionate about
              creating scalable, user-friendly experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/Aalim492"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/mohd-aalim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}
