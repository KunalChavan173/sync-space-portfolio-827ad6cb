
import { useState } from "react";
import { FadeUp, LazyImage, BlurIn } from "./ui/Motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Elevate Digital Rebrand",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    description: "Complete brand transformation for a tech company entering a new market segment.",
    link: "#"
  },
  {
    title: "Horizon Campaign",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    description: "Award-winning campaign video series showcasing innovative technologies.",
    link: "#"
  },
  {
    title: "Nexus Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    description: "Custom e-commerce platform built for scalability and conversion optimization.",
    link: "#"
  }
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FadeUp delay={400 + index * 150}>
      <div 
        className="group relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover",
              "transition-transform duration-700 ease-out",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent",
              "transition-opacity duration-500",
              "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div 
            className={cn(
              "transform transition-all duration-500 ease-out",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <span className="chip mb-2">{project.category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4 text-sm line-clamp-2">{project.description}</p>
            <a 
              href={project.link} 
              className="inline-flex items-center text-white hover:text-white/80 text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <BlurIn>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="paragraph text-foreground/70 mb-6">
              Explore some of our most impactful work across various media disciplines.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center font-medium link-hover"
            >
              Discuss your project <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </BlurIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
