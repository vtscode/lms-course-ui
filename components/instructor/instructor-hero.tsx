import { Button } from "@/components/ui/button"
import Image from "next/image"

const stats = [
  { number: "67.1k", label: "Students" },
  { number: "26k", label: "Certified Instructor" },
  { number: "72", label: "Country Language" },
  { number: "99.9%", label: "Success Rate" },
  { number: "57", label: "Trusted Companies" }
]

export function InstructorHero() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Become an Instructor
            </h1>
            <p className="text-xl text-muted-foreground">
              Become an instructor & start teaching with 26k certified instructors. Create & sell courses with 72k students — Grow yourself with 71 countries.
            </p>
          </div>
          <Button size="lg" className="bg-[#ff5722] hover:bg-[#f4511e]">
            Start Teaching
          </Button>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#ff5722]">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg"
            alt="Happy instructor with notebook"
            width={600}
            height={600}
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}

