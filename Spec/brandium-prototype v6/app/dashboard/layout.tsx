import type React from "react"
import type { Metadata } from "next/types"
import Link from "next/link"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import {
  LayoutDashboard,
  Target,
  Globe,
  Search,
  FileText,
  Share2,
  Palette,
  BarChart2,
  MessageSquare,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - Brandium.ai",
  description: "Manage your digital marketing with Brandium.ai",
}

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Strategy & Planning",
    href: "/dashboard/strategy",
    icon: <Target className="mr-2 h-4 w-4" />,
  },
  {
    title: "Website Optimization",
    href: "/dashboard/website",
    icon: <Globe className="mr-2 h-4 w-4" />,
  },
  {
    title: "SEO & Analytics",
    href: "/dashboard/seo",
    icon: <Search className="mr-2 h-4 w-4" />,
  },
  {
    title: "Content Marketing",
    href: "/dashboard/content",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Social Media",
    href: "/dashboard/social",
    icon: <Share2 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Brand Design",
    href: "/dashboard/brand",
    icon: <Palette className="mr-2 h-4 w-4" />,
  },
  {
    title: "Market Research",
    href: "/dashboard/research",
    icon: <BarChart2 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Brand Vision",
    href: "/dashboard/vision",
    icon: <Eye className="mr-2 h-4 w-4" />,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
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
              <span className="text-xl font-bold hidden md:inline-block">Brandium</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex-1 flex">
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
          <div className="flex-1 py-4">
            <DashboardNav items={navItems} />
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm">
              <div className="rounded-full bg-primary h-2 w-2" />
              <div className="flex-1 text-xs">
                <p className="font-medium">Professional Plan</p>
                <p className="text-muted-foreground">300 credits remaining</p>
              </div>
            </div>
            <div className="mt-4">
              <UserNav />
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

