import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 23 },
    description: "Perfect for individuals and small teams getting started with AI.",
    features: ["10,000 API calls / mo", "Basic text generation", "Standard support", "1 workspace"],
    highlighted: false
  },
  {
    name: "Pro",
    price: { monthly: 79, yearly: 63 },
    description: "Advanced features and higher limits for growing businesses.",
    features: ["100,000 API calls / mo", "Advanced models (GPT-4)", "Image generation", "Priority support", "5 workspaces"],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "Custom limits and dedicated support for large organizations.",
    features: ["Unlimited API calls", "Custom model fine-tuning", "Dedicated success manager", "SSO & SAML", "Unlimited workspaces"],
    highlighted: false
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-32 relative z-10 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start for free, upgrade when you need more power.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 rounded-full bg-white/10 p-1 flex items-center transition-colors relative"
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-primary"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm flex items-center gap-2 ${isYearly ? 'text-white' : 'text-muted-foreground'}`}>
              Yearly <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-primary/20 to-black/40 border border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' 
                  : 'bg-white/5 border border-white/10'
              } backdrop-blur-sm flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  {typeof plan.price.monthly === 'number' ? '$' : ''}
                  {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                {typeof plan.price.monthly === 'number' && (
                  <span className="text-muted-foreground">/mo</span>
                )}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full h-12 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-0 hover:opacity-90' 
                    : 'bg-white/10 hover:bg-white/20 text-white border-0'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}