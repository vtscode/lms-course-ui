import { MapPin, Briefcase, Users } from 'lucide-react'

interface JobHeaderProps {
  job: {
    title: string
    location: string
    type: string
    vacancies: string
  }
}

export function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#ff5722]" />
          {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#ff5722]" />
          {job.type}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#ff5722]" />
          {job.vacancies}
        </div>
      </div>

      <h1 className="text-3xl font-bold">
        {job.title}
      </h1>
    </div>
  )
}

