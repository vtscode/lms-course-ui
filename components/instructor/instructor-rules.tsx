import Image from "next/image"

const rules = [
  "Get alternative ideas and customization preferences",
  "Edit the text, images or add",
  "Duplicate any section from demo and paste where",
  "Remove or add new",
  "Customize colors elements table"
]

export function InstructorRules() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Instructor rules & regulations
          </h2>
          <p className="text-muted-foreground">
            Your admin can use alternative layouts. Apply all or just portions of the demo content to your live site with a click. Edit text, images and more.
          </p>
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span className="text-muted-foreground">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg"
            alt="Instructor working"
            width={600}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

