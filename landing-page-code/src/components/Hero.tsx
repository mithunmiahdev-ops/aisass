import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, BrainCircuit, Code, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";

const typingWords = ["Content Generation", "Workflow Automation", "Image Creation"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = typingWords[wordIndex];
      
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Introducing Ai SaaS 2.0</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Automate Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 min-h-[80px]"
          >
            Powerful AI tools to generate content, automate workflows, and scale your business faster with <span className="text-white font-medium">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 hover:opacity-90 shadow-[0_0_40px_8px_rgba(139,92,246,0.3)]">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-white/5">
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Acme Corp', 'GlobalTech', 'Quantum', 'Nexus', 'Horizon'].map((company, i) => (
                <span key={i} className="text-xl font-bold font-serif text-white">{company}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-16 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          
          {/* Mac window header */}
          <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto text-xs text-muted-foreground font-mono">dashboard.aisaas.com</div>
          </div>
          
          {/* Dashboard mockup content */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="h-48 rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs px-2 py-1 rounded-full border border-primary/30">Active</div>
                <div className="w-full h-24 flex items-end gap-2">
                  {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary/40 to-secondary/80 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <div className="text-sm text-muted-foreground">Generations</div>
                    <div className="text-2xl font-bold text-white">12,482</div>
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">+14.2%</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center">
                    <BrainCircuit className="w-8 h-8 text-primary mb-2" />
                    <div className="text-lg font-bold text-white">Models</div>
                    <div className="text-sm text-muted-foreground">GPT-4, Claude 3</div>
                 </div>
                 <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center">
                    <Code className="w-8 h-8 text-secondary mb-2" />
                    <div className="text-lg font-bold text-white">API Calls</div>
                    <div className="text-sm text-muted-foreground">842K / month</div>
                 </div>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="h-full rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="font-semibold text-white mb-4">Recent Activity</div>
                <div className="space-y-4">
                  {[
                    { icon: ImageIcon, text: "Image generated", time: "2m ago", color: "text-blue-400" },
                    { icon: Code, text: "Workflow triggered", time: "15m ago", color: "text-purple-400" },
                    { icon: BrainCircuit, text: "Model fine-tuned", time: "1h ago", color: "text-cyan-400" },
                    { icon: Sparkles, text: "Content generated", time: "3h ago", color: "text-emerald-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm text-white">{item.text}</div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hidden lg:flex"
      >
        <BrainCircuit className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hidden lg:flex"
      >
        <Code className="w-6 h-6 text-secondary" />
      </motion.div>
    </section>
  );
}