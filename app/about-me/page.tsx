import React from "react";
import profileIMG from "@/public/images/profile/C65EE828-4A30-462F-97EB-20BD146599E1_4_5005_c.jpeg";
import styles from "./page.module.css";
import Image from "next/image";

export default function AboutMe() {
  const timelineEvents = [
    {
      date: "2005 - 2015",
      title: "Cryptologic Technician | US Navy",
      description:
        "Specialized in anti-missile defense systems and technical analysis, bringing precision and discipline to every task.",
    },
    {
      date: "2015 - 2022",
      title: "Customer Service Manager | Global Enterprises",
      description:
        "Led a team of 20, achieving a consistent 40% profit margin while improving customer satisfaction.",
    },
    {
      date: "2021 - 2022",
      title: "Software Engineering Student | Flatiron School",
      description:
        "Mastered full-stack development with technologies like JavaScript, React, and Ruby on Rails.",
    },
    {
      date: "2022 - Present",
      title: "Software Developer | Code By Istafa",
      description:
        "Freelance developer building responsive web applications with a focus on user experience and performance.",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Ruby on Rails",
    "CSS & HTML",
    "API Integration (e.g., MailJet)",
    "Git/GitHub",
  ];

  const certifications = [
    "Cisco Certified Network Associate (CCNA)",
    "Flatiron School Software Engineering Certificate",
  ];

  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.content}>
        {/* Profile Section */}
        <Image
          src={profileIMG}
          alt="Istafa A Marshall"
          width={500}
          height={650}
          className={styles.profileImage}
        />
        <div className={styles.text}>
          <p>
            From a young age, I was captivated by technology. Whether it was
            setting up my grandfather&apos;s new gadgets or fixing electronic
            devices, I was always the go-to tech enthusiast.
          </p>
          <p>
            My journey began with programming in high school and later as a
            Cryptologic Technician in the Navy. Today, as a software developer,
            I blend my technical expertise and customer-focused approach to
            create impactful applications.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className={styles.timelineSection}>
        <h2 className={styles.subheading}>Career Timeline</h2>
        <div className={styles.timeline}>
          {timelineEvents.map((event, index) => (
            <div key={index} className={styles.timelineEvent}>
              <div className={styles.timelineDate}>{event.date}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{event.title}</h3>
                <p className={styles.timelineDescription}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills and Certifications Section */}
      <div className={styles.skillsCertificationsSection}>
        <h2 className={styles.subheading}>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
        <h2 className={styles.subheading}>Certifications</h2>
        <ul className={styles.certificationsList}>
          {certifications.map((certification, index) => (
            <li key={index} className={styles.certificationItem}>
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}