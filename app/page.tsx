"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
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
   Hero Section
   ═══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="section-hero py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.span
              variants={fadeInUp}
              className="label-text inline-block mb-4"
            >
              What We Do
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance"
            >
              Experienced electrical professionals
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-medium leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--color-slate-medium)" }}
            >
              Since 2000 Saab Electric has been serving customers in the GTA,
              providing electrical contracting services to residential communities,
              commercial businesses and industrial buildings. We strive to provide
              quality work and service and stand by our core values of respect,
              commitment, quality, improvement, efficiency and integrity.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="image-collage">
              <motion.div
                className="collage-image collage-image-1"
                variants={imageReveal}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src="/images/projects/bayview-residence.jpg"
                  alt="Residential electrical project"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                className="collage-image collage-image-2"
                variants={imageReveal}
                transition={{ delay: 0.4 }}
              >
                <Image
                  src="/images/projects/hvac-disconnects.jpg"
                  alt="Commercial electrical installation"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Services Section
   ═══════════════════════════════════════════════════════════════════════════ */
const services = [
  {
    title: "Residential",
    image: "/images/residential.jpg",
    description:
      "Residential services range from general wiring, service upgrades, emergencies, renovations and a variety of additional services.",
    href: "/services/residential",
  },
  {
    title: "Commercial",
    image: "/images/commercial.jpg",
    description:
      "A variety of commercial electrical construction services including new builds, renovations, building maintenance, fire alarm systems and stand by power.",
    href: "/services/commercial",
  },
  {
    title: "Industrial",
    image: "/images/industrial.jpg",
    description:
      "We offer a host of services in the industrial sector to ensure safe electrical installations and operation of machinery.",
    href: "/services/industrial",
  },
];

function ServicesSection() {
  return (
    <section className="section-services py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="label-text inline-block mb-4"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            Electrical Services
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-slate-medium)" }}
          >
            Saab Electric provides electrical services for industrial, residential,
            and commercial projects. Take a look at some of our completed projects:
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              className="service-card"
            >
              <div className="service-card-image">
                <Image
                  src={service.image}
                  alt={`${service.title} electrical services`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <a href={service.href} className="service-card-link">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
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
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="label-text inline-block mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl mb-8"
            >
              Contact Us
            </motion.h2>

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
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
