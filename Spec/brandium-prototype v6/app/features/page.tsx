import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Layers, BarChart2, ChevronRight } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium underline underline-offset-4">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Features</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Brandium.ai provides all the tools you need to build and grow your brand online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-[#F4F7F9] px-3 py-1 text-sm">
                  <Target className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>Strategy & Planning</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Strategic Marketing Planning</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Develop comprehensive marketing strategies aligned with your business goals. Our AI-powered platform
                  helps you create actionable plans that drive results.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Goal setting and KPI tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Campaign planning and scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Budget allocation and ROI forecasting</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-white p-4 shadow-lg order-2 lg:order-1">
                <div className="h-full w-full rounded-lg bg-[#F4F7F9] p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="h-6 w-2/3 rounded-md bg-white"></div>
                    <div className="h-32 rounded-md bg-white"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-md bg-white"></div>
                      <div className="h-20 rounded-md bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-lg bg-white px-3 py-1 text-sm">
                  <Layers className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>Website Optimization</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">High-Converting Websites</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build and optimize high-converting websites and landing pages. Our tools help you create beautiful,
                  functional websites that drive conversions.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>A/B testing and optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>User experience analysis</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-[#F4F7F9] px-3 py-1 text-sm">
                  <BarChart2 className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>SEO & Analytics</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Data-Driven Decisions</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Improve search rankings and track performance with detailed analytics. Our platform provides
                  actionable insights to help you make data-driven decisions.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Keyword research and optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Performance tracking and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#25B879]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Competitor analysis</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-[#F4F7F9] p-4 shadow-lg">
                <div className="h-full w-full rounded-lg bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="h-6 w-2/3 rounded-md bg-[#F4F7F9]"></div>
                    <div className="h-40 rounded-md bg-[#F4F7F9]"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 rounded-md bg-[#F4F7F9]"></div>
                      <div className="h-16 rounded-md bg-[#F4F7F9]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Brand?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses using Brandium.ai to grow their online presence.
                </p>
              </div>
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

