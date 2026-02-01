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
   Values Hero Section
   ═══════════════════════════════════════════════════════════════════════════ */
function ValuesHero() {
  return (
    <section className="values-hero">
      <Image
        src="/images/values-hero.jpg"
        alt="Handshake representing our values"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <motion.div
        className="values-hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="values-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Values
        </motion.h1>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Mission Statement Section
   ═══════════════════════════════════════════════════════════════════════════ */
function MissionStatement() {
  return (
    <section className="mission-section">
      <motion.div
        className="mission-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="mission-heading"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Mission Statement
        </motion.h2>

        <motion.p
          className="mission-text"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our mission is to provide excellent professional electrical contracting services to our customers in the residential, commercial and industrial sectors. These services include installations, maintenance and repairs. We strive to meet and exceed customer expectations. Safety and efficiency are achieved through rigorous training and continuous improvement in whatever we do.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Core Values Section
   ═══════════════════════════════════════════════════════════════════════════ */
const coreValues = [
  {
    title: "Respect",
    description: "We respect our customers and value their loyalty and trust. We believe respect must be earned. We strive to earn and keep the respect of our customers, vendors and the people we interact with. We have the expectation of our team members to respect each others and those they interact with.",
  },
  {
    title: "Commitment",
    description: "We are committed to delivering quality work in a timely manner to our customers and clients.",
  },
  {
    title: "Quality",
    description: "Providing quality services is a top priority at Saab Electric. Our work is a reflection of our efforts to provide quality work to our customers.",
  },
  {
    title: "Improvement",
    description: "We continuously strive to improve our service, products and processes. We ensure our team members are trained and up to date with industry standards.",
  },
  {
    title: "Efficiency",
    description: "We do our utmost to live up to our client expectations. We have implemented processes to ensure efficiency at all levels, from project planning, coordination to onsite work. Open lines of communication with contractors, engineers, architects and customers ensures completed work in a timely manner.",
  },
  {
    title: "Integrity",
    description: "We are consistent in our values and actions. The satisfaction of our customers is a testament of that.",
  },
];

function CoreValues() {
  return (
    <section className="values-section">
      <motion.div
        className="values-intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="values-intro-heading"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <motion.p
          className="values-intro-text"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          At Saab Electric, we believe in providing a great experience for our customers and our core values define who we are, our accountability and what we aspire to.
        </motion.p>
      </motion.div>

      <motion.div
        className="values-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {coreValues.map((value) => (
          <motion.div
            key={value.title}
            className="value-card"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </motion.div>
        ))}
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
export default function ValuesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ValuesHero />
        <MissionStatement />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}
