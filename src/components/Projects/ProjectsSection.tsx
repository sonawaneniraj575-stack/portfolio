import DividerShimmer from "@/components/ui/DividerShimmer";
import ProjectCard from "./ProjectCard";
import { siteContent } from "@/content/siteContent";
import { Section } from "@/components/ui/Section";
import guardianceImg from "../assets/Guardiancehomecare.png";

const projectImages: Record<string, string> = {
  "resume-analyzer-ai":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/38/Link2.png",
 "guardiance-home-care": "/images/Guardiancehomecare.png",
  "luxury-ecommerce":
    "https://diggrowth.com/wp-content/uploads/2024/02/AI-Data-Visualization-Tool_-Improve-Your-Insights.png",
};



export default function ProjectsSection() {
  return (
    <Section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
      <div className="mt-8 space-y-10">
        {siteContent.projects.map((proj, i) => (
          <div key={proj.id}>
            <ProjectCard
              title={proj.title}
              problem={proj.problem}
              approach={proj.approach}
              stack={proj.stack}
              links={proj.links}
              metrics={proj.metrics}
              image={projectImages[proj.id] ?? "/images/placeholder-project.png"} // use mapping
              layout={i % 2 === 0 ? "left" : "right"}
            />
            {i < siteContent.projects.length - 1 && <DividerShimmer />}
          </div>
        ))}
      </div>
    </Section>
  );
}
