import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface OrderSummaryProps {
  course: {
    title: string
    instructor: string
    image: string
    price: number
  }
  discount?: number
}

export function OrderSummary({ course, discount = 0 }: OrderSummaryProps) {
  const subtotal = course.price
  const discountAmount = (subtotal * discount) / 100
  const total = subtotal - discountAmount

  return (
    <Card className="lg:sticky lg:top-20">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-4">Course</h2>
            <div className="flex gap-4">
              <Image
                src={course.image}
                alt={course.title}
                width={120}
                height={68}
                className="rounded-lg object-cover"
              />
              <div className="space-y-1">
                <h3 className="font-medium line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground">By {course.instructor}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)} USD</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Coupon Discount</span>
                  <span>{discount}%</span>
                </div>
              )}
              <div className="flex justify-between border-t pt-2 font-medium text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full hidden lg:block">
            Complete Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

