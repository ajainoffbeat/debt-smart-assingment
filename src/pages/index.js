import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import { TAB_DATA } from "../constants/tabData"
import HeroSection from "../components/home/heroSection"

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  return (
    <Layout>
      <SEO title="Best Debt Settlement Companies | Simply Debt Smart" />
      <HeroSection />
      <div className="nav-tabs">
        <span
          className={`tab-item ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <StaticImage
            src="../images/icons/todoList.svg"
            alt="overview"
            placeholder="overview"
            width={30}
            height={30}
          />
          Overview
        </span>
        <span
          className={`tab-item ${activeTab === "debt-help" ? "active" : ""}`}
          onClick={() => setActiveTab("debt-help")}
        >
          <StaticImage
            src="../images/icons/handshake.svg"
            alt="Debt Help"
            placeholder="Debt Help"
            width={30}
            height={30}
          />
          Get Debt Help
        </span>
        <span
          className={`tab-item ${
            activeTab === "debt-consolidation" ? "active" : ""
          }`}
          onClick={() => setActiveTab("debt-consolidation")}
        >
          <StaticImage
            src="../images/icons/filter.svg"
            alt="Debt Consolidation"
            placeholder="Debt Consolidation"
            width={30}
            height={30}
          />
          Debt Consolidation
        </span>
        <span
          className={`tab-item ${
            activeTab === "debt-settlement" ? "active" : ""
          }`}
          onClick={() => setActiveTab("debt-settlement")}
        >
          <StaticImage
            src="../images/icons/debt.svg"
            alt="Debt Settlement"
            placeholder="Debt Settlement"
            width={30}
            height={30}
          />
          Debt Settlement
        </span>
      </div>

      <div className="main-content">
        <h2>{TAB_DATA[activeTab]}</h2>

        <div className="rankings-list">
          <div className="ranking-item">
            <span className="rank">1.</span> Overall choice partner:{" "}
            <Link to="#" className="partner-link">
              National Debt Relief
            </Link>
          </div>
          <div className="ranking-item">
            <span className="rank">2.</span> Lowest fees for services partner:{" "}
            <Link to="#" className="partner-link">
              Freedom Debt Relief
            </Link>
          </div>
          <div className="ranking-item">
            <span className="rank">3.</span> Best for small debt amounts
            partner:{" "}
            <Link to="#" className="partner-link">
              United Debt Settlement
            </Link>
          </div>
          <div className="ranking-item">
            <span className="rank">4.</span> Best customer service partner:{" "}
            <Link to="#" className="partner-link">
              Accredited Debt Relief
            </Link>
          </div>
        </div>
      </div>
      <div className="compare-table">
        <StaticImage
          src="../images/compare-table.png"
          alt="Compare Table"
          placeholder="Compare Table"
        />
      </div>
    </Layout>
  )
}

export default HomePage
