import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, HelpCircle, Info } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$50",
      description: "For individuals and small teams",
      features: [
        "Campaign Management System",
        "Brand Asset Management",
        "100 AI credits per month",
        "Basic SEO tools",
        "Content Calendar",
        "Social Media Scheduling",
        "Email Support",
        "Basic Analytics"
      ],
      buttonText: "Get Started",
      buttonLink: "https://app.brandium.cc/signup?plan=basic",
      popular: false
    },
    {
      name: "Professional",
      price: "$100",
      description: "For growing businesses",
      features: [
        "All Basic features",
        "A/B Testing Platform",
        "Advanced SEO Tools",
        "Competitor Analysis",
        "300 AI credits per month",
        "Market Research Tools",
        "Custom Reporting",
        "Priority Support",
        "Advanced Analytics",
        "Team Collaboration Tools"
      ],
      buttonText: "Get Started",
      buttonLink: "https://app.brandium.cc/signup?plan=professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "All Professional features",
        "Unlimited Team Members",
        "1000+ AI credits per month",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Advanced Security",
        "Service Level Agreement",
        "Training Sessions",
        "Customized Onboarding",
        "API Access",
        "Phone Support"
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: "Additional AI Credits",
      price: "$20 per 100 credits",
      description: "Expand your AI-powered content generation capabilities with additional credits."
    },
    {
      name: "Custom Brand Analysis",
      price: "From $500",
      description: "Get a comprehensive analysis of your brand's current position and recommendations for improvement."
    },
    {
      name: "Custom Training",
      price: "From $300 per session",
      description: "Personalized training sessions for your team to maximize the value of Brandium."
    },
    {
      name: "Strategy Consultation",
      price: "From $250 per hour",
      description: "Work with our marketing experts to develop a tailored digital marketing strategy."
    }
  ];

  const faqs = [
    {
      question: "How do AI credits work?",
      answer: "AI credits are consumed when you use our AI-powered features like content generation, campaign optimization, and market analysis. Different features consume different amounts of credits based on complexity."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll immediately gain access to additional features. When downgrading, the change will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "Our Basic and Professional plans are billed monthly with no long-term commitment required. Enterprise plans typically involve an annual contract, but we can customize terms based on your needs."
    },
    {
      question: "How does team member pricing work?",
      answer: "Pricing is per user, per month. Each team member gets their own login and personal workspace, while still being able to collaborate on shared projects."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team to learn more."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and can arrange for invoice payment for Enterprise customers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business. All plans include access to our core platform with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col rounded-lg border p-6 shadow-sm ${plan.popular ? 'border-[#106D7C] shadow-md' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#FF7557] px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-500">{plan.description}</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="ml-1 text-gray-500">/month per user</span>}
                  </div>
                  <ul className="mt-6 space-y-2 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href={plan.buttonLink}>
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enhance your Brandium experience with these add-on services
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <p className="text-[#106D7C] font-medium">{service.price}</p>
                  </div>
                  <p className="mt-2 text-gray-500 text-sm flex-grow">{service.description}</p>
                  <div className="mt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full text-sm">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border p-6">
                  <h3 className="flex items-center text-lg font-bold">
                    <HelpCircle className="mr-2 h-5 w-5 text-[#106D7C]" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#106D7C] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="space-y-2 md:max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold">Need a custom solution?</h2>
                <p className="text-white/80">
                  Our Enterprise plan can be tailored to your organization's specific needs. Let's discuss how we can help you achieve your marketing goals.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-[#106D7C] hover:bg-white/90">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="https://app.brandium.cc/signup">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}