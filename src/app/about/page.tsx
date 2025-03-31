import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dave Kearney",
      role: "CEO & Founder",
      bio: "With over 15 years in digital marketing, Dave founded Brandium to help businesses build stronger, more cohesive brand identities in the digital age.",
      image: "/assets/placeholder-user.jpg"
    },
    {
      name: "Dave Kearney",
      role: "CTO",
      bio: "Dave leads our technology team, bringing 12+ years of experience in building scalable SaaS platforms and AI-powered marketing tools.",
      image: "/assets/placeholder-user.jpg"
    },
    {
      name: "Dave Kearney",
      role: "Chief Marketing Officer",
      bio: "Dave has helped Fortune 500 companies transform their digital marketing strategies, and now brings that expertise to our clients.",
      image: "/assets/placeholder-user.jpg"
    },
    {
      name: "Dave Kearney",
      role: "Head of Product",
      bio: "Dave ensures Brandium stays ahead of the curve, incorporating the latest marketing innovations into our platform.",
      image: "/assets/placeholder-user.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission: Empowering Brands in the Digital Age
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Brandium was founded with a clear purpose: to make powerful brand management and marketing tools accessible to businesses of all sizes. We believe that every company deserves the tools to build a phenomenal brand.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] rounded-xl bg-[#F4F7F9] p-4 shadow-lg">
                <div className="h-full w-full rounded-lg bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="h-60 rounded-md bg-[#F4F7F9] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#106D7C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-16 w-16"
                      >
                        <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
                        <path d="M13 13c-2 2-4 4-6 4" />
                        <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
                      </svg>
                    </div>
                    <div className="h-10 w-1/2 mx-auto rounded-md bg-[#106D7C] text-white flex items-center justify-center font-bold">
                      Est. 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Beginning</h3>
                <p className="text-gray-500">
                  Brandium was born out of a simple observation: while the digital marketing landscape was becoming increasingly complex, the tools to navigate it weren't keeping pace. Our founder, Sarah Johnson, saw that businesses were struggling to maintain consistent branding across proliferating digital channels.
                </p>
                <p className="text-gray-500">
                  In 2023, she assembled a team of marketing experts and technologists with a mission to create an integrated platform that would make comprehensive brand management accessible to businesses of all sizes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Approach</h3>
                <p className="text-gray-500">
                  We believe that great brands are built on a foundation of clarity, consistency, and connection. Our platform is designed to help businesses establish that foundation and build upon it with powerful tools for content creation, market analysis, and performance tracking.
                </p>
                <p className="text-gray-500">
                  What sets Brandium apart is our holistic approach to brand building. Rather than offering disconnected point solutions, we provide an integrated ecosystem where strategy informs execution, and data drives optimization in a continuous cycle of improvement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Technology</h3>
                <p className="text-gray-500">
                  At the heart of Brandium is advanced AI technology that analyzes vast amounts of market data to provide actionable insights. Our platform continuously learns from user interactions and market trends to deliver increasingly valuable recommendations.
                </p>
                <p className="text-gray-500">
                  We've built Brandium using a modern technology stack with security, scalability, and performance as core principles. Our microservices architecture ensures reliability while allowing us to rapidly innovate and add new capabilities.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Looking Forward</h3>
                <p className="text-gray-500">
                  As we grow, our vision remains constant: to democratize access to sophisticated brand management tools and empower businesses to build authentic connections with their audiences.
                </p>
                <p className="text-gray-500">
                  We're continuously innovating, with an ambitious roadmap of new features and capabilities. But technology alone isn't enough—we're equally committed to providing exceptional support and education to help our customers succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the passionate people behind Brandium
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <div className="h-full w-full bg-[#106D7C]/10 flex items-center justify-center text-3xl font-bold text-[#106D7C]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-[#106D7C] font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented individuals who are passionate about marketing, technology, and helping businesses succeed.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/contact">
                  <Button>View Open Positions</Button>
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