import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  const footerLinks = {
    categories: [
      { label: "Design", href: "#" },
      { label: "Business & Accounting", href: "#" },
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
    ],
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/career" },
      { label: "Blog", href: "#" },
      { label: "Sign in", href: "/login" },
      { label: "Privacy Policy", href: "#" },
    ],
    social: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand and Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">E-tutor</span>
            </Link>
            <p className="text-white/60 max-w-sm">
              A place where you can learn and grow your skills with expert guidance.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider">
              Top Categories
            </h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Apps */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider">
              Download Our App
            </h3>
            <div className="space-y-2">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} E-tutor. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="/terms"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

