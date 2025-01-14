import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built with React, Tailwind, and shadcn/ui
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}