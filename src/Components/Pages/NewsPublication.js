import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import JoinSlider from "../JoinSlider.js/JoinSlider";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import "../Pages/news.css";

const NewsPublication = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1634143407677-e19f75512b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
        title="NEWS & PUBLICATIONS"
        text="KARKI LAW ASSOCIATES"
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
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
          <h2>Arbitration law and procedure in Nepal</h2>
          <p>
            Arbitration has been gradually gaining popularlity as a method of
            dispute resolution Nepal. Arbitration in Nepal is governed by the
            Arbitratio[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Nepal Project Finance Guide</h2>
          <p>
            The team at Neupane Law Associates have authored Nepal Chapter in
            the Project Finance 2019 published by Chambers Global Practice
            Guides. You c[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Doing Business in Nepal Guide</h2>
          <p>
            The team at Neupane Law Associates have authored Nepal Chapter in
            the Doing Business In 2019 published by Chambers Global Practice
            Guide. You [..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Overview of the new Foreign Investment Act 2019</h2>
          <p>
            The Foreign Investment and Technology Transfer Act 2019 (2075)
            (“FITTA”) has replaced the Foreign Investment and Techn[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Introduction to the Privacy Act 2018</h2>
          <p>
            Nepal’s legal system has undergone massive changes recently. Nepal
            became a federal republic following the promulgation of the new
            constituti[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Mergers and Acquisitions in Nepal</h2>
          <p>
            Partner Anjan Neupane has authored a Q&A guide on private company
            mergers and acquisitions in Nepal. It has been published by Pr[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Shareholders' Agreements in Nepal</h2>
          <p>
            Shareholders’ agreement (can be described as an agreement between
            shareholders of a company on reg[..] <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Banking and Finance Guide</h2>
          <p>
            Partner Anjan Neupane and Senior Partner Balkrishna Neupane have
            co-authored a Q&A guide to finance in Nepal. It has been published
            by Pra[..] <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>New Contract Signing Formalities</h2>
          <p>
            The Muluki Civil (Code) Act, 2017 (2074) and the Muluki Civil
            Procedure (Code) Act 2017 (2074) (collectively called the “Co[..]{" "}
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Labour Act 2074: Key Changes</h2>
          <p>
            The Labour Act 2074 has made key changes to employment law in Nepal.
            Compared to the previous law, emplo[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Investing in Nepal – A Legal Guide</h2>
          <p>
            This Q&A guide gives an overview of Nepal's investment regulations
            with a primary focus on legal and regulatory matters. It also
            provides i[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Firm ranked top by Chambers Asia</h2>
          <p>
            Chambers Asia-Pacific 2018 guide has been published recently and it
            ranks our firm Neupane Law Associates as a leading firm in Nepal. It
            ranks[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Key project financing challenges</h2>
          <p>
            It has been said time and again in popular discourse that Nepal has
            the theoretical capacity to produce 83,000 MWs of hydro-power,
            whereas from a p[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>Legal barriers to infra development</h2>
          <p>
            Infrastructure development is the sine qua non of the overall
            development of any country since it not only provides final
            consumption services to t[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
          <h2>The Foreign Investment Bill 2019: A Review</h2>
          <p>
            On 26 February 2019, the government of Nepal tabled the Foreign
            Investment and Technology Transfer Bill 2019 (“Bill”) which will
            replac[..]
            <br />
            <a href="/" target="_blank">
              Read More
            </a>
          </p>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default NewsPublication;
