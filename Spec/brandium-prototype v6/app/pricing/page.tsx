import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
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
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to fit your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Core marketing tools
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    100 AI credits included
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />1 user
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Email support
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
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    All marketing tools
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    300 AI credits included
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Up to 5 users
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Custom branding
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
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    All features
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    1000+ AI credits included
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Advanced security features
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#25B879]" />
                    Unlimited users
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F7F9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="text-gray-500">Find answers to common questions about our pricing and plans.</p>
              </div>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I change plans later?</h3>
                  <p className="text-gray-500">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                    billing cycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What are AI credits?</h3>
                  <p className="text-gray-500">
                    AI credits are used for AI-powered features like content generation, image creation, and advanced
                    analytics. Additional credits can be purchased as needed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Do you offer a free trial?</h3>
                  <p className="text-gray-500">
                    Yes, we offer a 14-day free trial on all plans. No credit card required to start.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                  <p className="text-gray-500">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                  </p>
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

