export function TrustedCompanies() {
  const companies = [
    { name: "Netflix", logo: "/placeholder.svg?height=40&width=120" },
    { name: "YouTube", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Lenovo", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Verizon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Samsung", logo: "/placeholder.svg?height=40&width=120" }
  ]

  return (
    <section className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">6.3k trusted companies</h2>
        <p className="text-muted-foreground">
          Leading companies use the same courses to help employees keep their skills fresh.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {companies.map((company) => (
          <div key={company.name} className="grayscale hover:grayscale-0 transition-all">
            <img src={company.logo} alt={company.name} className="h-10 object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

