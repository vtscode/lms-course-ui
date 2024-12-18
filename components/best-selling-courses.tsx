import { CourseCard } from "./course-card"

export function BestSellingCourses() {
  const courses = [
    {
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Prize",
      instructor: "Dr. Angela Yu",
      price: 84.99,
      rating: 4.8,
      students: 12500,
      image: "/placeholder.svg",
      duration: "32 hours"
    },
    {
      title: "The Complete SQL Bootcamp: Zero to Hero",
      instructor: "Jose Portilla",
      price: 94.99,
      rating: 4.7,
      students: 8900,
      image: "/placeholder.svg",
      duration: "28 hours"
    },
    {
      title: "Learn Python Programming Masterclass",
      instructor: "Tim Buchalka",
      price: 89.99,
      rating: 4.9,
      students: 15600,
      image: "/placeholder.svg",
      duration: "45 hours"
    },
    {
      title: "The Complete Digital Marketing Course",
      instructor: "Rob Percival",
      price: 79.99,
      rating: 4.6,
      students: 9800,
      image: "/placeholder.svg",
      duration: "24 hours"
    },
    {
      title: "Web Development Bootcamp 2024",
      instructor: "Colt Steele",
      price: 99.99,
      rating: 4.8,
      students: 18200,
      image: "/placeholder.svg",
      duration: "56 hours"
    }
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-8">Best selling courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}
