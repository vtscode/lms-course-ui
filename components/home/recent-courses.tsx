import { CourseCard } from "@/components/course-card"

export function RecentCourses() {
  const courses = [
    {
      title: "The Python Mega Course: Build 10 Real World Applications",
      instructor: "Ardit Sulce",
      price: 89.99,
      rating: 4.7,
      students: 2100,
      image: "/placeholder.svg",
      duration: "28 hours"
    },
    {
      title: "Fullstack AWS & Firebase: Building Real-Time Cloud Apps",
      instructor: "David Miller",
      price: 99.99,
      rating: 4.8,
      students: 1800,
      image: "/placeholder.svg",
      duration: "32 hours"
    },
    {
      title: "2024 Complete Python Developer Zero to Mastery",
      instructor: "Andrei Neagoie",
      price: 114.99,
      rating: 4.9,
      students: 2500,
      image: "/placeholder.svg",
      duration: "45 hours"
    }
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-8">Recently added courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}

