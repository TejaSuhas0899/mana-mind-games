import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TheManaVerse Games" },
      {
        name: "description",
        content:
          "Privacy Policy for TheManaVerse Games and BrainSpark: Riddles & Quizzes.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | TheManaVerse Games",
      },
      {
        property: "og:description",
        content:
          "Privacy Policy for TheManaVerse Games and BrainSpark: Riddles & Quizzes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicy,
});

const SECTIONS = [
  {
    heading: "Overview",
    body: [
      "TheManaVerse Games (“we”, “our”) is an independent gaming and digital entertainment brand. This policy explains how we handle information across our website and our games, starting with BrainSpark: Riddles & Quizzes.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Our games are designed to be playable without requiring personal information. We do not ask you to create an account, and we do not collect names, email addresses, or other personal details through the games themselves.",
      "If you contact us by email, we use your email address only to respond to your enquiry.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "We use any information you choose to share with us solely to provide support, answer enquiries, and improve our games and website. We do not sell or rent personal information.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "Our games are intended for general audiences and families. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as our games and services evolve. Updates will be published on this page.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "For questions about this policy, contact us at ironstraw8@gmail.com.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: November 2026
        </p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
