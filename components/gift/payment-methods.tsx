'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, ShoppingCartIcon as PaypalIcon } from 'lucide-react'

const savedCards = [
  { type: "visa", last4: "****", expiry: "04/24", name: "Visa Shell" },
  { type: "mastercard", last4: "****", expiry: "04/24", name: "Visa Shell" },
]

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("saved-card")
  const [selectedCard, setSelectedCard] = useState("0")

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Payment Method</h2>

      <RadioGroup
        defaultValue="saved-card"
        onValueChange={setPaymentMethod}
        className="space-y-4"
      >
        {savedCards.map((card, index) => (
          <Label
            key={index}
            className="border rounded-lg p-4 flex items-center justify-between cursor-pointer [&:has(:checked)]:border-primary"
          >
            <div className="flex items-center gap-4">
              <RadioGroupItem value={index.toString()} />
              <div className="flex items-center gap-2">
                <CreditCard className="w-8 h-8" />
                <div>
                  <div className="font-medium">
                    {card.type.toUpperCase()} ending in {card.last4}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expires {card.expiry}
                  </div>
                </div>
              </div>
            </div>
          </Label>
        ))}

        <Label className="border rounded-lg p-4 flex items-center justify-between cursor-pointer [&:has(:checked)]:border-primary">
          <div className="flex items-center gap-4">
            <RadioGroupItem value="new-card" />
            <div className="flex items-center gap-2">
              <CreditCard className="w-8 h-8" />
              <div className="font-medium">New Payment Card</div>
            </div>
          </div>
        </Label>

        <Label className="border rounded-lg p-4 flex items-center justify-between cursor-pointer [&:has(:checked)]:border-primary">
          <div className="flex items-center gap-4">
            <RadioGroupItem value="paypal" />
            <div className="flex items-center gap-2">
              <PaypalIcon className="w-8 h-8" />
              <div className="font-medium">PayPal</div>
            </div>
          </div>
        </Label>
      </RadioGroup>

      {paymentMethod === "new-card" && (
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="Name on card" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Card Number</Label>
              <Input id="number" placeholder="Card number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">MM / YY</Label>
                <Input id="expiry" placeholder="MM / YY" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

