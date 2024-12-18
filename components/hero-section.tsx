import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-8 md:py-12 items-center">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Learn with expert anytime anywhere
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl">
          Our mission is to help people find the best course online and learn with expert anytime anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Enroll courses
          </Button>
        </div>
      </div>
      <div className="relative h-[400px] lg:h-[600px]">
        <Image
          src="/placeholder.svg"
          alt="Students learning"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  )
}

