import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact/contact-form"
import { BranchLocations } from "@/components/contact/branch-locations"
import { ContactInfo } from "@/components/contact/contact-info"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <Breadcrumb className="mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span>Contact</span>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Connect with us</h1>
                <p className="text-xl text-muted-foreground">
                  Want to chat? We&apos;d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
                </p>
              </div>
              <Button className="bg-[#ff5722] hover:bg-[#f4511e]">
                <Mail className="mr-2 h-4 w-4" />
                Copy Email
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg"
                alt="Customer support representative"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Branches Section */}
          <section className="py-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Our branches all over the world.</h2>
              <p className="text-muted-foreground">
                Phasellus sed quam eu amet faucibus cursus. Quisque mauris urna, imperdiet at leo quis, luctus auctor nisl.
              </p>
            </div>
            <BranchLocations />
          </section>

          {/* Contact Form Section */}
          <section className="grid lg:grid-cols-2 gap-12 py-12">
            <ContactInfo />
            <ContactForm />
          </section>

          {/* Map Section */}
          <section className="py-12">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192113701254!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1634120116653!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

