import styles from "./hero-section.module.css";

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heading}>
                    Hi, I’m [Your Name], a Front-End Developer.
                </h1>
                <p className={styles.subheading}>
                    Crafting beautiful, responsive websites with modern web technologies.
                </p>
            </div>
            <div className={styles.ctaContainer}>
                <a href="#portfolio" className={styles.ctaButton}>
                    View My Portfolio
                </a>
                <a href="/resume.pdf" download className={styles.ctaButton}>
                    Download My Resume
                </a>
            </div>
            <p className={styles.scrollText}>Scroll down to see my work</p>
        </section>
    );
}