import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import type { Course } from "@/types/course"

interface CourseReviewsProps {
  course: Course
}

export function CourseReviews({ course }: CourseReviewsProps) {
  const ratings = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    percentage: Math.random() * 100
  }))

  return (
    <div className="space-y-8 md:space-y-12">
      <h2 className="text-xl md:text-2xl font-bold">Student Feedback</h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div className="text-center p-6 bg-slate-50 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold mb-2">{course.rating}</div>
            <div className="flex justify-center mb-2">
              {Array(5).fill(null).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(course.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Course Rating • {course.students.toLocaleString()} Students
            </div>
          </div>

          <div className="space-y-3">
            {ratings.map(({ rating, percentage }) => (
              <div key={rating} className="flex items-center gap-4">
                <div className="w-16 text-sm">{rating} stars</div>
                <Progress value={percentage} className="h-2 flex-1" />
                <div className="w-16 text-sm text-right">{percentage.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {course.reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{review.user.name}</div>
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="flex">
                      {Array(5).fill(null).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

