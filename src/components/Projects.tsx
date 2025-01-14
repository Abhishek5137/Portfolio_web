
// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import SectionHeading from "./SectionHeading";

// const projects = [
//   {
//     title: "Blogging Website",
//     description:
//       "Integrated user authentication, data storage, and real-time collaboration features with Appwrite. Implemented CRUD functionality and styled UI with Tailwind CSS, improving backend functionality and user experience by 20%. Leveraged React Router for seamless navigation.",
//     technologies: ["React.js", "Appwrite", "Tailwind CSS"],
//     link: "https://bloging-website-two.vercel.app/",
//     image: "/images/blogging-website.png",
//   },
//   {
//     title: "Gemini Clone",
//     description:
//       "Efficiently displayed Gemini text, ensuring 98% text fidelity. Accurately parsed and rendered inline links, improving navigability by 90%. Applied advanced rendering techniques, reducing load times by 60%.",
//     technologies: ["React.js", "Advanced Rendering Techniques"],
//     link: "https://gemini-clone-pi-umber.vercel.app/",
//     image: "/images/gemini-clone.png",
//   },
//   {
//     title: "Virtual Time Capsule",
//     description:
//       "Built a platform for curating and storing memories, photos, videos, and messages. Architected an intuitive UI for creating and customizing virtual time capsules. Improved design efficiency by 15% using React and Tailwind CSS.",
//     technologies: ["React.js", "Tailwind CSS"],
//     link: "https://virtuel-time-capsule.vercel.app/",
//     image: "/images/virtual-time-capsule.png",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="container py-24 space-y-8">
//       <SectionHeading title="Projects" subtitle="A showcase of my work" />
//       <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="overflow-hidden rounded-lg shadow-lg bg-card   hover:shadow-orange-600"
//             // whileHover={{ scale: 1.03 }}
//             // whileTap={{ scale: 0.97 }}
//             // transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Card className="h-full">
//               <CardHeader>
//                 <div className="relative h-48 w-full">
//                   {/* Applying motion only to the image */}
//                   <motion.img
//                     src={project.image}
//                     alt={`${project.title} Image`}
//                     className="object-cover h-full w-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     whileHover={{ scale: 1.1 }}  // Optional hover effect on image
//                   />
//                 </div>
//               </CardHeader>
//               <CardContent className="p-6 space-y-4">
//                 <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//                   {project.title}
//                 </CardTitle>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>
//                 <p className="text-sm">Technologies: {project.technologies.join(", ")}</p>
//                 {project.link && (
//                   <Button variant="outline" className="text-primary dark:text-primary hover:bg-primary/10">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary"
//                     onClick={(e) => {
//                       // Prevent the card from shaking on click
//                       e.preventDefault();
//                       window.open(project.link, "_blank");
//                     }}
//                   >
//                     View Project
//                   </a>
//                   </Button>
//                 )}
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Blogging Website",
    description: [
      "Integrated user authentication, data storage, and real-time collaboration features with Appwrite.",
      "Implemented CRUD functionality and styled UI with Tailwind CSS, improving backend functionality and user experience by 20%.",
      "Leveraged React Router for seamless navigation."
    ],
    technologies: ["React.js", "Appwrite", "Tailwind CSS"],
    link: "https://bloging-website-two.vercel.app/",
    image: "/images/blogging-website.png",
  },
  {
    title: "Gemini Clone",
    description: [
      "Efficiently displayed Gemini text, ensuring 98% text fidelity.",
      "Accurately parsed and rendered inline links, improving navigability by 90%.",
      "Applied advanced rendering techniques, reducing load times by 60%."
    ],
    technologies: ["React.js", "Advanced Rendering Techniques"],
    link: "https://gemini-clone-pi-umber.vercel.app/",
    image: "/images/gemini-clone.png",
  },
  {
    title: "Virtual Time Capsule",
    description: [
      "Built a platform for curating and storing memories, photos, videos, and messages.",
      "Architected an intuitive UI for creating and customizing virtual time capsules.",
      "Improved design efficiency by 15% using React and Tailwind CSS."
    ],
    technologies: ["React.js", "Tailwind CSS"],
    link: "https://virtuel-time-capsule.vercel.app/",
    image: "/images/virtual-time-capsule.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24 space-y-8">
      <SectionHeading title="Projects" subtitle="A showcase of my work" />
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg bg-card hover:shadow-orange-600"
          >
            <Card className="h-full">
              <CardHeader>
                <div className="relative h-48 w-full">
                  {/* Applying motion only to the image */}
                  <motion.img
                    src={project.image}
                    alt={`${project.title} Image`}
                    className="object-cover h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}  // Optional hover effect on image
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </CardTitle>
                <ul className="text-muted-foreground leading-relaxed">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="list-disc pl-5">{desc}</li>
                  ))}
                </ul>
                <p className="text-sm">Technologies: {project.technologies.join(", ")}</p>
                {project.link && (
                  <Button variant="outline" className="text-primary dark:text-primary hover:bg-primary/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      onClick={(e) => {
                        // Prevent the card from shaking on click
                        e.preventDefault();
                        window.open(project.link, "_blank");
                      }}
                    >
                      View Project
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
