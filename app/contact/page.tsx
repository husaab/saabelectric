"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Animation Variants
   ═══════════════════════════════════════════════════════════════════════════ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   Navigation Types & Data
   ═══════════════════════════════════════════════════════════════════════════ */
interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Commercial", href: "/services/commercial" },
      { label: "Residential", href: "/services/residential" },
      { label: "Industrial", href: "/services/industrial" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Our Values", href: "/values" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <header className="navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.png"
              alt="Saab Electric"
              width={44}
              height={44}
              className="w-11 h-11"
            />
            <span className="logo-text">Saab Electric</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="nav-dropdown-container">
                  <button className="nav-dropdown-trigger">
                    {link.label}
                    <ChevronDown className="nav-dropdown-chevron" />
                  </button>
                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-dropdown-item"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href!} className="nav-link">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="mobile-submenu-trigger"
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`mobile-submenu-chevron ${
                          servicesExpanded ? "expanded" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          className="mobile-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="mobile-submenu-item"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="nav-link text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Contact Section
   ═══════════════════════════════════════════════════════════════════════════ */
function ContactSection() {
  return (
    <section className="section-contact py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="label-text inline-block mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl mb-8"
            >
              Contact Us
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Address</span>
                  <span className="contact-info-value">
                    421 Nugget Ave<br />
                    North York, ON
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">
                    <a href="tel:+14165551234">(416) 555-1234</a>
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">
                    <a href="mailto:info@saabelectric.ca">info@saabelectric.ca</a>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            className="map-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d-79.3!3d43.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzQ4LjAiTiA3OcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sca!4v1600000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saab Electric Location - 421 Nugget Ave, North York"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="footer-grid">
          {/* Column 1: Logo & Tagline */}
          <div>
            <h3 className="footer-logo">Saab Electric</h3>
            <p className="footer-tagline">
              Professional electrical services for residential, commercial,
              and industrial projects across the GTA since 2000.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <nav className="footer-links">
              <Link href="/services/commercial" className="footer-link">Commercial</Link>
              <Link href="/services/residential" className="footer-link">Residential</Link>
              <Link href="/services/industrial" className="footer-link">Industrial</Link>
              <Link href="/projects" className="footer-link">Projects</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              421 Nugget Ave<br />
              North York, ON
            </div>
            <div className="footer-contact-item">
              <a href="tel:+14165551234">(416) 555-1234</a>
            </div>
            <div className="footer-contact-item">
              <a href="mailto:info@saabelectric.ca">info@saabelectric.ca</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Saab Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
