import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container flex items-center justify-center py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-7xl font-bold text-slate-200">Error 404</h1>
              <h2 className="text-3xl font-bold tracking-tight">
                Oops! page not found
              </h2>
            </div>
            <p className="max-w-[700px] text-muted-foreground">
              Something went wrong. It&apos;s look that your requested could not be found. 
              It&apos;s look like the link is broken or the page is removed.
            </p>
            <Button asChild className="bg-[#ff5722] hover:bg-[#f4511e]">
              <Link href="/">Go Back</Link>
            </Button>
          </div>
          <div className="relative w-full max-w-[800px] aspect-[16/9]">
            <Image
              src="/placeholder.svg"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

