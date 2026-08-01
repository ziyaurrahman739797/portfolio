import { Hero } from "@/components/Hero/Hero";
import { RecruiterCard } from "@/components/RecruiterCard/RecruiterCard";
import { About } from "@/components/About/About";
import { Education } from "@/components/Education/Education";
import { Skills } from "@/components/Skills/Skills";
import { LearningJourney } from "@/components/LearningJourney/LearningJourney";
import { WhyHireMe } from "@/components/WhyHireMe/WhyHireMe";
import { FeaturedProject } from "@/components/FeaturedProject/FeaturedProject";
import { GitHubShowcase } from "@/components/GitHub/GitHubShowcase";
import { CurrentlyLearning } from "@/components/CurrentlyLearning/CurrentlyLearning";
import { Contact } from "@/components/Contact/Contact";
import { CTA } from "@/components/CTA/CTA";
import { Footer } from "@/components/Footer/Footer";

/** Section order per the master spec: Hero, Recruiter Quick View, About, Education,
 * Skills, Learning Journey, Featured Project, GitHub, Currently Learning, Contact, CTA, Footer.
 * "Why Hire Me" is inserted between Learning Journey and Featured Project, since the spec
 * defines it as its own section (Part 2, Section 5) without pinning an exact slot in the
 * Part 6 order list. */
export function Home() {
  return (
    <main>
      <Hero />
      <RecruiterCard />
      <About />
      <Education />
      <Skills />
      <LearningJourney />
      <WhyHireMe />
      <FeaturedProject />
      <GitHubShowcase />
      <CurrentlyLearning />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
