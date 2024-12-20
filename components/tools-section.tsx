'use client'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tools = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "React",
  "Laravel",
  "Django",
  "Node.js",
  "TypeScript",
  "Vue.js",
  "Angular"
]

const categories = [
  "Popular keyword",
  "HTML5",
  "Web Development",
  "Responsive Development",
  "Frontend",
  "Programming",
  "Website",
  "Technology",
  "Templates"
]

interface ToolsSectionProps {
  selectedTool?: string
  onSelectTool?: (tool: string) => void
}

export function ToolsSection({ selectedTool, onSelectTool }: ToolsSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Popular tools</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="inline-flex items-center justify-center w-24 h-24 border rounded-lg hover:border-primary transition-colors cursor-pointer"
              onClick={() => onSelectTool?.(tool)}
            >
              <img
                src={`/placeholder.svg`}
                alt={tool}
                className="w-10 h-10"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className={cn(
                "cursor-pointer",
                selectedTool === category && "bg-primary text-primary-foreground"
              )}
              onClick={() => onSelectTool?.(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

