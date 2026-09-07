const skills = [
  {
    name: "HTML",
    detail: "Semantic markup and accessible page structure.",
  },
  {
    name: "CSS",
    detail: "Responsive layouts, visual design, and polish.",
  },
  {
    name: "JS",
    detail: "Interactive UI and dynamic browser behavior.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium tracking-wide">
            Ahmad Buttar
          </a>
          <nav className="flex items-center gap-4 text-sm sm:gap-6">
            <a
              href="#skills"
              className="hidden text-muted hover:text-foreground sm:inline"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hidden text-muted hover:text-foreground sm:inline"
            >
              About
            </a>
            <a
              href="#hire"
              className="rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Frontend Developer
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-tight text-foreground sm:text-7xl">
            Ahmad Buttar
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted">
            I build clean, responsive websites with HTML, CSS, and JavaScript.
            Simple structure, careful styling, and interaction that feels
            natural.
          </p>
          <a
            href="#hire"
            className="inline-flex w-fit items-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent-hover"
          >
            Hire Me
          </a>
        </section>

        <section
          id="skills"
          className="scroll-mt-20 border-t border-line bg-card"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="font-display text-3xl sm:text-4xl">Skills</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <article
                  key={skill.name}
                  className="rounded-xl border border-line bg-background p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {skill.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl">About</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I am a frontend developer focused on the core web stack. I write
            HTML that is easy to read, CSS that holds up on any screen, and
            JavaScript that adds just enough interaction.
          </p>
        </section>

        <section id="hire" className="scroll-mt-20 border-t border-line bg-card">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-20">
            <h2 className="font-display text-3xl sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Have a website or landing page in mind? I&apos;m available for
              freelance work and new projects.
            </p>
            <a
              href="mailto:ahmad.buttar@email.com?subject=Hire%20Ahmad%20Buttar"
              className="inline-flex w-fit items-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl px-6 py-6 text-sm text-muted">
          © {new Date().getFullYear()} Ahmad Buttar
        </div>
      </footer>
    </div>
  );
}
