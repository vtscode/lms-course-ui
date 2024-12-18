import { CourseCard } from "./course-card"

export function FeaturedCourses() {
  const courses = [
    {
      title: "Complete Guide to TensorFlow for Deep Learning",
      instructor: "Jose Portilla",
      price: 129.99,
      rating: 4.9,
      students: 5600,
      image: "/placeholder.svg",
      duration: "42 hours",
      featured: true
    },
    {
      title: "Docker Certification: The Complete Guide",
      instructor: "Stephen Grider",
      price: 149.99,
      rating: 4.8,
      students: 4200,
      image: "/placeholder.svg",
      duration: "38 hours",
      featured: true
    },
    {
      title: "The Python Mega Course: Build 10 Real World Applications",
      instructor: "Ardit Sulce",
      price: 119.99,
      rating: 4.7,
      students: 8900,
      image: "/placeholder.svg",
      duration: "36 hours",
      featured: true
    },
    {
      title: "Advanced React and Redux: 2024 Edition",
      instructor: "Stephen Grider",
      price: 134.99,
      rating: 4.9,
      students: 3800,
      image: "/placeholder.svg",
      duration: "48 hours",
      featured: true
    }
  ]

  return (
    <section className="container py-12 bg-slate-50">
      <h2 className="text-2xl font-bold mb-8">Our featured courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}

