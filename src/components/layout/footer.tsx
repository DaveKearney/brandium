import Link from "next/link";

export function Footer() {
  return (
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
          <Link href="/terms" className="text-sm hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 Brandium. All rights reserved.</p>
          <div className="flex gap-2">
            <a href="https://app.brandium.cc" className="text-sm text-primary hover:underline">App</a>
            <span className="text-gray-300">|</span>
            <a href="https://docs.brandium.cc" className="text-sm text-primary hover:underline">Docs</a>
            <span className="text-gray-300">|</span>
            <a href="https://api.brandium.cc" className="text-sm text-primary hover:underline">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
}