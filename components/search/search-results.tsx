import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// This would normally come from an API
const courses = Array(12).fill(null).map((_, i) => ({
  title: "Complete Web Development Bootcamp 2024",
  instructor: "Dr. Angela Yu",
  price: 94.99,
  rating: 4.8,
  students: 12500 + i * 100,
  image: "/placeholder.svg?height=200&width=300",
  duration: "52 hours"
}))

interface SearchResultsProps {
  initialQuery?: string
}

export function SearchResults({ initialQuery = '' }: SearchResultsProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  
  return (
    <div className="flex-1 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
        <div className="flex-1">
          <Input 
            placeholder="UX/UI Design" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
            Suggestions: 
            <div className="flex gap-2">
              {["web interface", "user experience", "web design", "interface", "app"].map((tag) => (
                <button key={tag} className="hover:text-primary">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Select defaultValue="trending">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        {searchQuery ? `$14,104 results for "${searchQuery}"` : 'All Courses'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

