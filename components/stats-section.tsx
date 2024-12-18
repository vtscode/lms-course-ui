import { Button } from "@/components/ui/button"

export function StatsSection() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex gap-4">
              <Button variant="default" className="bg-[#ff5722] hover:bg-[#f4511e]">
                Get Started
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Browse All Courses
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">6.3k</div>
              <div className="text-white/60">Online Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold">26k</div>
              <div className="text-white/60">Certified Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-white/60">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
