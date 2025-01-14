
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Importing Card components from ShadCN

export default function About() {
  return (
    <section id="about" className="container py-24 space-y-8 border p-5 rounded-md shadow-lg  dark:text-white">
      <SectionHeading
        title="About Me"
        subtitle="Here's a brief introduction about who I am and what I do"
      />
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section - Card */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Card className=" shadow-md p-6 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Hello! I'm Abhishek Patel</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-lg mb-4">
                I am a passionate software developer with a strong foundation in computer science and a deep interest in building scalable web applications. My journey in technology began during my undergraduate studies, and since then, I've been constantly learning and growing in this ever-evolving field.
              </h4>
              <p className="mt-4 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
              </p>

              {/* Download Resume Button */}
              <motion.div
                className="flex justify-center mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="outline" className="text-primary dark:text-primary hover:bg-primary/10">
                  <a
                    href="/resume.pdf" // Ensure the resume file is in the public folder
                    download="Abhishek_Patel_Resume.pdf"
                    className="flex items-center gap-2"
                  >
                    <span>Download My Resume</span>
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Image Section - Card */}
        <motion.div
          className="relative w-full md:w-1/3 h-96 md:h-auto mb-8 md:mb-0" // Added bottom margin for small screens
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Card className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/profile.jpg" // Ensure this path is correct in your project
              alt="About Me"
              className="object-cover w-full h-full md:h-auto"
            />
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
