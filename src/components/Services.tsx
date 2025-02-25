
import { FadeUp } from "./ui/Motion";
import { ArrowRight, Camera, Globe, Image, Monitor, Video } from "lucide-react";
import FeatureCard from "./3d/FeatureCard";

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Digital Strategy",
    description: "Data-driven approach to maximize your digital presence and achieve measurable results.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Content Creation",
    description: "High-quality visual content that tells your story and captivates your audience.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Responsive, user-friendly websites optimized for performance and conversion.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Production",
    description: "Professional video content from concept to post-production that elevates your brand.",
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Brand Identity",
    description: "Cohesive visual systems that communicate your values and connect with customers.",
  },
  {
    icon: <ArrowRight className="w-6 h-6" />,
    title: "Social Media",
    description: "Strategic management and content creation to build community and drive engagement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="chip mb-3">Our Expertise</span>
          </FadeUp>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeUp delay={200}>
              <h2 className="heading-lg">
                Premium services<br />for exceptional results
              </h2>
            </FadeUp>
            
            <FadeUp delay={300} className="md:max-w-sm">
              <p className="text-muted-foreground">
                We specialize in translating complex ideas into meaningful digital experiences
                through our comprehensive range of services.
              </p>
            </FadeUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <FadeUp key={service.title} delay={400 + index * 100}>
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
