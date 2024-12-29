import Image from "next/image"

export function InstructorSupport() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-last lg:order-first">
          <Image
            src="/placeholder.svg"
            alt="Support representative"
            width={600}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Don&apos;t worry we&apos;re always here to help you
          </h2>
          <p className="text-muted-foreground">
            Need to ask some questions? Contact us anytime. Our support team is available 24/7 to help you with any questions or technical issues.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              <span className="text-muted-foreground">
                Our support will keep you safe, whether or not about our
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              <span className="text-muted-foreground">
                You can ask anything about your course & we will give you best solution
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              <span className="text-muted-foreground">
                Save time and start earning money sooner
              </span>
            </p>
          </div>
          <div className="pt-4">
            <p className="font-medium">help.eduguard@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

