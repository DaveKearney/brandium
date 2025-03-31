import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, Layers, Users, Target, PenTool, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#106D7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
              <path d="M13 13c-2 2-4 4-6 4" />
              <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
            </svg>
            <span className="text-xl font-bold">Brandium</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Empowering Phenomenal Brands
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Brandium.ai helps you build your brand, analyze your market, and create engaging content—all in one
                  platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-[#F4F7F9] p-4 shadow-lg">
                <div className="h-full w-full rounded-lg bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="h-6 w-2/3 rounded-md bg-[#F4F7F9]"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 rounded-md bg-[#F4F7F9]"></div>
                      <div className="h-20 rounded-md bg-[#F4F7F9]"></div>
                      <div className="h-20 rounded-md bg-[#F4F7F9]"></div>
                    </div>
                    <div className="h-32 rounded-md bg-[#F4F7F9]"></div>
                    <div className="h-10 w-1/3 rounded-md bg-[#FF7557]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F4F7F9] px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Brandium.ai provides all the tools you need to build and grow your brand online.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <Target className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">Strategy & Planning</h3>
                <p className="text-center text-gray-500">
                  Develop comprehensive marketing strategies aligned with your goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <Layers className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">Website Optimization</h3>
                <p className="text-center text-gray-500">
                  Build and optimize high-converting websites and landing pages.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <BarChart2 className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">SEO & Analytics</h3>
                <p className="text-center text-gray-500">
                  Improve search rankings and track performance with detailed analytics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <PenTool className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">Content Marketing</h3>
                <p className="text-center text-gray-500">
                  Create engaging content that resonates with your target audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <Megaphone className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">Social Media</h3>
                <p className="text-center text-gray-500">
                  Manage and optimize your presence across all social platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#F4F7F9] p-3">
                  <Users className="h-6 w-6 text-[#106D7C]" />
                </div>
                <h3 className="text-xl font-bold">Market Research</h3>
                <p className="text-center text-gray-500">
                  Analyze your market and competitors to identify opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to fit your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-gray-500">For individuals and small teams</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$50</span>
                  <span className="ml-1 text-gray-500">/month per user</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Core marketing tools
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    100 AI credits included
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic analytics
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=basic">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#FF7557] px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500">For growing businesses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="ml-1 text-gray-500">/month per user</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    All marketing tools
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    300 AI credits included
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup?plan=professional">
                    <Button className="w-full bg-[#106D7C] hover:bg-[#0A5A68]">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500">For large organizations</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    All features
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    1000+ AI credits included
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Custom integrations
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#106D7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
              <path d="M13 13c-2 2-4 4-6 4" />
              <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
            </svg>
            <span className="text-xl font-bold">Brandium</span>
          </div>
          <nav className="flex gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 Brandium.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
