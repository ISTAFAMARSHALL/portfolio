import React from "react";
import styles from "./page.module.css";
import ImageSlideShow from "@/components/image-slide-show";

const projects = {
  "more-than-just-a-lunch": {
    title: "More Than Just a Lunch App",
    description:
      "A dynamic and responsive web app allowing users to register for events, read testimonials, and learn about the organization's mission.",
    technologies: ["Next.js", "React", "MailJet API"],
    features: [
      "Event registration and management",
      "Dynamic and user-friendly interface",
      "Email integration with MailJet API",
    ],
    image: "/images/more-than-just-a-lunch.png",
  },
  "smart-buy": {
    title: "Smart Buy",
    description:
      "An innovative e-commerce platform inspired by Best Buy, designed to deliver an exceptional online shopping experience.",
    technologies: ["React", "Ruby on Rails"],
    features: [
      "User account and order management",
      "Extensive product catalog",
      "Secure and scalable architecture",
    ],
    image: "/images/smart-buy.png",
  },
  "stims": {
    title: "S.T.I.M.S",
    description:
      "An advanced educational management tool optimized for seamless teacher-student interaction and academic tracking.",
    technologies: ["React", "Ruby on Rails"],
    features: [
      "Class scheduling and progress tracking",
      "User-specific interfaces for teachers and students",
      "Efficient academic data management",
    ],
    image: "/images/stims.png",
  },
};

export default function ProjectSlugPage({ params }) {
  const project = projects[params?.slug];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.projectSection}>
      <h2 className={styles.title}>{project.title}</h2>
      <ImageSlideShow slug={params?.slug} />
      <p className={styles.description}>{project.description}</p>
      <h3 className={styles.subheading}>Technologies Used:</h3>
      <ul className={styles.techList}>
        {project.technologies.map((tech, idx) => (
          <li key={idx} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
      <h3 className={styles.subheading}>Key Features:</h3>
      <ul className={styles.featureList}>
        {project.features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";
// import ImageSlideShow from "@/components/image-slide-show";

// const projects = {
//   "more-than-just-a-lunch": {
//     title: "More Than Just a Lunch App",
//     description:
//       "A dynamic and responsive web app allowing users to register for events, read testimonials, and learn about the organization's mission.",
//     technologies: ["Next.js", "React", "MailJet API"],
//     features: [
//       "Event registration and management",
//       "Dynamic and user-friendly interface",
//       "Email integration with MailJet API",
//     ],
//     image: "/images/more-than-just-a-lunch.png",
//   },
//   "smart-buy": {
//     title: "Smart Buy",
//     description:
//       "An innovative e-commerce platform inspired by Best Buy, designed to deliver an exceptional online shopping experience.",
//     technologies: ["React", "Ruby on Rails"],
//     features: [
//       "User account and order management",
//       "Extensive product catalog",
//       "Secure and scalable architecture",
//     ],
//     image: "/images/smart-buy.png",
//   },
//   "stims": {
//     title: "S.T.I.M.S",
//     description:
//       "An advanced educational management tool optimized for seamless teacher-student interaction and academic tracking.",
//     technologies: ["React", "Ruby on Rails"],
//     features: [
//       "Class scheduling and progress tracking",
//       "User-specific interfaces for teachers and students",
//       "Efficient academic data management",
//     ],
//     image: "/images/stims.png",
//   },
// };

// export default function ProjectSlugPage({ params }) {
//   const [slug, setSlug] = useState(null);
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     async function fetchParams() {
//       const resolvedParams = await params;
//       setSlug(resolvedParams.slug);
//     }
//     fetchParams();
//   }, [params]);

//   useEffect(() => {
//     if (slug) {
//       setProject(projects[slug]);
//     }
//   }, [slug]);

//   if (!project) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <section className={styles.projectSection}>
//       <h2 className={styles.title}>{project.title}</h2>
//       <ImageSlideShow slug={slug} fill style={{ width: "auto", height: "auto" }} />
//       <p className={styles.description}>{project.description}</p>
//       <h3 className={styles.subheading}>Technologies Used:</h3>
//       <ul className={styles.techList}>
//         {project.technologies.map((tech, idx) => (
//           <li key={idx} className={styles.techItem}>
//             {tech}
//           </li>
//         ))}
//       </ul>
//       <h3 className={styles.subheading}>Key Features:</h3>
//       <ul className={styles.featureList}>
//         {project.features.map((feature, idx) => (
//           <li key={idx} className={styles.featureItem}>
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }