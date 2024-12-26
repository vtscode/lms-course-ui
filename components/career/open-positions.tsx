import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Clock } from 'lucide-react'

const positions = [
  {
    title: "Product Designer (UI/UX Designer)",
    location: "New York",
    salary: "Full Time",
    experience: "2+ Years",
    deadline: "30 June, 2024"
  },
  {
    title: "Social Media Manager",
    location: "Remote",
    salary: "Full Time",
    experience: "3+ Years",
    deadline: "30 June, 2024"
  },
  {
    title: "Director of Accounting",
    location: "Remote",
    salary: "Full Time",
    experience: "5+ Years",
    deadline: "30 June, 2024"
  },
  {
    title: "Principal Software Engineer",
    location: "New York",
    salary: "Full Time",
    experience: "5+ Years",
    deadline: "30 June, 2024"
  }
]

export function OpenPositions() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">
        Our all open positions (04)
      </h2>

      <div className="grid gap-6">
        {positions.map((position, index) => (
          <div 
            key={index}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {position.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {position.experience}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Deadline: </span>
                  {position.deadline}
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

