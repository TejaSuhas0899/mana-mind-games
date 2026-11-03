const SUPPORT_EMAIL = "ironstraw8@gmail.com";

export function Connect() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <p className="eyebrow">Let's make a connection</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's Connect.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Questions, ideas, or a little spark of inspiration? We'd love to hear
          from you.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow">Our YouTube channel</p>
            <h3 className="mt-3 text-2xl font-bold">TheManaVerseHQ</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Follow our journey as we build new experiences and bring fresh
              ideas to life. TheManaVerseHQ is our entertainment and gaming
              content channel on YouTube.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Official channel link will be added here.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow">Official support email</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-block break-all text-xl font-bold text-accent transition-colors hover:brightness-110"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Get in touch for support and enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
