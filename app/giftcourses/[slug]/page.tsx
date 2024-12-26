import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GiftForm } from "@/components/gift/gift-form"
import { OrderSummary } from "@/components/gift/order-summary"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Link from "next/link"

// This would normally come from an API
const mockCourse = {
  title: "Graphic Design Masterclass - Learn GREAT Design",
  instructor: "Courtney Henry",
  image: "/placeholder.svg",
  price: 75.00
}

export default function GiftCoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8">
          <Breadcrumb className="mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/courses" className="text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link 
              href={`/courses/${params.slug}`} 
              className="text-muted-foreground hover:text-foreground"
            >
              {mockCourse.title}
            </Link>
            <span>Gift Course</span>
          </Breadcrumb>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-8">Gift Course</h1>
              <GiftForm />
            </div>
            <div>
              <OrderSummary course={mockCourse} discount={8} />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

