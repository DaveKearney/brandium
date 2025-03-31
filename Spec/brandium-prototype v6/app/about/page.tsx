import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
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
            <span className="text-xl font-bold">brandium.ai</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Brandium.ai</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to empower businesses with AI-driven marketing solutions.
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
                  <Lightbulb className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Transforming Digital Marketing</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Brandium.ai was founded in 2023 by a team of marketing experts and AI engineers who saw the potential
                  to revolutionize how businesses approach digital marketing.
                </p>
                <p className="text-gray-500">
                  We recognized that many businesses struggle to create cohesive marketing strategies and execute them
                  effectively. Our platform combines cutting-edge AI technology with proven marketing methodologies to
                  help businesses of all sizes build and grow their brands online.
                </p>
                <p className="text-gray-500">
                  Today, we're proud to serve thousands of customers worldwide, from small startups to enterprise
                  organizations, all using Brandium.ai to transform their digital presence.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-[#F4F7F9] p-4 shadow-lg">
                <div className="h-full w-full rounded-lg bg-white p-6 shadow-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-block rounded-full bg-[#F4F7F9] p-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#106D7C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
                        <path d="M13 13c-2 2-4 4-6 4" />
                        <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Our Impact</h3>
                      <div className="flex justify-center gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-[#106D7C]">10K+</p>
                          <p className="text-sm text-gray-500">Brands Empowered</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#106D7C]">32</p>
                          <p className="text-sm text-gray-500">Countries</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#106D7C]">98%</p>
                          <p className="text-sm text-gray-500">Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-white px-3 py-1 text-sm">
                  <Users className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>Our Team</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Meet the Experts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse team brings together expertise in marketing, technology, and design.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="h-24 w-24 rounded-full bg-[#F4F7F9]"></div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Dave Kearney</h3>
                  <p className="text-sm text-gray-500">CEO & Founder</p>
                </div>
                <p className="text-center text-gray-500">
                  Former CMO with 15+ years of experience in digital marketing and brand strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="h-24 w-24 rounded-full bg-[#F4F7F9]"></div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">CTO & Co-Founder</p>
                </div>
                <p className="text-center text-gray-500">
                  AI researcher and engineer with a background in machine learning and natural language processing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="h-24 w-24 rounded-full bg-[#F4F7F9]"></div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Elena Rodriguez</h3>
                  <p className="text-sm text-gray-500">Chief Product Officer</p>
                </div>
                <p className="text-center text-gray-500">
                  Product leader with expertise in UX design and building intuitive marketing tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-[#F4F7F9] px-3 py-1 text-sm">
                  <Award className="mr-2 h-4 w-4 text-[#106D7C]" />
                  <span>Our Values</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">What We Stand For</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values guide everything we do at Brandium.ai.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F9] mb-4">
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
                    className="h-6 w-6 text-[#106D7C]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 mt-2">
                  We're constantly pushing the boundaries of what's possible with AI and marketing technology.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F9] mb-4">
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
                    className="h-6 w-6 text-[#106D7C]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer Success</h3>
                <p className="text-gray-500 mt-2">
                  We measure our success by the success of our customers. Your growth is our priority.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F7F9] mb-4">
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
                    className="h-6 w-6 text-[#106D7C]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Trust & Security</h3>
                <p className="text-gray-500 mt-2">
                  We're committed to protecting your data and maintaining the highest standards of security.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented individuals to join our growing team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/careers">
                  <Button size="lg" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                    View Open Positions
                    <ChevronRight className="ml-2 h-4 w-4" />
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
            <span className="text-xl font-bold">brandium.ai</span>
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

