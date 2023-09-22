import "./aboutfooter.css";

const AboutFooter = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="bottom-1">
          <h4>NEUPANE LAW ASSOCIATES</h4>
          <p> LAW FIRM REG. NO : 393881/700</p>
          <p> - 2nd Floor, Central Business Park</p>
          <p> - Thapathali Road, 44600, Kathmandu, Nepal.</p>
          <p> - +977 1 590 1652</p>
          <p> - info@neupanelegal.com</p>
        </div>
        <div className="bottom-2">
          <h4>THE FIRM</h4>
          <a href="/our-firm">Our Firm</a>
          <a href="/our-team">Our Team</a>
          <a href="/news-and-publication">News & Publications</a>
          <a href="/join-us">Join Us</a>
        </div>
        <div className="bottom-3">
          <h4>PRACTICE AREAS</h4>
          <a href="/banking">Banking & Finance</a>
          <a href="/corporate">Corporate & Commercial</a>
          <a href="/litigation">Litigation & Arbitration</a>
          <a href="/mergers">Mergers & Acquisitions</a>
        </div>
      </div>
      <div className="top">
        <div>
          <a href="https://www.facebook.com">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutFooter;
