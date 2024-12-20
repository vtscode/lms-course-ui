import { CourseCard } from "@/components/course-card"
import type { Course } from "@/types/course"

interface RelatedCoursesProps {
  courses: Course['relatedCourses']
}

export function RelatedCourses({ courses }: RelatedCoursesProps) {
  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-xl md:text-2xl font-bold">Related Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

