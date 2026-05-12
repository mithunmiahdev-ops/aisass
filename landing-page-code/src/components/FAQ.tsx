import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ai SaaS?",
    answer: "Ai SaaS is a comprehensive enterprise platform that provides advanced AI tools for content generation, image creation, workflow automation, and customer support via chat assistants. It's designed to help modern businesses scale operations quickly and efficiently."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card is required to sign up. You'll get access to all features within the tier you select to fully evaluate the platform."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. Our plans are strictly month-to-month or year-to-year. You can cancel your subscription at any time from your billing dashboard without any penalty or hidden fees."
  },
  {
    question: "Is my data secure?",
    answer: "We take security extremely seriously. All data is encrypted at rest and in transit. We are SOC2 compliant and we explicitly do not use your proprietary business data to train our foundational models."
  },
  {
    question: "Do you support teams?",
    answer: "Yes! Our Pro and Enterprise plans include multi-user workspaces, role-based access control (RBAC), and shared resource libraries so your entire team can collaborate effectively."
  },
  {
    question: "What integrations do you offer?",
    answer: "We offer out-of-the-box integrations with Slack, Salesforce, HubSpot, Zendesk, WordPress, and many more. For custom workflows, our robust REST API allows you to connect Ai SaaS with virtually any system."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 relative z-10 bg-black/20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}