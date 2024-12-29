import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { JobHeader } from "@/components/career/job-header"
import { JobDetails } from "@/components/career/job-details"
import { JobContact } from "@/components/career/job-contact"
import Link from "next/link"

// This would normally come from an API
const jobData = {
  title: "Product Designer (UI/UX Designer)",
  location: "Tokyo, Japan",
  type: "Full-Time",
  vacancies: "01 Vacancy",
  address: {
    street: "1702 Olympic Boulevard",
    city: "Santa Monica, CA 90404"
  },
  contact: {
    email: "career.eduguard@gamil.com",
    phone: "(219) 555-0114"
  },
  description: "Sed lectus accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisi quis, vestibulum nulla. Aenean quis nibh ullamcorper, euismod magna at, egestas dui. Sed sed egestas mi. Donec viverra efficitur ipsum, id cursus risus fringilla id.",
  requirements: [
    "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
    "Quisque varius auctor augue id blandit.",
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Ut ut magna condimentum, pharetra erat nec, lectus nulla.",
    "Aliquam tempus mollis sem eget ullamcorper.",
    "Donec non eros eget lorem blandit ullamcorper et et magna.",
    "Curabitur quis ipsum sollicitudin, sagittis elit in, sodales felis.",
    "Nam bibendum tristique nibh id tristique.",
    "Vestibulum lorem ibero, rutrum vitae tincidunt quis, sodales quis neque."
  ],
  benefits: [
    "Nulla facilisi, integer non euismod neque",
    "Suspendisse a ligula posuere, convallis dui et, commodo nisl",
    "Suspendisse a ligula posuere, convallis dui et, commodo nisl aliquam lacinia tristique nulla",
    "Donec dolor nunc, ultrices ac imperdiet eu, dignissim ut purus",
    "Mauris et tellus in mauris commodo varius nec sit amet urna",
    "Integer bibendum, tellus luctus blandit pulvinar",
    "Donec dolor nunc, ultrices ac imperdiet eu, dignissim ut purus. Aliquam erat volutpat."
  ],
  salary: "Based on Skills (20K - 40K USD) and Other Benefits",
  jobNature: {
    type: "Full Time",
    hours: "9 AM to 5 PM (Sat-Thurs) 6 days (We will consider remote as well)",
    location: "1702 Olympic Boulevard, Santa Monica, CA 90404"
  }
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  console.log(params);

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <Breadcrumb className="mb-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/career" className="text-muted-foreground hover:text-foreground">
              Career
            </Link>
            <span>{jobData.title}</span>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <JobHeader job={jobData} />
            <JobContact contact={jobData} />
            <JobDetails job={jobData} />
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="bg-[#ff5722] hover:bg-[#f4511e]">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

