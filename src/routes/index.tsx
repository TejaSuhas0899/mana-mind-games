import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Games } from "@/components/site/Games";
import { About } from "@/components/site/About";
import { Connect } from "@/components/site/Connect";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "TheManaVerse Games | Where Creativity Meets Entertainment",
      },
      {
        name: "description",
        content:
          "TheManaVerse Games is an independent gaming and digital entertainment studio. Our first game, BrainSpark: Riddles & Quizzes, is coming soon. Play. Think. Explore.",
      },
      {
        property: "og:title",
        content: "TheManaVerse Games | Where Creativity Meets Entertainment",
      },
      {
        property: "og:description",
        content:
          "Independent gaming studio behind BrainSpark: Riddles & Quizzes. Play. Think. Explore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
