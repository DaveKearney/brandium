"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardNavProps {
  items: {
    title: string
    href: string
    icon?: React.ReactNode
  }[]
}

export function DashboardNav({ items }: DashboardNavProps) {
  const pathname = usePathname()

  return (
    <nav className="grid gap-1 px-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button variant="ghost" className={cn("w-full justify-start", pathname === item.href && "bg-muted")}>
            {item.icon}
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

