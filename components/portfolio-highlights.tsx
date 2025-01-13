import styles from "./portfolio-highlights.module.css";
import Image from "next/image";
import Link from "next/link";

import smartBuyImg from "@/public/images/projects/smart-buy/SmartBuy Screenshot .jpeg";
import stimsImg from "@/public/images/projects/stims/S.T.I.M.S Screenshot .jpeg";
import moreThanJustaLunchImg from "@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 1.png";


export default function PortfolioHighlights() {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Portfolio Highlights</h2>
                <div className={styles.grid}>
                    {/* Project 1 */}
                    <div className={styles.projectCard}>
                        <Image
                            className={styles.projectImage}
                            src={moreThanJustaLunchImg}
                            width={300}
                            height={200}
                            alt="More Than Just a Lunch App"
                            priority
                        />
                        <h3 className={styles.projectTitle}>More Than Just a Lunch</h3>
                        <p className={styles.projectDescription}>
                            A responsive website designed to launch a weekly luncheon initiative.
                        </p>
                        <div className={styles.projectLinks}>
                            <Link
                                href="/portfolio/more-than-just-a-lunch-app"
                                className={styles.projectLink}
                            >
                                Live Demo
                            </Link>
                            <a
                                href="https://github.com/your-repo/more-than-just-a-lunch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                Code Repository
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className={styles.projectCard}>
                        <Image
                            className={styles.projectImage}
                            src={smartBuyImg}
                            width={300}
                            height={200}
                            alt="Smart Buy"
                            priority
                        />
                        <h3 className={styles.projectTitle}>Smart Buy</h3>
                        <p className={styles.projectDescription}>
                            A modern e-commerce platform with intuitive navigation and sleek design.
                        </p>
                        <div className={styles.projectLinks}>
                            <Link href="/portfolio/smart-buy" className={styles.projectLink}>
                                Live Demo
                            </Link>
                            <a
                                href="https://github.com/your-repo/smart-buy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                Code Repository
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className={styles.projectCard}>
                        <Image
                            className={styles.projectImage}
                            src={stimsImg}
                            width={300}
                            height={200}
                            alt="S.T.I.M.S"
                            priority
                        />
                        <h3 className={styles.projectTitle}>S.T.I.M.S</h3>
                        <p className={styles.projectDescription}>
                            A streamlined task and inventory management system.
                        </p>
                        <div className={styles.projectLinks}>
                            <Link href="/portfolio/stims" className={styles.projectLink}>
                                Live Demo
                            </Link>
                            <a
                                href="https://github.com/your-repo/stims"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                Code Repository
                            </a>
                        </div>
                    </div>
                </div>
                <Link href="/portfolio" className={styles.viewAllButton}>
                    View All Projects
                </Link>
                
            </div>
        </section>
    );
}