"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { formNum } from "@/lib/utils";

interface CourseCardProps {
  title: string
  instructor: string
  price: number
  rating: number
  students: number
  image: string
  duration?: string
  featured?: boolean
}

export function CourseCard({
  title,
  instructor,
  price,
  rating,
  students,
  image,
  duration,
  featured = false
}: CourseCardProps) {
  return (
    <Link href={`/courses/${title.toLowerCase().replace(/ /g, "-")}`}>
      <Card className={`h-full hover:shadow-lg transition-shadow ${featured ? 'border-2 border-primary' : ''}`}>
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{instructor}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{formNum(students).toString()} students</span>
            </div>
            {duration && <span>{duration}</span>}
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
          <span className="font-bold">${price.toFixed(2)}</span>
          {featured && <Badge>Featured</Badge>}
        </CardFooter>
      </Card>
    </Link>
  )
}
