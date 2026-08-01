import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[var(--radius-lg)] p-12 text-center shadow-glass md:p-20"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015)), linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <TextReveal
            as="h2"
            text="Interested in Working Together?"
            className="font-serif text-3xl text-text sm:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-md text-sm text-muted/70 sm:text-base">
            Let's connect and build enterprise solutions together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="primary">
              Hire Me
            </Button>
            <Button href="#contact" variant="secondary" showArrow={false}>
              Contact Me
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
