import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { 
  Target, Layers, BarChart2, PenTool, Megaphone, Users, 
  Lightbulb, LineChart, MessageSquare, Globe, Database, Shield
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Strategy & Planning",
      description: "Create, manage, and track digital marketing campaigns aligned with business goals. Establish brand positioning, analyze competitors, and develop marketing funnels.",
      icon: <Target className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Campaign Management System with performance metrics",
        "Brand Management System with asset repository",
        "Competitor Analysis Tools for market gap identification",
        "Buyer Persona Management for target audience profiles",
        "Marketing Funnel Analytics with optimization recommendations"
      ]
    },
    {
      title: "Website Optimization",
      description: "Build and optimize websites for better user experience and conversion rates. Manage content, test different variations, and analyze user interactions.",
      icon: <Layers className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Website Management System with brand consistency tools",
        "Mobile Optimization for all device sizes",
        "Drag-and-drop Landing Page Builder with templates",
        "A/B Testing Platform with statistical analysis",
        "Conversion Rate Optimization tools and recommendations"
      ]
    },
    {
      title: "SEO & Analytics",
      description: "Improve search engine rankings with keyword research, technical audits, and local SEO optimization. Track performance with comprehensive analytics.",
      icon: <BarChart2 className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "SEO Management System with ranking tracking",
        "Keyword Research Tools based on search volume and intent",
        "Technical SEO Audit Tool for issue identification",
        "Local SEO Optimization for location-specific searches",
        "PPC Campaign Management with bid optimization"
      ]
    },
    {
      title: "Content Marketing",
      description: "Plan, create, and publish engaging content across different formats. Manage blogs, lead generation assets, case studies, and video content.",
      icon: <PenTool className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Content Calendar Management with scheduling",
        "Blog Management System with SEO optimization",
        "Lead Generation Content Tools for capturing leads",
        "Case Study Management with filtering capabilities",
        "Video Content Platform with engagement metrics"
      ]
    },
    {
      title: "Social Media",
      description: "Create and manage content across multiple social platforms. Monitor brand mentions, analyze sentiment, and run influencer campaigns.",
      icon: <Megaphone className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Multi-Platform Management across all social channels",
        "Community Management Tools for engagement",
        "Social Media Advertising with targeting options",
        "Influencer Partnership Management and ROI tracking",
        "Brand Monitoring System with sentiment analysis"
      ]
    },
    {
      title: "Market Research",
      description: "Analyze industry trends, track competitors, and identify market opportunities. Collect and visualize data from multiple sources.",
      icon: <Users className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Market Research Management with visualization tools",
        "Customer Survey Platform for gathering feedback",
        "Industry Trend Analysis from multiple data sources",
        "Competitive Intelligence System with positioning tracking",
        "Social Media Trend Analysis for content strategy"
      ]
    },
    {
      title: "Brand Design",
      description: "Develop and maintain a consistent brand identity across all touchpoints. Manage logos, style guides, visual elements, and brand voice.",
      icon: <Lightbulb className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Logo Management System with usage guidelines",
        "Brand Style Guide Management with version control",
        "Visual Identity System for consistency checks",
        "Brand Voice Guidelines with content templates",
        "Brand Story Management across touchpoints"
      ]
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations for optimizing marketing performance. Predict trends and identify opportunities using machine learning.",
      icon: <LineChart className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "AI-powered content recommendations",
        "Predictive analytics for marketing performance",
        "Automated improvement suggestions",
        "Trend forecasting and opportunity identification",
        "Competitive analysis with AI-enhanced insights"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Streamline workflows and improve team productivity with collaboration tools. Manage projects, assign tasks, and track progress.",
      icon: <MessageSquare className="h-8 w-8 text-[#106D7C]" />,
      details: [
        "Role-based access control for all modules",
        "Collaborative workflows for content creation",
        "Project management and task tracking",
        "Real-time communication and notifications",
        "Document sharing and version control"
      ]
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
                  Powerful Features for Marketing Success
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the comprehensive suite of tools and capabilities that make Brandium the ultimate platform for building and growing your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col h-full space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-[#F4F7F9] p-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-5 w-5 text-[#25B879] flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Marketing?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start using Brandium today and take your brand to the next level.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <a href="https://app.brandium.cc/signup" className="inline-flex h-10 items-center justify-center rounded-md bg-[#106D7C] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0A5A68] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </a>
                <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}