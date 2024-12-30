import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

interface Instructor {
  name: string
  title: string
  rating: number
  students: number
  image: string
}

const instructors: Instructor[] = [
  {
    name: "David Lane",
    title: "UX Designer",
    rating: 4.8,
    students: 45600,
    image: "/placeholder.svg"
  },
  {
    name: "Derek Mitchell",
    title: "Software Engineer",
    rating: 4.9,
    students: 38200,
    image: "/placeholder.svg"
  },
  {
    name: "Jane Knight",
    title: "Product Manager",
    rating: 4.7,
    students: 42300,
    image: "/placeholder.svg"
  },
  {
    name: "Albert Morris",
    title: "Data Scientist",
    rating: 4.9,
    students: 39700,
    image: "/placeholder.svg"
  },
  {
    name: "Kelvin Murphy",
    title: "Marketing Expert",
    rating: 4.8,
    students: 35200,
    image: "/placeholder.svg"
  }
]

export function TopInstructors() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-8">Top instructor of the month</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {instructors.map((instructor) => (
          <Card key={instructor.name} className="text-center">
            <CardContent className="pt-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold">{instructor.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{instructor.title}</p>
              <div className="flex items-center justify-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{instructor.rating}</span>
                <span className="text-muted-foreground">
                  ({instructor.students.toLocaleString()} students)
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Thousands of students getting skills online while learning from top instructors.{" "}
        <a href="#" className="text-primary hover:underline">
          Become instructor
        </a>
      </p>
    </section>
  )
}

