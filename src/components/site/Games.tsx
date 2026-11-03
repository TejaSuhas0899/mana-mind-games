import { brainsparkLogo } from "./brand";

const FEATURE_CHIPS = [
  "English Riddles",
  "Hindi Riddles",
  "Relaxed Mode",
  "Timed Challenge Mode",
];

const UPCOMING_GAMES = [
  {
    title: "Picture Guessing",
    description: "Identify objects, characters and images.",
  },
  {
    title: "Daily Brain Quiz",
    description: "Test your knowledge with daily challenges.",
  },
  {
    title: "Brain Challenges",
    description: "More puzzles and mind games coming soon.",
  },
];

export function Games() {
  return (
    <section id="games" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <p className="eyebrow">01 / Our games</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          A little curiosity. A lot of play.
        </h2>

        {/* Featured game */}
        <div className="glow-card mt-10 flex flex-col items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 md:flex-row md:items-start">
          <img
            src={brainsparkLogo.url}
            alt="BrainSpark: Riddles & Quizzes logo"
            className="w-44 shrink-0 rounded-3xl sm:w-56 md:w-64"
          />
          <div>
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Coming Soon
            </span>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              BrainSpark: Riddles &amp; Quizzes
            </h3>
            <p className="mt-3 text-muted-foreground">
              Challenge your mind with entertaining riddles and quizzes in
              English and Hindi.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {FEATURE_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Challenge Your Mind. Spark Your Imagination.
            </p>
          </div>
        </div>

        {/* Upcoming games */}
        <div className="mt-20">
          <p className="eyebrow">02 / Next in our universe</p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            More ways to spark your mind.
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_GAMES.map((game) => (
              <article
                key={game.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_var(--glow)]"
              >
                <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Coming Soon
                </span>
                <h4 className="mt-4 text-xl font-bold">{game.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{game.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
