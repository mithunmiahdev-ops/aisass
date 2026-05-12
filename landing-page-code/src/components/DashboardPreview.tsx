import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 700 },
  { name: 'Sat', value: 650 },
  { name: 'Sun', value: 800 },
];

export default function DashboardPreview() {
  return (
    <section className="py-32 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              A command center for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">AI operations</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitor usage, manage models, and track performance across your entire organization from a single, unified interface. Built for scale, designed for speed.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time token usage tracking",
                "Custom model fine-tuning interface",
                "Role-based access control (RBAC)",
                "Detailed generation history & logs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0f1429] shadow-2xl overflow-hidden p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold">API Usage</h3>
                  <p className="text-sm text-muted-foreground">Last 7 days</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 rounded-md bg-white/5 text-xs text-white border border-white/10">1D</div>
                  <div className="px-3 py-1 rounded-md bg-accent/20 text-xs text-accent border border-accent/30">7D</div>
                  <div className="px-3 py-1 rounded-md bg-white/5 text-xs text-white border border-white/10">30D</div>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f1429', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--accent))" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}