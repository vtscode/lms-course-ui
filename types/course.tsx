export interface Instructor {
  id: string
  name: string
  title: string
  image: string
  rating: number
  students: number
  courses: number
  bio: string
}

export interface CourseSection {
  title: string
  duration: string
  lectures: number
  subsections: {
    title: string
    duration: string
  }[]
}

export interface Review {
  id: string
  user: {
    name: string
    image: string
  }
  rating: number
  date: string
  content: string
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  price: number
  rating: number
  students: number
  lastUpdated: string
  language: string
  instructors: Instructor[]
  whatYouWillLearn: string[]
  requirements: string[]
  curriculum: CourseSection[]
  reviews: Review[]
  relatedCourses: {
    id: string
    title: string
    instructor: string
    price: number
    rating: number
    students: number
    image: string
  }[]
}

