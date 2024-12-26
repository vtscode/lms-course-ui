import Image from "next/image"
import Link from "next/link"
import { SignUpForm } from "@/components/auth/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className="absolute right-4 top-4 md:right-8 md:top-8"
      >
        Already have an account? Login
      </Link>
      
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-[#f5f6ff]" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-zinc-900">E-tutor</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <Image
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Authentication"
            className="block dark:hidden"
            priority
          />
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight mt-[32px]">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your information below to create your account
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

