import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO",
    company: "TechFlow",
    initials: "SJ",
    color: "bg-blue-500",
    text: "Ai SaaS has completely transformed our content strategy. We generate 10x more high-quality articles while saving thousands of dollars a month."
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    company: "Nexus",
    initials: "DC",
    color: "bg-purple-500",
    text: "The API is incredibly robust and easy to integrate. The latency is practically non-existent compared to other providers we've tried."
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Creativ",
    initials: "ER",
    color: "bg-pink-500",
    text: "As a startup founder, time is my most valuable asset. The workflow automation features here act like having three extra employees."
  },
  {
    name: "Marcus Johnson",
    role: "VP of Product",
    company: "GlobalTech",
    initials: "MJ",
    color: "bg-emerald-500",
    text: "The sheer quality of the image generation models is astounding. We've replaced our entire stock photo subscription."
  },
  {
    name: "Rachel Kim",
    role: "Head of Support",
    company: "Acme Corp",
    initials: "RK",
    color: "bg-orange-500",
    text: "Our customer satisfaction scores went up 24% after deploying the AI chat assistant. It handles 80% of routine queries flawlessly."
  },
  {
    name: "Thomas Wright",
    role: "SEO Director",
    company: "Horizon",
    initials: "TW",
    color: "bg-cyan-500",
    text: "The SEO optimization insights are spot on. We've seen a 40% increase in organic traffic across our key landing pages in just two months."
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Auto-scroll logic
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Loved by innovative teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what our customers are saying.
          </p>
        </div>
      </div>

      <div className="w-full relative">
        <div className="overflow-hidden px-4 md:px-8" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg text-white mb-8 line-clamp-4">"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${t.color}`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-bold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}