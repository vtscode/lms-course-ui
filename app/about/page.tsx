import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { number: "67.1k", label: "Students" },
  { number: "26k", label: "Certified Instructor" },
  { number: "72", label: "Country Language" },
  { number: "99.9%", label: "Success Rate" },
  { number: "57", label: "Trusted Companies" }
]

const companies = [
  { name: "Netflix", logo: "/placeholder.svg" },
  { name: "YouTube", logo: "/placeholder.svg" },
  { name: "Google", logo: "/placeholder.svg" },
  { name: "Lenovo", logo: "/placeholder.svg" },
  { name: "Slack", logo: "/placeholder.svg" },
  { name: "Verizon", logo: "/placeholder.svg" },
  { name: "Microsoft", logo: "/placeholder.svg" },
  { name: "Lexmark", logo: "/placeholder.svg" }
]

const testimonials = [
  {
    quote: "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
    author: "Sundar Pichai",
    title: "Chief Executive of Google"
  },
  {
    quote: "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
    author: "Satya Nadella",
    title: "CEO of Microsoft"
  },
  {
    quote: "In total, it was a big success. I would get emails about what a fantastic resource it was.",
    author: "Ted Sarandos",
    title: "Chief Executive Officer of Netflix"
  }
]

const galleryImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
]

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <Breadcrumb className="mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span>About</span>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-5xl font-bold text-slate-200">2007-2021</h2>
                <h1 className="text-4xl font-bold">
                  We share knowledge with the world
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/placeholder.svg"
                alt="Team collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                We Just keep growing with 6.3k Companies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nullam egestas tellus at ante cursus tristique. Class aptent taciti sociosqu ad litora torquent.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-12 bg-slate-50 rounded-3xl">
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt="Our mission"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                    OUR ONE BILLION MISSION
                  </div>
                  <h2 className="text-3xl font-bold">
                    Our one billion mission sounds bold, We agree.
                  </h2>
                  <p className="text-muted-foreground">
                    "We cannot solve our problems with the same thinking we used when we created them." —Albert Einstein. Institutions are slow to change. We're impatient learners. Let's do this. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-12">
            <div className="space-y-4 mb-8">
              <div className="text-orange-600 font-medium">OUR GALLERY</div>
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">
                    We've been here almost 17 years
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Fusce volutpat ante augue, sit amet tristique nisi commodo in. Aliquam ac lectus quis tellus venenatis imperdiet.
                  </p>
                </div>
                <Button className="bg-[#ff5722] hover:bg-[#f4511e]">
                  Join Our Team
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
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

          {/* Testimonials Section */}
          <section className="py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg space-y-4">
                  <div className="text-4xl text-orange-600">"</div>
                  <p className="text-lg">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

