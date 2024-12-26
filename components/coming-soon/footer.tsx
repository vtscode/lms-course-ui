import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2024 E-tutor. All rights reserved.
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="/faqs" className="text-muted-foreground hover:text-foreground">
            FAQs
          </Link>
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground">
            Terms & Condition
          </Link>
        </nav>
      </div>
    </footer>
  )
}

