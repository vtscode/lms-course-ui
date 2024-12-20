import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter } from 'lucide-react'

export function CourseFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-end justify-between py-4">
      <div className="flex flex-col sm:flex-row gap-4 flex-1">
        <div className="flex-1">
          <Input placeholder="UX/UI design" className="max-w-sm" />
          <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
            Suggestion: 
            <div className="flex gap-2">
              {["ux/ui design", "web development", "app design", "mockup", "3d"].map((tag) => (
                <button key={tag} className="hover:text-primary">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Select defaultValue="trending">
            <SelectTrigger className="w-full sm:w-[180px]">
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
        $10,000 results for "UX/UI design"
      </div>
    </div>
  )
}

