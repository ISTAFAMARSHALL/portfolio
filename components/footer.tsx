"use client";

import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Branding */}
      <div>
        <a href='..' className={styles.logo}>Code By Istafa</a>
      </div>

      {/* Social Links
      <ul className={styles.socialIcons}>
        <li>
          <a
            className={styles.icon}
            href="https://x.com/Istafa613242021"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.svgIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
            >
              <path d="M16 14h-4.938L7.197 9.108 2.771 14H.316l5.736-6.342L0 0h5.063l3.496 4.476L12.601 0h2.454L9.697 5.932 16 14Zm-4.26-1.422h1.36L4.323 1.347H2.865l8.875 11.231Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={styles.icon}
            href="https://github.com/ISTAFAMARSHALL"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.svgIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={styles.icon}
            href="https://medium.com/@istafa.a.marshall"
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.svgIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
            >
              <path d="M5.077 0c2.803 0 5.076 2.418 5.076 5.4s-2.273 5.4-5.076 5.4C2.273 10.8 0 8.382 0 5.4S2.273 0 5.077 0Zm8.106.316c1.402 0 2.538 2.276 2.538 5.084 0 2.807-1.136 5.084-2.538 5.084S10.645 8.207 10.645 5.4c0-2.807 1.136-5.084 2.538-5.084ZM18 5.4c0-2.515-.4-4.554-.893-4.554-.492 0-.892 2.04-.892 4.554 0 2.515.4 4.555.892 4.555.494 0 .893-2.04.893-4.555Z" />
            </svg>
          </a>
        </li>
      </ul> */}

      {/* Copyright */}
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Istafa Anthony Marshall. All rights reserved.
      </p>
    </footer>
  );
}