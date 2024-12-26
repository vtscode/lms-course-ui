import { Coffee, TrendingUp, Palmtree, Gift, DollarSign, Heart, Baby, Calendar } from 'lucide-react'

const benefits = [
  {
    icon: Coffee,
    title: "Healthy Food & Snacks",
    color: "bg-orange-100"
  },
  {
    icon: TrendingUp,
    title: "Personal Career Growth",
    color: "bg-blue-100"
  },
  {
    icon: Palmtree,
    title: "Vacation & Paid Time Off",
    color: "bg-green-100"
  },
  {
    icon: Gift,
    title: "Special Allowance & Bonus",
    color: "bg-yellow-100"
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    color: "bg-green-100"
  },
  {
    icon: Heart,
    title: "Well-being memberships",
    color: "bg-pink-100"
  },
  {
    icon: Baby,
    title: "Maternity/Paternity Benefits",
    color: "bg-purple-100"
  },
  {
    icon: Calendar,
    title: "Eduguard Annual Events",
    color: "bg-blue-100"
  }
]

export function PerksAndBenefits() {
  return (
    <section className="py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Our Perks & Benefits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We believe in providing our team with the best possible environment and benefits 
          to foster creativity, growth, and well-being.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
              <benefit.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

