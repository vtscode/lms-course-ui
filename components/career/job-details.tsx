import { Check } from 'lucide-react'

interface JobDetailsProps {
  job: {
    description: string
    requirements: string[]
    benefits: string[]
    salary: string
    jobNature: {
      type: string
      hours: string
      location: string
    }
  }
}

export function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="space-y-8 py-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Who we are</h2>
        <p className="text-muted-foreground">
          {job.description}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Requirements</h2>
        <ul className="space-y-2">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="text-muted-foreground">
              • {requirement}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Benefits</h2>
        <ul className="space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="flex gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-[#ff5722] flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Salary</h2>
        <p className="text-muted-foreground">
          {job.salary}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Job Nature</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>Job Type: {job.jobNature.type}</p>
          <p>Office Hours: {job.jobNature.hours}</p>
          <p>Location: {job.jobNature.location}</p>
        </div>
      </section>
    </div>
  )
}

