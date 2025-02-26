import { ArrowRight } from "lucide-react";
import { FadeUp } from "./ui/Motion";
import HeroBackground from "./3d/HeroBackground";
const Hero = () => {
  return <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <HeroBackground />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="chip mb-4 bg-primary/20 text-zinc-100 mx-[43px] px-[13px] font-normal text-sm">Sync Space Media</span>
          </FadeUp>
          
          <FadeUp delay={150}>
            <h1 className="heading-xl mb-6 text-gradient">
              We craft digital experiences that inspire
            </h1>
          </FadeUp>
          
          <FadeUp delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
              A full-service creative agency specializing in brand development, 
              web design, and digital marketing for ambitious brands.
            </p>
          </FadeUp>
          
          <FadeUp delay={450}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-glow">
                Start a Project
              </a>
              <a href="#portfolio" className="px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300 hover:bg-secondary hover:scale-105">
                View Our Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-32 z-0"></div>
    </section>;
};
export default Hero;