import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="content-wrapper">
          <div className="hero-left">
            <div className="breadcrumbs">
              <StaticImage
                src="../images/icons/home.svg"
                alt="home-icon"
                placeholder="home"
              />
              <Link to="/">Finance</Link>
              {">"}
              <Link to="/">Debt Management</Link>
            </div>
            <h1>Best Debt Settlement Companies</h1>
            <p>We compared 25 brands and chose the top debt relief companies</p>
            <button className="cta-button">Find my match</button>
          </div>
          <div className="hero-right">
            <StaticImage
              src="../../images/hero.png"
              alt="Couple enjoying freedom after debt relief"
              placeholder="blurred"
              className="hero-image left"
            />
            <StaticImage
              src="../../images/Top Choice.png"
              alt="Couple enjoying freedom after debt relief"
              placeholder="blurred"
              className="hero-image right"
            />
          </div>
        </div>
      </div>
  )
}

export default HeroSection
