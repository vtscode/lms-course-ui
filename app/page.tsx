import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/home/hero-section"
import { CategoryGrid } from "@/components/home/category-grid"
import { BestSellingCourses } from "@/components/home/best-selling-courses"
import { FeaturedCourses } from "@/components/home/featured-courses"
import { RecentCourses } from "@/components/home/recent-courses"
import { BecomeInstructor } from "@/components/home/become-instructor"
import { TopInstructors } from "@/components/home/top-instructors"
import { TrustedCompanies } from "@/components/home/trusted-companies"
import { StatsSection } from "@/components/home/stats-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 mx-2">
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

