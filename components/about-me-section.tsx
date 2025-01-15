import styles from "./about-me-section.module.css";

export default function AboutMeSection() {
    return (
        <section className={styles.aboutMeSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>About Me</h2>
                <p className={styles.bio}>
                    From the high-stakes world of Navy missile defense to the dynamic arenas of sales and support leadership, my career is a testament to adaptability and resilience. Leveraging over 15 years of customer service expertise and a love for technology, I excel at crafting compelling user interfaces.
                </p>
                <p className={styles.bio}>
                    My passion lies in creating visually stunning, user-friendly applications using front-end technologies like React and Next.js. With a customer-centric approach, I aim to deliver intuitive and engaging experiences that meet and exceed client expectations.
                </p>
                <p className={styles.highlight}>
                    Recent accomplishment: Successfully built website to launch a client&apos;s weekly luncheon initiative, <a href="https://nww-website-lunch-3.vercel.app" className={styles.siteLink} target="_blank" rel="noopener noreferrer">More Than Just a Lunch</a>
                </p>
                <a href="/about-me" className={styles.link}>
                    Learn more about me
                </a>
            </div>
        </section>
    );
}