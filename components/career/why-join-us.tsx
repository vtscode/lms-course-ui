import { Check } from 'lucide-react'
import Image from "next/image"

const reasons = [
  {
    title: "Ut sodii ligula, vehicula sed egestas vel",
    description: "Aliquam erat volutpat. Praesent ullamcorper ut dolor et tempus. Morbi ut nunc vehicula, vehicula mi at, vestibulum odio."
  },
  {
    title: "Aenean vitae leo non praesent ullamcorper eu",
    description: "Fusce vitae leo non. Praesent ullamcorper ut dolor et tempus. Aenean quis at magna vitam feugiat."
  }
]

export function WhyJoinUs() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/placeholder.svg"
            alt="Team member 1"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
          <Image
            src="/placeholder.svg"
            alt="Team member 2"
            width={300}
            height={400}
            className="object-cover rounded-lg mt-8"
          />
          <Image
            src="/placeholder.svg"
            alt="Team member 3"
            width={300}
            height={400}
            className="object-cover rounded-lg col-span-2"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Why you will join our team</h2>
            <p className="text-muted-foreground">
              Quisque leo leo, euismod non eros sit amet, lacinia feugiat felis. 
              Vestibulum non consectetur tortor. Morbi ut nunc vehicula, vehicula mi at, 
              vestibulum odio.
            </p>
          </div>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff5722] rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground pl-7">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

