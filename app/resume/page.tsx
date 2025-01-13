import { FiDownload } from 'react-icons/fi';
import Image from "next/image";
import resume2 from "@/public/resumes/New_Resume_Sept 2024.png";
import styles from "./resume.module.css";

export default function ResumePage() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Ruby on Rails",
    "CSS & HTML",
    "API Integration",
    "SQLite/PostgreSQL",
  ];

  return (
    <section className={styles.resumeSection}>
      {/* Header with Download Button */}
      <div className={styles.headerWrapper}>
        <h1 className={styles.heading}>My Resume</h1>
        <a
          href="/resumes/New_Resume_Sept 2024.pdf"
          download="Istafa_A_Marshall_Resume.pdf"
          className={styles.downloadButton}
          aria-label="Download My Resume"
        >
          <FiDownload className={styles.downloadIcon} />
        </a>
      </div>

      {/* Image-Based Resume */}
      <div className={styles.resumeImageWrapper}>
        <Image
          src={resume2}
          alt="Istafa A Marshall's Resume"
          priority
          className={styles.resumeImage}
          layout="intrinsic"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Skills Section */}
      <div className={styles.details}>
        <h2 className={styles.subheading}>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}