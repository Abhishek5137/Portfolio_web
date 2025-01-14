

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Bluestock Fintech",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Engineered and sustained the primary website, incorporating login, signup, and dashboard features.",
      "Leveraged React.js, JavaScript, Tailwind CSS, and MongoDB for a 20% increase in responsiveness.",
      "Enhanced interactive dashboard rendering by 30%.",
      "Collaborated with a team of 5 members to achieve project goals efficiently and effectively.",
    ],
    certificateLink:
      "https://drive.google.com/file/d/1jlC-qs7UBLVR6XRL5gSNOgVuSXBtrqip/view", // Replace with actual link
  },
  {
    title: "Web Development Intern",
    company: "Indinterns",
    duration: "Jan 2024 – Feb 2024",
    description: [
      "Designed and coded a professional portfolio website with HTML, CSS, and JavaScript, achieving a 5% improvement in responsive layout.",
      "Built an interactive weather application integrating OpenWeather API for real-time weather updates and features such as city search and temperature display.",
      "Applied responsive design, code optimization, and user experience principles to strengthen web development skills.",
    ],
    certificateLink: "https://example.com/indinterns-certificate", // Replace with actual link
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 space-y-8">
      <SectionHeading title="Experience" subtitle="My professional journey" />
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700"></div>

        {/* Experiences */}
        <div className="space-y-12 pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Arrow */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6  text-white flex items-center justify-center rounded-full shadow-md">
                <span className="transform rotate-45">→</span>
              </div>

              {/* Card */}
              <Card className=" shadow-md hover:shadow-lg dark:border-gray-700 transition-shadow rounded-lg hover:shadow-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} • {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {exp.certificateLink && (
                    <div className="mt-4">
                      <Button variant="outline" className="text-primary dark:text-primary hover:bg-primary/10">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        View Certificate
                      </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
