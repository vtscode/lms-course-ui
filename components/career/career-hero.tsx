import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CareerHero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center py-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
            Join the most incredible & creative team.
          </h1>
          <p className="text-xl text-muted-foreground">
            Proin gravida enim augue, dapibus ultricies eros feugiat at. 
            Pellentesque bibendum non felis ut amet, efficitur felis sapien ac. 
            Morbi gravida justo ac nunc consectetur.
          </p>
        </div>
        <Button size="lg" className="bg-[#ff5722] hover:bg-[#f4511e]">
          View Open Positions
        </Button>
      </div>
      <div className="relative aspect-[4/3]">
        <Image
          src="/placeholder.svg"
          alt="Join our team"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  )
}

