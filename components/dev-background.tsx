"use client"

export function DevBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating code snippets - decorative */}
      <div className="absolute top-24 left-8 text-sm font-mono text-primary/20 dark:text-primary/30 select-none hidden lg:block transform -rotate-6">
        <pre className="bg-card/50 p-3 rounded-lg border border-primary/10">{`const developer = {
  name: "Aalim",
  skills: ["React", "Node"],
  passion: "Building"
};`}</pre>
      </div>
      
      <div className="absolute top-48 right-12 text-sm font-mono text-primary/20 dark:text-primary/30 select-none hidden lg:block transform rotate-3">
        <pre className="bg-card/50 p-3 rounded-lg border border-primary/10">{`function createApp() {
  return <App />;
}`}</pre>
      </div>
      
      <div className="absolute bottom-72 left-16 text-sm font-mono text-primary/20 dark:text-primary/30 select-none hidden lg:block transform rotate-2">
        <pre className="bg-card/50 p-3 rounded-lg border border-primary/10">{`npm run build
✓ Compiled successfully`}</pre>
      </div>
      
      <div className="absolute bottom-48 right-20 text-sm font-mono text-primary/20 dark:text-primary/30 select-none hidden lg:block transform -rotate-3">
        <pre className="bg-card/50 p-3 rounded-lg border border-primary/10">{`import { useState }
from "react";`}</pre>
      </div>
      
      {/* Gradient orbs - more visible */}
      <div className="absolute top-0 -left-48 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[150px]" />
      
      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Tech symbols floating - more visible */}
      <div className="absolute top-36 right-1/4 text-6xl text-primary/15 dark:text-primary/25 font-mono select-none hidden md:block font-bold">
        {'</>'}
      </div>
      <div className="absolute bottom-56 left-1/4 text-6xl text-primary/15 dark:text-primary/25 font-mono select-none hidden md:block font-bold">
        {'{ }'}
      </div>
      <div className="absolute top-2/3 right-16 text-5xl text-primary/15 dark:text-primary/25 font-mono select-none hidden md:block font-bold">
        {'=>'}
      </div>
      <div className="absolute bottom-1/3 left-12 text-5xl text-primary/15 dark:text-primary/25 font-mono select-none hidden md:block font-bold">
        {'//'}
      </div>
      <div className="absolute top-1/4 left-1/3 text-4xl text-primary/10 dark:text-primary/20 font-mono select-none hidden lg:block">
        {'[ ]'}
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-4xl text-primary/10 dark:text-primary/20 font-mono select-none hidden lg:block">
        {'( )'}
      </div>
    </div>
  )
}
