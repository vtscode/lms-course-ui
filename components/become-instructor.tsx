import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function BecomeInstructor() {
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6 items-center bg-[#ff5722] text-white rounded-xl p-6 md:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Become an Instructor</h2>
          <p className="text-white/90">
            Join our community of expert instructors and share your knowledge with students worldwide.
            Start creating courses today and earn while teaching.
          </p>
          <Button variant="secondary" className="gap-2">
            Start Teaching <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Your teaching & earning steps</h3>
          <div className="grid gap-4">
            {[
              { step: 1, text: "Apply to be new instructor" },
              { step: 2, text: "Create your own course" },
              { step: 3, text: "Start teaching & earning" }
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#ff5722] font-bold">
                  {item.step}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
