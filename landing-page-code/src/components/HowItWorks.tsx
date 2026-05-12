import { motion } from "framer-motion";
import { Link2, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    title: "Connect",
    description: "Integrate your existing tools and data sources with our platform using our secure 1-click connectors.",
    icon: Link2,
  },
  {
    title: "Generate",
    description: "Use our fine-tuned AI models to create content, analyze data, and automate repetitive tasks.",
    icon: Sparkles,
  },
  {
    title: "Scale",
    description: "Deploy workflows across your organization and watch your team's productivity multiply.",
    icon: Rocket,
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            From setup to scale in three simple steps. No complex configuration required.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#0f1429] border-2 border-primary/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}