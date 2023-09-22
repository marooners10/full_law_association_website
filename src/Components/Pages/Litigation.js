import React from "react";
import Navbar from "../Navbar";
import JoinSlider from "../JoinSlider.js/JoinSlider";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import "../Pages/litigation.css";

const Litigation = () => {
  return (
    <div>
      <Navbar />
      <div className="join-container">
        <div className="join-sidebar">
          <div className="practice-area">
            <h2>PRACTICE AREA</h2>
            <hr />
            <ul>
              <li>
                <a href="/banking">Banking & Finance</a>
              </li>
              <li>
                <a href="/corporate">Corporate & Commercial</a>
              </li>
              <li>
                <a href="/litigation">Litigation & Arbitration</a>
              </li>
              <li>
                <a href="/mergers">Mergers & Acquisitions</a>
              </li>
            </ul>
          </div>
          <div className="join-slider">
            <h2>WHAT OTHERS SAY</h2>
            <hr />
            <JoinSlider />
          </div>
          <div className="founder">
            <h2>KEY CONTACTS </h2>
            <hr />
            <div>
              <img
                alt="/"
                src="https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=1024x1024&w=is&k=20&c=cljXhuMJ8MaLGJCsfygmojSXy4KeaewvcDZx5Xwq3Xw="
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">Nima Tsering Tamang</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
            <div>
              <img
                alt="/"
                src="https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=1024x1024&w=is&k=20&c=cljXhuMJ8MaLGJCsfygmojSXy4KeaewvcDZx5Xwq3Xw="
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">Nima Tsering Tamang</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
            <div>
              <img
                alt="/"
                src="https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=1024x1024&w=is&k=20&c=cljXhuMJ8MaLGJCsfygmojSXy4KeaewvcDZx5Xwq3Xw="
                style={{ width: "100px", height: "100px" }}
              />
              <a href="/">Nima Tsering Tamang</a>
              <span>
                <ins>(Senior Partner)</ins>
              </span>
            </div>
          </div>
        </div>
        <div className="join-content">
          <h1>Litigation & Arbitration</h1>
          <p>
            We have a market leading litigation and arbitration practice. We
            advise multinational, corporate, and individual clients in a wide
            range of complex disputes in Nepal and internationally. We approach
            each matter with creativity, toughness and intensity.
            <br />
            We understand our clients business and offer tailored solutions. Our
            lawyers can quickly assess commercial and legal risks involved in
            transactions and can offer strategic advice. Our practice covers:
            <ul>
              <li>Anti-Money Laundering</li>
              <li>Asset Finance</li>
              <li>Banking Regulation</li>
              <li>Cross-Border Financing</li>
              <li>Dispute Resolution</li>
              <li>Financial Technology</li>
              <li>Foreign Exchange</li>
              <li>International Project Finance</li>
              <li>International Financial Transactions</li>
              <li>Syndicated Loans</li>
              <li>Security and Enforcement</li>
              <li>Intercreditor Issues</li>
            </ul>
            We also have a notable practice for advising in foreign investment
            and market entry. We have advised many global firms in investing and
            doing business in Nepal. We help our clients navigate the Nepalese
            legal system and regulations to meet their commercial goals. We
            combine our specialist legal knowledge, deep commercial
            understanding, and extensive local expertise to deliver the best
            results.
            <br />
            Our practice caters to a range of industries such as aviation,
            financial services, hospitality, manufacturing, infrastructure, and
            technology.
          </p>
          <h4>Resources:</h4>
          <div className="resources_link_b">
            <ul>
              <li>
                <a
                  href="https://www.lexology.com/library/detail.aspx?g=3c7436f3-298b-48ea-80b5-2479abf37fc5"
                  target="_blank"
                  style={{ color: "#354c84", transition: "color 0.3s" }}
                >
                  Project Finance in Nepal - 2019
                  <span>
                    <ins>(Getting The Deal Through)</ins>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lexology.com/library/detail.aspx?g=3c7436f3-298b-48ea-80b5-2479abf37fc5"
                  target="_blank"
                  style={{ color: "#354c84", transition: "color 0.3s" }} // Inline CSS for the default state
                >
                  Project Finance in Nepal - 2019
                  <span>
                    <ins>(Getting The Deal Through)</ins>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lexology.com/library/detail.aspx?g=3c7436f3-298b-48ea-80b5-2479abf37fc5"
                  target="_blank"
                  style={{ color: "#354c84", transition: "color 0.3s" }} // Inline CSS for the default state
                >
                  Project Finance in Nepal - 2019
                  <span>
                    <ins>(Getting The Deal Through)</ins>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lexology.com/library/detail.aspx?g=3c7436f3-298b-48ea-80b5-2479abf37fc5"
                  target="_blank"
                  style={{ color: "#354c84", transition: "color 0.3s" }} // Inline CSS for the default state
                >
                  Project Finance in Nepal - 2019
                  <span>
                    <ins>(Getting The Deal Through)</ins>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lexology.com/library/detail.aspx?g=3c7436f3-298b-48ea-80b5-2479abf37fc5"
                  target="_blank"
                  style={{ color: "#354c84", transition: "color 0.3s" }} // Inline CSS for the default state
                >
                  Project Finance in Nepal - 2019
                  <span>
                    <ins>(Getting The Deal Through)</ins>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Litigation;
