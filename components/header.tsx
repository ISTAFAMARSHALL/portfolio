"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname(); // Use Next.js usePathname hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About Me" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className={styles.header} id="head">
      <div className={styles.headerInner}>
        {/* Branding Section */}
        <a href=".." className={styles.brand}>
          Code By Istafa
        </a>
        <span className={styles.brandTagline}>
          Creating meaningful apps through innovation
        </span>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
        >
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.navLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}