'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What courses does E-tutor offer?",
    answer: "E-tutor offers a wide range of courses across various categories including Development, Design, Business, Marketing, and more. Our courses are designed by industry experts and cover both beginner and advanced levels."
  },
  {
    question: "How do I enroll in a course?",
    answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' or 'Buy Now' button. You'll need to create an account or log in if you haven't already, and then complete the payment process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment, provided you haven't completed more than 30% of the course."
  },
  {
    question: "How long do I have access to a course?",
    answer: "Once you enroll in a course, you have lifetime access to the course material. You can learn at your own pace and revisit the content as many times as you want."
  },
  {
    question: "Do you provide certificates upon completion?",
    answer: "Yes, you'll receive a certificate of completion once you finish a course. Our certificates can be downloaded, printed, and shared on professional networks like LinkedIn."
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: "Yes, our platform is fully responsive and works on all devices. You can also download our mobile app (available for iOS and Android) to access courses on the go."
  },
  {
    question: "How do I become an instructor?",
    answer: "To become an instructor, click on the 'Become an Instructor' link in the navigation menu. You'll need to fill out an application form and submit a sample course outline. Our team will review your application and get back to you within 5-7 business days."
  }
]

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

