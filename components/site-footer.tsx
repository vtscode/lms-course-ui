import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              E-tutor
            </Link>
            <p className="text-white/60 mb-4">
              A place where you can learn and grow your skills with expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">TOP CATEGORIES</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="#" className="hover:text-white">Design</Link></li>
              <li><Link href="#" className="hover:text-white">Business & Accounting</Link></li>
              <li><Link href="#" className="hover:text-white">Development</Link></li>
              <li><Link href="#" className="hover:text-white">Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/career" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">DOWNLOAD OUR APP</h3>
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
      </div>
    </footer>
  )
}
