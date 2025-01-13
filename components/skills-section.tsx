import styles from "./skills-section.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSqlite, SiPostgresql } from "react-icons/si";

export default function SkillsSection() {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, proficiency: 100 },
        { name: "CSS3", icon: <FaCss3Alt />, proficiency: 85 },
        { name: "JavaScript", icon: <FaJsSquare />, proficiency: 100 },
        { name: "React", icon: <FaReact />, proficiency: 100 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 100 },
        { name: "SQLite", icon: <SiSqlite />, proficiency: 80 },
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 80 },
    ];

    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.icon}>{skill.icon}</div>
                            <h3 className={styles.skillName}>{skill.name}</h3>
                            <div className={styles.proficiencyBar}>
                                <div
                                    className={styles.proficiency}
                                    style={{ width: `${skill.proficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}