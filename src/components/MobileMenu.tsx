import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Menu className="h-[1.2rem] w-[1.2rem] " />
          </button>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2">
        <DropdownMenuItem asChild>
          <a href="#about" className="dark:text-primary transition">
            About
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#experience" className="dark:text-primary transition">
            Experience
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#skills" className="dark:text-primary transition">
            Skills
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#projects" className="dark:text-primary transition">
            Projects
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#education" className="dark:text-primary transition">
            Education
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#contact" className="dark:text-primary transition">
            Contact
          </a>
        </DropdownMenuItem>
           <ModeToggle />
        <DropdownMenuItem/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
