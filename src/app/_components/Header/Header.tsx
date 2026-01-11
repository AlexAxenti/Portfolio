"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Me" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/AALight.png"
            alt="Portfolio Logo"
            width={60}
            height={60}
            className={styles.logoImageLight}
            style={{ objectFit: "contain" }}
            priority
            unoptimized
          />
          <Image
            src="/AADark.png"
            alt="Portfolio Logo"
            width={60}
            height={60}
            className={styles.logoImageDark}
            style={{ objectFit: "contain" }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
