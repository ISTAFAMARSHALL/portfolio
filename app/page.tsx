import styles from "./page.module.css";
import HeroSection from "@/components/hero-section";
import AboutMeSection from "@/components/about-me-section";
import PortfolioHighlights from "@/components/portfolio-highlights";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <HeroSection/>
        <AboutMeSection/>
        <PortfolioHighlights/>
        <SkillsSection/>
        <ContactSection/>
       
      </main>
    
    </div>
  );
}
