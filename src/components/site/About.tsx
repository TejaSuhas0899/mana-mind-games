const BUILDING_POINTS = [
  "Brain games and interactive puzzles.",
  "Riddles and knowledge-based challenges.",
  "Casual mobile gaming experiences.",
  "New creative digital entertainment projects.",
];

export function About() {
  return (
    <>
      <section id="about" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <p className="eyebrow">03 / The studio</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Welcome to TheManaVerse Games
          </h2>
          <p className="mt-4 text-lg font-medium text-accent">
            Where Creativity Meets Entertainment.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                TheManaVerse Games is an independent gaming and digital
                entertainment brand focused on creating engaging experiences
                centered on creativity, curiosity, and fun.
              </p>
              <p>
                Our vision is to build entertaining digital experiences that
                are accessible, enjoyable, and memorable for people of
                different ages and interests.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">What we're building</h3>
              <ul className="mt-4 space-y-3">
                {BUILDING_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <p className="eyebrow">Our vision</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            A Universe of Games. Endless Possibilities.
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            We believe entertainment should inspire curiosity and creativity.
            Our goal is to build accessible and enjoyable games and interactive
            experiences for different audiences, gradually expanding
            TheManaVerse Games into a collection of mobile games and
            interactive digital experiences.
          </p>
        </div>
      </section>
    </>
  );
}
