import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FAQAccordion } from "@/components/faq/faq-accordion"
import { ContactForm } from "@/components/faq/contact-form"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <Breadcrumb className="mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span>FAQs</span>
          </Breadcrumb>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-8">Frequently asked questions</h1>
              <FAQAccordion />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

