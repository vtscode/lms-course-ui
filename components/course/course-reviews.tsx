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
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Student Feedback</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-5xl font-bold">{course.rating}</div>
            <div className="flex justify-center">
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
            <div className="text-sm text-muted-foreground">Course Rating</div>
          </div>

          <div className="space-y-2">
            {ratings.map(({ rating, percentage }) => (
              <div key={rating} className="flex items-center gap-4">
                <div className="w-12 text-sm">{rating} stars</div>
                <Progress value={percentage} className="h-2" />
                <div className="w-12 text-sm text-right">{percentage.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {course.reviews.map((review) => (
            <div key={review.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{review.user.name}</div>
                  <div className="flex items-center">
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
                    <span className="ml-2 text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

