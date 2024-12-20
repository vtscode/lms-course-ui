import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CourseHeader } from "@/components/course/course-header"
import { CourseContent } from "@/components/course/course-content"
import { CourseReviews } from "@/components/course/course-reviews"
import { RelatedCourses } from "@/components/course/related-courses"
import type { Course } from "@/types/course"

// This would normally come from an API
const mockCourse: Course = {
  id: "1",
  slug: "complete-website-design",
  title: "Complete Website Responsive Design: from Figma to Workflow to Website Design",
  description: "Learn to design websites with Figma, build with WebFlow, and make it fully responsive...",
  price: 94.99,
  rating: 4.8,
  students: 12500,
  lastUpdated: "November 2023",
  language: "English",
  instructors: [
    {
      id: "1",
      name: "John Smith",
      title: "Senior UX Designer",
      image: "/placeholder.svg",
      rating: 4.9,
      students: 50000,
      courses: 12,
      bio: "Senior UX Designer with 10+ years of experience..."
    }
  ],
  whatYouWillLearn: [
    "Design responsive websites using Figma",
    "Build websites with WebFlow",
    "Understand modern web design principles",
    "Create professional portfolio projects"
  ],
  requirements: [
    "Basic understanding of web design concepts",
    "Familiarity with computers and web browsers",
    "No prior Figma or WebFlow experience required"
  ],
  curriculum: [
    {
      title: "Introduction to Web Design",
      duration: "2h 30m",
      lectures: 8,
      subsections: [
        { title: "Welcome to the Course", duration: "5:00" },
        { title: "Web Design Basics", duration: "15:00" }
      ]
    }
  ],
  reviews: [
    {
      id: "1",
      user: {
        name: "Alice Johnson",
        image: "/placeholder.svg"
      },
      rating: 5,
      date: "1 week ago",
      content: "Excellent course! The instructor explains everything clearly..."
    }
  ],
  relatedCourses: [
    {
      id: "2",
      title: "Advanced UI/UX Design",
      instructor: "Sarah Wilson",
      price: 89.99,
      rating: 4.7,
      students: 8500,
      image: "/placeholder.svg"
    }
  ]
}

// export default function CourseDetail({ params }: { params: { slug: string } }) {
//   return <>Title: {decodeURIComponent(params.slug).replace(/-/g, ' ')}</>
// }

export default function CoursePage({ params }: { params: { slug: string } }) {
  // In a real app, fetch course data based on slug
  const course = mockCourse

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <CourseHeader course={course} />
        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <CourseContent course={course} />
              <CourseReviews course={course} />
            </div>
          </div>
          <section className="mt-16">
            <RelatedCourses courses={course.relatedCourses} />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
