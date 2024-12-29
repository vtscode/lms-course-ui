import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InstructorHero } from "@/components/instructor/instructor-hero"
import { InstructorFeatures } from "@/components/instructor/instructor-features"
import { InstructorProcess } from "@/components/instructor/instructor-process"
import { InstructorRules } from "@/components/instructor/instructor-rules"
import { InstructorSupport } from "@/components/instructor/instructor-support"
import { InstructorStories } from "@/components/instructor/instructor-stories"
import { InstructorCTA } from "@/components/instructor/instructor-cta"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function BecomeInstructorPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4">
          <Breadcrumb className="py-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span>Become an Instructor</span>
          </Breadcrumb>

          <InstructorHero />
          <InstructorFeatures />
          <InstructorProcess />
          <InstructorRules />
          <InstructorSupport />
          <InstructorStories />
          <InstructorCTA />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

