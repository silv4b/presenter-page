import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { AnnotationTools } from "./components/AnnotationTools";
import { Shortcuts } from "./components/Shortcuts";
import { Usage } from "./components/Usage";
import { Downloads } from "./components/Downloads";
import { FAQ } from "./components/FAQ";
import { Support } from "./components/Support";
import { Footer } from "./components/Footer";
import { useReveal } from "./lib/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-900">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Gallery />
        <AnnotationTools />
        <Shortcuts />
        <Usage />
        <Downloads />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
