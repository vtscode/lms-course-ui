import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CareerHero } from "@/components/career/career-hero"
import { WhyJoinUs } from "@/components/career/why-join-us"
import { PerksAndBenefits } from "@/components/career/perks-and-benefits"
import { Gallery } from "@/components/career/gallery"
import { TrustedCompanies } from "@/components/home/trusted-companies"
import { OpenPositions } from "@/components/career/open-positions"
import Link from "next/link"

export default function CareerPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4">
          <Breadcrumb className="py-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span>Career</span>
          </Breadcrumb>

          <CareerHero />
          <WhyJoinUs />
          <PerksAndBenefits />
          <Gallery />
          <TrustedCompanies />
          <OpenPositions />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

