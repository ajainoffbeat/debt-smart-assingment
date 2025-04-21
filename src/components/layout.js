// File: src/components/layout.js
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  return (
    <>
      <header className="site-header">
        <Link to="/">
          <StaticImage
            src="../images/simply-debt-smart-logo.png"
            alt="Simply Debt Smart Logo"
            className="logo"
            width={180}
          />
        </Link>
      </header>
      <div className="disclaimer-banner">
        We are not a government agency and may be paid by companies displayed.
      </div>
      <div className="logo">
        <StaticImage
          src="../images/Logo.jpg"
          alt="Couple enjoying freedom after debt relief"
          placeholder="blurred"
          className="hero-image"
        />
      </div>
      <main>{children}</main>
      {/* <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <StaticImage
              src="../images/simply-debt-smart-logo.png"
              alt="Simply Debt Smart Logo"
              width={140}
            />
            <p>Helping you find the best debt solutions</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/careers">Careers</Link>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <Link to="/blog">Blog</Link>
              <Link to="/debt-calculator">Debt Calculator</Link>
              <Link to="/faqs">FAQs</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Simply Debt Smart. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  )
}

export default Layout
