const steps = [
  {
    number: "1",
    title: "Apply to become instructor",
    description: "Fill out form to join team"
  },
  {
    number: "2",
    title: "Setup & edit your profile",
    description: "Complete your profile info"
  },
  {
    number: "3",
    title: "Create your new course",
    description: "Start creating your content"
  },
  {
    number: "4",
    title: "Start teaching & earning",
    description: "Publish and earn money"
  }
]

export function InstructorProcess() {
  return (
    <section className="py-12 bg-slate-50 rounded-3xl">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">
            How you&apos;ll become successful instructor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to become a successful instructor and start earning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center p-6 rounded-lg bg-white shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

