import Image from "next/image"
import { Button } from "@/components/ui/button"

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
]

export function Gallery() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div className="space-y-2">
          <div className="text-orange-600 font-medium">OUR GALLERY</div>
          <h2 className="text-3xl font-bold">
            We've been here almost 17 years
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Fusce volutpat ante augue, sit amet tristique nisi commodo in. 
            Aliquam ac lectus quis tellus venenatis imperdiet. 
            Sed sed nunc felis. Curabitur in urna ligna.
          </p>
        </div>
        <Button className="bg-[#ff5722] hover:bg-[#f4511e]">
          Join Our Team
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

