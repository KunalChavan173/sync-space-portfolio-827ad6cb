
import { FadeIn, FadeUp } from "./ui/Motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <FadeIn className="mb-6">
          <span className="chip">Digital Media Expertise</span>
        </FadeIn>
        
        <FadeUp delay={200}>
          <h1 className="heading-xl mb-6">
            Creating digital experiences that resonate
          </h1>
        </FadeUp>
        
        <FadeUp delay={400} className="max-w-2xl mx-auto">
          <p className="paragraph text-muted-foreground mb-10">
            Sync Space Media is a creative agency that combines strategic thinking with 
            innovative design to deliver exceptional digital solutions for forward-thinking brands.
          </p>
        </FadeUp>
        
        <FadeUp delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#work" 
              className={cn(
                "px-6 py-3 rounded-md font-medium",
                "bg-primary text-primary-foreground",
                "transition-all duration-300",
                "hover:scale-[1.03] active:scale-[0.97]"
              )}
            >
              View Our Work
            </a>
            <a 
              href="#services" 
              className={cn(
                "px-6 py-3 rounded-md font-medium",
                "bg-secondary text-secondary-foreground",
                "transition-all duration-300",
                "hover:scale-[1.03] active:scale-[0.97]"
              )}
            >
              Explore Services
            </a>
          </div>
        </FadeUp>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <FadeIn delay={1000}>
          <a 
            href="#services" 
            className="animate-bounce opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
