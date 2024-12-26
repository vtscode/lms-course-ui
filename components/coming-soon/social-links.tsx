import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="h-5 w-5" />
          <span className="sr-only">YouTube</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
    </div>
  )
}

