import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { BestSellingCourses } from "@/components/best-selling-courses"
import { FeaturedCourses } from "@/components/featured-courses"
import { RecentCourses } from "@/components/recent-courses"
import { BecomeInstructor } from "@/components/become-instructor"
import { TopInstructors } from "@/components/top-instructors"
import { TrustedCompanies } from "@/components/trusted-companies"
import { StatsSection } from "@/components/stats-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <BestSellingCourses />
        <FeaturedCourses />
        <RecentCourses />
        <BecomeInstructor />
        <TopInstructors />
        <TrustedCompanies />
        <StatsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

