import { Card, CardContent } from "@/components/ui/card"
import { Book, Calculator, Code, UserCircle, FileSpreadsheet, BarChart, Camera, Paintbrush, Heart, Music } from 'lucide-react'
import Link from "next/link"

const categories = [
  {
    title: "Legal",
    icon: Book,
    color: "bg-purple-100",
    courses: "1,200+ courses"
  },
  {
    title: "Business & Accounting",
    icon: Calculator,
    color: "bg-green-100",
    courses: "800+ courses"
  },
  {
    title: "IT Software",
    icon: Code,
    color: "bg-orange-100",
    courses: "1,400+ courses"
  },
  {
    title: "Personal Development",
    icon: UserCircle,
    color: "bg-red-100",
    courses: "900+ courses"
  },
  {
    title: "Office Productivity",
    icon: FileSpreadsheet,
    color: "bg-gray-100",
    courses: "700+ courses"
  },
  {
    title: "Marketing",
    icon: BarChart,
    color: "bg-blue-100",
    courses: "1,000+ courses"
  },
  {
    title: "Photography & Video",
    icon: Camera,
    color: "bg-indigo-100",
    courses: "600+ courses"
  },
  {
    title: "Design",
    icon: Paintbrush,
    color: "bg-pink-100",
    courses: "800+ courses"
  },
  {
    title: "Health & Fitness",
    icon: Heart,
    color: "bg-green-100",
    courses: "500+ courses"
  },
  {
    title: "Music",
    icon: Music,
    color: "bg-yellow-100",
    courses: "400+ courses"
  },
]

export function CategoryGrid() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Browse top category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link href={`/category/${category.title.toLowerCase()}`} key={category.title}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.courses}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

