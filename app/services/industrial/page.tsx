"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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

/* ═══════════════════════════════════════════════════════════════════════════
   Navbar with Dropdown
   ═══════════════════════════════════════════════════════════════════════════ */
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
   Industrial Hero Section
   ═══════════════════════════════════════════════════════════════════════════ */
function IndustrialHero() {
  return (
    <section className="service-hero">
      <Image
        src="/images/industrial.jpg"
        alt="Industrial electrical services"
        fill
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover" }}
        priority
      />
      <motion.div
        className="service-hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="service-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Industrial Services
        </motion.h1>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Industrial Intro Section
   ═══════════════════════════════════════════════════════════════════════════ */
function IndustrialIntro() {
  return (
    <section className="service-intro">
      <motion.div
        className="service-intro-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.p
          className="service-intro-text"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our Operations and Service team work to ensure your industrial
          construction project needs are met. We offer a host of services in
          the industrial sector to ensure safe electrical installations and
          operation of machinery.
        </motion.p>

        <motion.p
          className="service-intro-text"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Saab Electric offers industrial contracting services from setting up
          new facilities, new electrical installations or powering up machinery.
          Saab Electric has the team and resources for all your industrial
          electrical needs including:
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Industrial Services List
   ═══════════════════════════════════════════════════════════════════════════ */
function IndustrialServices() {
  const services = [
    "Electrical rooms",
    "Transformers",
    "Splitters",
    "Disconnects",
    "Load centres",
    "Connecting & powering machinery, motors, pumps and compressors",
  ];

  return (
    <section className="service-areas">
      <motion.div
        className="service-areas-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div className="service-area-card" variants={fadeInUp}>
          <h3 className="service-area-title">Our Industrial Services</h3>
          <ul className="service-area-list industrial-services-list">
            {services.map((service, index) => (
              <li key={index} className="service-area-list-item">
                {service}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
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
              Professional electrical services for residential, commercial, and
              industrial projects across the GTA since 2000.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <nav className="footer-links">
              <Link href="/services/commercial" className="footer-link">
                Commercial
              </Link>
              <Link href="/services/residential" className="footer-link">
                Residential
              </Link>
              <Link href="/services/industrial" className="footer-link">
                Industrial
              </Link>
              <Link href="/projects" className="footer-link">
                Projects
              </Link>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              421 Nugget Ave
              <br />
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
export default function IndustrialServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustrialHero />
        <IndustrialIntro />
        <IndustrialServices />
      </main>
      <Footer />
    </>
  );
}
