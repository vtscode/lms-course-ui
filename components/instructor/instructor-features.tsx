import { Check } from 'lucide-react'
import Image from "next/image"

const features = [
  {
    title: "Teach your students on your own",
    description: "Vestibulum non consectetur tortor. Morbi ut nunc vehicula, vehicula mi at, vestibulum odio."
  },
  {
    title: "Manage your course, payment in one place",
    description: "Quisque leo leo, euismod non eros sit amet, lacinia feugiat felis. Vestibulum non consectetur."
  },
  {
    title: "Chat with your students",
    description: "Morbi ut nunc vehicula, vehicula mi at, vestibulum odio. Vestibulum non consectetur tortor."
  }
]

export function InstructorFeatures() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/placeholder.svg"
            alt="Platform interface"
            width={800}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Why you&apos;ll start teaching on Eduguard
            </h2>
            <p className="text-muted-foreground">
              Praesent rutrum velit quis nisi elementum. Proin ullamcorper, lorem quis imperdiet tempus, orci augue viverra dolor, et viverra.
            </p>
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#ff5722]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff5722]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

