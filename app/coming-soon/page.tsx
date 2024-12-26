import { SocialLinks } from "@/components/coming-soon/social-links"
import { CountdownTimer } from "@/components/coming-soon/countdown-timer"
import { NotificationForm } from "@/components/coming-soon/notification-form"
import { Footer } from "@/components/coming-soon/footer"
import Image from "next/image"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">E-tutor</span>
        </Link>
        <SocialLinks />
      </div>

      <main className="flex-1 container px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-medium">
                COMING SOON
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                We are going to launch our website very soon. Stay tune
              </h1>
            </div>

            <CountdownTimer targetDate="2024-02-01" />

            <div className="max-w-md space-y-4">
              <h2 className="text-xl font-semibold">
                Get notified when we launch
              </h2>
              <NotificationForm />
              <p className="text-sm text-muted-foreground">
                *Don&apos;t worry we will not spam you 😊
              </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] order-first lg:order-last">
            <Image
              src="/placeholder.svg"
              alt="Coming Soon Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

