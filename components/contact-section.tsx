import styles from "./contact-section.module.css";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function ContactSection() {

    const socialLinks = [
        {
          name: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/yourprofile",
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/yourprofile",
        },
        {
          name: "X",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M23.093 1.51a.812.812 0 0 0-1.247.17l-9.233 12.35-9.235-12.35a.812.812 0 0 0-1.247-.17L.372 2.954a.813.813 0 0 0-.17 1.247L10.18 13.5.2 22.8a.812.812 0 0 0 .17 1.247l1.759 1.444a.812.812 0 0 0 1.247-.17l9.234-12.35 9.234 12.35a.812.812 0 0 0 1.247.17l1.759-1.444a.812.812 0 0 0 .17-1.247L13.82 13.5l9.978-9.3a.812.812 0 0 0-.17-1.247L23.093 1.51z"></path>
            </svg>
          ),
          url: "https://twitter.com/yourprofile",
        },
        {
          name: "Medium",
          icon: <FaMedium />,
          url: "https://medium.com/@yourprofile",
        },
    ];
    // const socialLinks = [
    //     {
    //         name: "LinkedIn",
    //         icon: <FaLinkedin />,
    //         url: "https://linkedin.com/in/yourprofile",
    //     },
    //     {
    //         name: "GitHub",
    //         icon: <FaGithub />,
    //         url: "https://github.com/yourprofile",
    //     },
    //     // {
    //     //     name: "Twitter",
    //     //     icon: <FaTwitter />,
    //     //     url: "https://twitter.com/yourprofile",
    //     // },
    //     {
    //         name: "Medium",
    //         icon: <FaMedium />,
    //         url: "https://medium.com/@yourprofile",
    //     },
    //     {
    //         name: "X",
    //         icon: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="24"
    //             height="24"
    //             fill="currentColor"
    //           >
    //             <path d="M23.093 1.51a.812.812 0 0 0-1.247.17l-9.233 12.35-9.235-12.35a.812.812 0 0 0-1.247-.17L.372 2.954a.813.813 0 0 0-.17 1.247L10.18 13.5.2 22.8a.812.812 0 0 0 .17 1.247l1.759 1.444a.812.812 0 0 0 1.247-.17l9.234-12.35 9.234 12.35a.812.812 0 0 0 1.247.17l1.759-1.444a.812.812 0 0 0 .17-1.247L13.82 13.5l9.978-9.3a.812.812 0 0 0-.17-1.247L23.093 1.51z"></path>
    //           </svg>
    //         ),
    //         url: "https://twitter.com/yourprofile",
    //       }
    // ];

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <h2 className={styles.heading}>Get In Touch</h2>
                <p className={styles.emailCTA}>
                    Or email me directly at{" "}
                    <a href="mailto:YourEmail@example.com">YourEmail@example.com</a>
                </p>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>
                <div className={styles.socialLinks}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}