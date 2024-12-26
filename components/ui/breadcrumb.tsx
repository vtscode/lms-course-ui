import React from "react";
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Breadcrumb({ className, children, ...props }: BreadcrumbProps) {
  const items = React.Children.toArray(children)

  return (
    <nav className={cn("flex items-center text-sm", className)} {...props}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        
        if (isLast) {
          return <span key={index} className="font-medium">{item}</span>
        }

        return (
          <React.Fragment key={index}>
            {item}
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
          </React.Fragment>
        )
      })}
    </nav>
  )
}

