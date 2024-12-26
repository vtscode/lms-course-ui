'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PaymentMethods } from "./payment-methods"

const giftFormSchema = z.object({
  recipientName: z.string().min(2, "Name must be at least 2 characters"),
  recipientEmail: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
})

export function GiftForm() {
  const form = useForm<z.infer<typeof giftFormSchema>>({
    resolver: zodResolver(giftFormSchema),
    defaultValues: {
      recipientName: "",
      recipientEmail: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof giftFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recipient&apos;s Information</h2>
          
          <FormField
            control={form.control}
            name="recipientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient&apos;s Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="recipientEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient&apos;s Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gift Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add your personal message here..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <PaymentMethods />

        <div className="pt-4 lg:hidden">
          <Button type="submit" className="w-full">
            Complete Payment
          </Button>
        </div>
      </form>
    </Form>
  )
}

