import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { defaultDescription, defaultTitle } from "@/lib/seo";
import { Suspense, lazy } from "react";
import ogImage from "@/assets/og/og-placeholder.png";
import ResumeSection from "./components/Resume";
import Chatbot from "@/components/Chatbot"; // ← ADD THIS LINE

const ProjectsSection = lazy(() => import("@/components/Projects/ProjectsSection"));

export default function App() {
  return (
    <HelmetProvider>
      <div id="main" className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,178,169,0.2),transparent_60%),linear-gradient(180deg,#071A3F, #0B2540)]">
        <Helmet>
          <title>{defaultTitle}</title>
          <meta name="description" content={defaultDescription} />
          <meta property="og:title" content={defaultTitle} />
          <meta property="og:description" content={defaultDescription} />
          <meta property="og:image" content={ogImage} />
        </Helmet>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
         <div className="my-16 border-t border-foreground/20"></div>

          <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-20 text-foreground/60">Loading projects…</div>}>
            <ProjectsSection />
          </Suspense>
          <div className="my-16 border-t border-foreground/20"></div>

          <ResumeSection />
        </main>
        <Footer />
        
        {/* ← ADD THIS CHATBOT COMPONENT */}
        <Chatbot cohereToken={import.meta.env.VITE_COHERE_TOKEN} />
      </div>
    </HelmetProvider>
  );
}