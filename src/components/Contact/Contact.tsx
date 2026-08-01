import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Copy, Check, FileDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { contactMethods } from "@/data/portfolio";
import { staggerChild, staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";
import type { ContactMethod } from "@/types";

const iconMap = { email: Mail, phone: Phone, location: MapPin, github: Github } as const;

function ContactCard({ method }: { method: ContactMethod }) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[method.type];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(method.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard API may be unavailable; fail silently. */
    }
  };

  return (
    <motion.div variants={staggerChild} className="glass flex items-center justify-between rounded-[var(--radius-md)] p-5">
      <div className="flex items-center gap-3">
        <span className="glass-strong flex h-10 w-10 items-center justify-center rounded-full">
          <Icon size={17} className="text-text/80" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted/50">{method.label}</p>
          {method.href ? (
            <a
              href={method.href}
              target={method.type === "github" ? "_blank" : undefined}
              rel={method.type === "github" ? "noreferrer" : undefined}
              className="text-sm text-text transition-colors hover:text-muted"
            >
              {method.value}
            </a>
          ) : (
            <p className="text-sm text-text">{method.value}</p>
          )}
        </div>
      </div>
      {method.type === "email" && (
        <button
          onClick={handleCopy}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="text-muted/60 transition-colors hover:text-text"
        >
          {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
        </button>
      )}
    </motion.div>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    // No backend wired up yet — simulate submission so the interaction is complete end to end.
    // Replace with a real endpoint (e.g. Formspree, a serverless function) when ready.
    window.setTimeout(() => {
      setStatus("success");
      e.currentTarget?.reset();
    }, 1100);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <TextReveal
          as="h2"
          text="Let's Build Something Meaningful Together."
          className="font-serif text-4xl leading-[1.1] text-text sm:text-5xl"
        />
        <p className="mt-5 text-sm leading-relaxed text-muted/70 sm:text-base">
          I'm currently looking for opportunities as a SAP S/4HANA ABAP Fresher. If you have an
          internship, trainee role, or entry-level position, I'd be happy to connect.
        </p>
      </Reveal>

      <div className="glass grid gap-10 rounded-[var(--radius-lg)] p-6 md:grid-cols-2 md:p-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(STAGGER.cards)}
          className="space-y-3"
        >
          {contactMethods.map((m) => (
            <ContactCard key={m.type} method={m} />
          ))}
          <Button href="/resume.pdf" variant="secondary" showArrow={false} className="mt-2 w-full justify-center">
            <FileDown size={16} className="mr-1" aria-hidden="true" />
            Download Resume
          </Button>
        </motion.div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <FloatingField id="name" name="name" label="Name" error={errors.name} />
          <FloatingField id="email" name="email" label="Email" type="email" error={errors.email} />
          <FloatingField id="message" name="message" label="Message" as="textarea" error={errors.message} />

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : status === "success" ? "Sent" : "Send Message"}
          </Button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-success"
              role="status"
            >
              Thanks — your message has been sent. I'll get back to you soon.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}

interface FloatingFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
}

function FloatingField({ id, name, label, type = "text", as = "input", error }: FloatingFieldProps) {
  const [filled, setFilled] = useState(false);
  const sharedClasses =
    "peer w-full rounded-[var(--radius-sm)] glass px-4 pb-2.5 pt-5 text-sm text-text outline-none transition-shadow duration-300 focus:shadow-glow-sm";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => setFilled(e.target.value.length > 0)}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => setFilled(e.target.value.length > 0)}
          className={sharedClasses}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          filled ? "top-2 text-[10px] text-muted/50" : "top-3.5 text-sm text-muted/50 peer-focus:top-2 peer-focus:text-[10px]"
        }`}
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400/80" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
