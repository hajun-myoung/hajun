import { About } from "@/app/components/About";
import { Activities } from "@/app/components/Activities";
import { Contact } from "@/app/components/Contact";
import { Experience } from "@/app/components/Experience";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { LocaleProvider } from "@/app/components/LocaleProvider";
import { Projects } from "@/app/components/Projects";
import { TechStack } from "@/app/components/TechStack";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="min-h-screen overflow-hidden bg-[#050506] text-white">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <TechStack />
        <Activities />
        <Contact />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
