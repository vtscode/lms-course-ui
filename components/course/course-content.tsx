import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2 } from 'lucide-react'
import type { Course } from "@/types/course"

interface CourseContentProps {
  course: Course
}

export function CourseContent({ course }: CourseContentProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">What you&apos;ll learn</h2>
        <div className="grid sm:grid-cols-2 gap-4 p-6 border rounded-lg bg-slate-50">
          {course.whatYouWillLearn.map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
          {course.requirements.map((req, i) => (
            <li key={i} className="pl-2">{req}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Course content</h2>
          <div className="text-sm text-muted-foreground">
            {course.curriculum.reduce((acc, section) => acc + section.lectures, 0)} lectures • {
              course.curriculum.reduce((acc, section) => {
                const [hours, minutes] = section.duration.split('h ')
                return acc + parseInt(hours) * 60 + parseInt(minutes)
              }, 0) / 60
            } hours total
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full border rounded-lg">
          {course.curriculum.map((section, i) => (
            <AccordionItem key={i} value={`section-${i}`} className="px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
                  <span className="font-medium">{section.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {section.lectures} lectures • {section.duration}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1 pt-2">
                  {section.subsections.map((subsection, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <span className="text-sm md:text-base">{subsection.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {subsection.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

