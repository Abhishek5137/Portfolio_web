
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn Card components
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "B-Tech in Computer Science and Engineering",
    school: "Dr. Ambedkar Institute of Technology for Handicapped",
    duration: "2021 – Present",
    description: "Current SGPA: 7.9",
  },
  {
    degree: "All India Senior Secondary Certificate Examination (12th)",
    school: "Jawahar Navodaya Vidyalaya Maharajganj",
    duration: "2018 – 2020",
    description: "Percentage: 88",
  },
  {
    degree: "All India Senior School Certificate Examination (10th)",
    school: "Jawahar Navodaya Vidyalaya Maharajganj",
    duration: "2016 – 2018",
    description: "Percentage: 95.20",
  },
];

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="container w-[3/4] py-24 space-y-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading title="Education" subtitle="My academic background" />
      <div className="flex justify-center">
        <div className="space-y-8 w-3/4  ">
          {education.length > 0 ? (
            education.map((edu, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card shadow-md hover:shadow-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {edu.school} • {edu.duration}
                    </p>
                    {edu.description && (
                      <p className="text-sm leading-relaxed mt-2">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              No education records available.
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
}
