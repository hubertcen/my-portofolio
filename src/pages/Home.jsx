import { ThemeToggle } from "../components/ThemeToggle";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background  text-foreground ovreflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <BackgroundEffect />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Footer */}
    </div>
  );
};
