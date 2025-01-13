"use client";

import React from "react";
import styles from "./page.module.css";

import moreThanJustaLunchappImg from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 1.png'

import smartBuyImg from '@/public/images/projects/smart-buy/SmartBuy Screenshot .jpeg'

import stimsimg from '@/public/images/projects/stims/S.T.I.M.S Screenshot .jpeg'
import Image from "next/image";

const projects = [
  {
    slug: "more-than-just-a-lunch",
    title: "More Than Just a Lunch App",
    description:
      "A dynamic and responsive web app allowing users to register for events, read testimonials, and learn about the organization's mission.",
    technologies: ["Next.js", "React", "MailJet API"],
    image: moreThanJustaLunchappImg,
  },
  {
    slug: "smart-buy",
    title: "Smart Buy",
    description:
      "An innovative e-commerce platform inspired by Best Buy, designed to deliver an exceptional online shopping experience.",
    technologies: ["React", "Ruby on Rails"],
    image: smartBuyImg,
  },
  {
    slug: "stims",
    title: "S.T.I.M.S",
    description:
      "An advanced educational management tool optimized for seamless teacher-student interaction and academic tracking.",
    technologies: ["React", "Ruby on Rails"],
    image: stimsimg,
  },
];

export default function PortfolioPage() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.techList}>
              {project.technologies.map((tech, idx) => (
                <li key={idx} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <a href={`/portfolio/${project.slug}`} className={styles.projectLink}>
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}