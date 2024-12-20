import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Share2, Heart, Award, Globe, Clock } from 'lucide-react'
import Image from "next/image"
import type { Course } from "@/types/course"

interface CourseHeaderProps {
  course: Course
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="bg-slate-50 border-b">
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description.split('\n')[0]}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{course.rating}</span>
                <span className="ml-1 text-muted-foreground">
                  ({course.students.toLocaleString()} students)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {course.language}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated {course.lastUpdated}
              </div>
            </div>

            <div className="flex gap-2">
              {course.instructors.map((instructor) => (
                <div key={instructor.id} className="flex items-center gap-2">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium">{instructor.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 space-y-4">
            <div className="text-3xl font-bold">${course.price}</div>
            <Button className="w-full">Add to cart</Button>
            <Button variant="outline" className="w-full">Buy now</Button>
            <div className="text-sm text-center text-muted-foreground">
              30-Day Money-Back Guarantee
            </div>
            <div className="flex justify-center gap-4 pt-4 border-t">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Award className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

