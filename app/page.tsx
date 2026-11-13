import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Story from "@/components/Story";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-signal-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Story />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
