

import { Badge } from "./ui/badge";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Software Tools",
    skills: [
      "React.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Database Tools",
    skills: ["SQL", "MongoDB", "MySQL"],
  },
  {
    name: "Fundamentals",
    skills: [
      "Data Structures",
      "OOPs",
      "Database",
      "TCP/IP",
      "Machine Learning",
    ],
  },
  {
    name: "Operating Systems",
    skills: ["Linux", "Windows", "Mac OS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-24 space-y-8">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {skillCategories.map((category) => (
          <article key={category.name} className="space-y-4 p-4 border rounded-md shadow-sm  dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
