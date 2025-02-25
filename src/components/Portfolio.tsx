
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
              "

If there's knowledge, context or custom instructions you want to include in every edit in this project, set it below.

<lov-actions>
<lov-knowledge>
</lov-actions>

Given your desire for a minimalistic, premium portfolio website similar to byoptimise.com, consider adding a backend to manage content (case studies, team members, etc.) and potentially client logins.  You can use the Supabase menu to connect your project.
<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Learn more about Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visit docs</lov-link>
</lov-actions>
