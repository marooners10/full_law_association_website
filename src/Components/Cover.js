import "./cover.css";
import rep from "../Components/Images/rep.jpg";
import DynamicCover from "./DynamicCover";

const Cover = () => {
  return (
    <div className="about-container">
      <div className="cover">
        <DynamicCover
          banner="Law firm in Nepal"
          img={rep}
          heading="DEDICATED TO EXCELLENCE"
          detail="KARKI LAW ASSOCIATES is Nepal's top law firm  based in
          Kathmandu. The broad practice areas of Karki Law Associates Advocates are
          Foreign Investment and Joint Ventures, Mergers and Acquisitions, Securities and
          Capital Markets, Corporate Laws (including regulatory practices), Exchange
          Control Regulations, Employment Laws, Licensing and Technology Transfer,
          Information Technology and Information Technology Enabled Services,
          Infrastructure Projects, Real Estate and Construction, Private Equity, Project
          Finance, Intellectual Property Rights, Anti-Trust laws, Direct and Indirect Taxation,
          Banking, Cyber laws, Corporate litigation, Civil Litigation, Criminal litigation and
          Arbitration."
          detail1="Our firm is one of very few law firms in Nepal having a unique
          combination of corporate law and tax practice."
        />
      </div>
    </div>
  );
};
export default Cover;
