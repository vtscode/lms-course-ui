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
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">What you&apos;ll learn</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {course.whatYouWillLearn.map((item, i) => (
            <div key={i} className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2">
          {course.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Course content</h2>
        <Accordion type="single" collapsible className="w-full">
          {course.curriculum.map((section, i) => (
            <AccordionItem key={i} value={`section-${i}`}>
              <AccordionTrigger>
                <div className="flex justify-between w-full pr-4">
                  <span>{section.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {section.lectures} lectures • {section.duration}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {section.subsections.map((subsection, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-2 hover:bg-slate-50 px-4 rounded"
                    >
                      <span>{subsection.title}</span>
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

