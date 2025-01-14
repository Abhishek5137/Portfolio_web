
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm <span className="text-primary">Abhishek Patel</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Full Stack Developer specializing in building exceptional digital experiences
      </p>
      <div className="flex gap-4">
        <Button>
        <a href="#projects" >View Projects</a> <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" >
          <Github className="mr-2 h-4 w-4" />
          <a href="https://github.com/Abhishek5137" target="_blank" rel="noopener noreferrer" 
          className="dark:text-white">GitHub</a>
        </Button>
        <Button variant="outline"  >
          <Linkedin className="mr-2 h-4 w-4 " />
         <a href="https://www.linkedin.com/in/abhishek-patel-026716230/"
          target="_blank" rel="noopener noreferrer"
          className="dark:text-white"
          > LinkedIn </a>
        </Button>
      </div>
      {/* Contact Information */}
      <div className="mt-6 flex gap-6">
        <Button variant="outline" >
          <Mail className="mr-2 h-4 w-4" />
         <a  href="mailto:abhishek5137599@gmail.com"
         className="dark:text-white"> Email </a>
        </Button>
        <Button variant="outline"  >
          <Phone className="mr-2 h-4 w-4" />
           <a  href="tel:+917991869850"
           className="dark:text-white">Phone </a>
        </Button>
      </div>
    </div>
  );
}
