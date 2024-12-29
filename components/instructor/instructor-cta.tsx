import { Button } from "@/components/ui/button"
import Image from "next/image"

export function InstructorCTA() {
  return (
    <section className="py-12 bg-slate-900 text-white rounded-3xl mb-12">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Start teaching with us and inspire others
            </h2>
            <p className="text-slate-300">
              Join our community of expert instructors and share your knowledge with students worldwide.
              Start creating courses today and earn while teaching.
            </p>
            <Button size="lg" className="bg-[#ff5722] hover:bg-[#f4511e]">
              Register Now
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Start teaching"
              width={600}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

