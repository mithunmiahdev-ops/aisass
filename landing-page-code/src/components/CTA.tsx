import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative p-12 md:p-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-2xl leading-tight">
              Ready To Supercharge Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl">
              Join thousands of forward-thinking companies building the future with Ai SaaS. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-gray-100 border-0">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 bg-transparent">
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}