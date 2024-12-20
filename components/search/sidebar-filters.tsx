import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Star } from 'lucide-react'

const categories = [
  { name: "Development", count: 1345 },
  { name: "Web Development", count: 890 },
  { name: "Data Science", count: 456 },
  { name: "Mobile Development", count: 234 },
  { name: "Software Testing", count: 167 },
  { name: "Software Engineering", count: 345 },
  { name: "Software Development Tools", count: 234 },
  { name: "No Code Development", count: 123 }
]

const tools = [
  { name: "HTML 5", count: 234 },
  { name: "CSS 3", count: 345 },
  { name: "JavaScript", count: 567 },
  { name: "React", count: 432 },
  { name: "Laravel", count: 234 },
  { name: "Node.js", count: 345 },
  { name: "WordPress", count: 234 }
]

const ratings = [
  { label: "4.5 & up", value: 4.5 },
  { label: "4.0 & up", value: 4.0 },
  { label: "3.5 & up", value: 3.5 },
  { label: "3.0 & up", value: 3.0 }
]

const levels = ["All Level", "Beginner", "Intermediate", "Expert"]

const durations = [
  "0-2 Hours",
  "3-6 Hours",
  "7-16 Hours",
  "17+ Hours"
]

export function SidebarFilters() {
  return (
    <aside className="w-64 flex-shrink-0">
      <ScrollArea className="h-[calc(100vh-4rem)] pr-4">
        <Accordion type="multiple" defaultValue={["category", "tools", "rating", "price", "level", "duration"]}>
          <AccordionItem value="category">
            <AccordionTrigger>CATEGORY</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={category.name} />
                      <label htmlFor={category.name} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">({category.count})</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tools">
            <AccordionTrigger>TOOLS</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={tool.name} />
                      <label htmlFor={tool.name} className="text-sm">
                        {tool.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">({tool.count})</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating">
            <AccordionTrigger>RATING</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <div key={rating.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating.value}`} />
                      <label htmlFor={`rating-${rating.value}`} className="text-sm flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {rating.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>PRICE</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 px-1">
                <Slider
                  defaultValue={[0, 100]}
                  max={200}
                  step={1}
                  className="mt-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$200</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="level">
            <AccordionTrigger>COURSE LEVEL</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {levels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox id={level} />
                    <label htmlFor={level} className="text-sm">
                      {level}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="duration">
            <AccordionTrigger>DURATION</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {durations.map((duration) => (
                  <div key={duration} className="flex items-center space-x-2">
                    <Checkbox id={duration} />
                    <label htmlFor={duration} className="text-sm">
                      {duration}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </aside>
  )
}

