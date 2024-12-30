import { SiteHeader } from "@/components/site-header"
import { CourseCard } from "@/components/course-card"
import { ToolsSection } from "@/components/tools-section"
import { CourseFilters } from "@/components/course-filters"
import { TopInstructors } from "@/components/home/top-instructors"
import { StatsSection } from "@/components/home/stats-section"
import { SiteFooter } from "@/components/site-footer"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// This would normally come from an API
const courses = Array(16).fill(null).map((_, i) => ({
  title: "Complete Web Development Bootcamp 2024",
  instructor: "Dr. Angela Yu",
  price: 94.99,
  rating: 4.8,
  students: 12500 + i * 100,
  image: "/placeholder.svg",
  duration: "52 hours"
}))

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-2xl font-bold mb-8">
            Best selling courses 
          </h1>
          
          <div className="grid gap-8">
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {courses.slice(0, 5).map((course, i) => (
                  <CourseCard key={i} {...course} />
                ))}
              </div>
            </section>

            <ToolsSection />

            <section>
              <h2 className="text-xl font-semibold mb-6">
                Popular instructor in {decodeURIComponent(params.slug).replace(/-/g, ' ')}
              </h2>
              <TopInstructors />
            </section>

            <section>
              <CourseFilters />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, i) => (
                  <CourseCard key={i} {...course} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </section>
          </div>
        </div>
        <StatsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

