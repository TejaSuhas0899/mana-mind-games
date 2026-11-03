import { brainsparkLogo } from "./brand";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient gradient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.585 0.222 291 / 45%), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.7 0.16 300 / 45%), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="eyebrow">Independent studio. Infinite imagination.</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
            Where Creativity Meets Entertainment.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            TheManaVerse Games is an independent gaming and digital entertainment
            brand. We build engaging gaming experiences for curious minds and
            passionate players.
          </p>
          <div className="mt-8">
            <a
              href="#games"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--glow)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore Our Games
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={brainsparkLogo.url}
            alt="BrainSpark: Riddles & Quizzes game logo"
            className="glow-icon w-56 rounded-3xl sm:w-72 md:w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
