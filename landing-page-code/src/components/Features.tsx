import { motion } from "framer-motion";
import { PenTool, Image as ImageIcon, MessageSquare, GitMerge, Search, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "AI Content Generator",
    description: "Create high-converting blog posts, emails, and ad copy in seconds using our fine-tuned language models.",
    icon: PenTool,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Image Creation",
    description: "Generate stunning, brand-aligned visual assets without a design team. Perfect for marketing and social media.",
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Chat Assistant",
    description: "Deploy an intelligent conversational agent that understands your documentation and handles customer support 24/7.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Workflow Automation",
    description: "Connect your favorite tools and let AI trigger actions, summarize data, and route tasks automatically.",
    icon: GitMerge,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "SEO Optimization",
    description: "Analyze competitor content and get AI-driven recommendations to rank higher on search engines.",
    icon: Search,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Team Collaboration",
    description: "Share prompts, custom models, and generated assets across your entire organization seamlessly.",
    icon: Users,
    color: "from-fuchsia-500 to-purple-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">build faster</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete suite of AI-powered tools designed to replace your fragmented workflow and supercharge your team's output.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}