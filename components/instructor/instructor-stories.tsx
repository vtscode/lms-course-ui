import Image from "next/image"
import { Quote } from 'lucide-react'

const testimonial = {
  quote: "Nam sed consectetur magna. Morbi tempor vulputate. Pellentesque elementum dolor et tempus elementum. Morbi ut nunc vehicula, vehicula mi at, vestibulum odio.",
  author: "Sarah Johnson",
  role: "UI/UX Design Instructor"
}

const instructors = Array(9).fill(null).map(() => ({
  image: `/placeholder.svg`
}))

export function InstructorStories() {
  return (
    <section className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            20k+ Instructor created their success story with eduguard
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Morbi ut nunc vehicula, vehicula mi at, vestibulum odio. Vestibulum non consectetur tortor. Morbi ut nunc vehicula.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-xl space-y-4">
            <Quote className="w-12 h-12 text-[#ff5722]" />
            <p className="text-lg">{testimonial.quote}</p>
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {instructors.map((instructor, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={instructor.image}
                  alt={`Instructor ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

