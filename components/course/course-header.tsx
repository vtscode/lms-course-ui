import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Share2, Heart, Award, Globe, Clock, BarChart } from 'lucide-react'
import Image from "next/image"
import type { Course } from "@/types/course"

interface CourseHeaderProps {
  course: Course
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="bg-slate-50 border-b">
      <div className="container px-4 py-6 md:py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Mobile Price Card - Shown only on mobile */}
          <Card className="p-4 lg:hidden mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl md:text-3xl font-bold">${course.price}</div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <Button className="w-full mb-2">Add to cart</Button>
            <Button variant="outline" className="w-full">Buy now</Button>
          </Card>

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {course.description.split('\n')[0]}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{course.rating}</span>
                <span className="ml-1 text-muted-foreground hidden sm:inline">
                  ({course.students.toLocaleString()} students)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{course.language}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Updated {course.lastUpdated}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {course.instructors.map((instructor) => (
                <div key={instructor.id} className="flex items-center gap-2">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{instructor.name}</span>
                    <span className="text-sm text-muted-foreground">{instructor.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Price Card - Hidden on mobile */}
          <Card className="p-6 space-y-6 hidden lg:block h-fit sticky top-20">
            <div className="text-3xl font-bold">${course.price}</div>
            <div className="space-y-4">
              <Button className="w-full">Add to cart</Button>
              <Button variant="outline" className="w-full">Buy now</Button>
            </div>
            <div className="text-sm text-center text-muted-foreground">
              30-Day Money-Back Guarantee
            </div>
            <div className="pt-4 border-t">
              <div className="text-sm font-medium mb-2">This course includes:</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Full lifetime access
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certificate of completion
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="w-4 h-4" />
                  Premium support
                </li>
              </ul>
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

