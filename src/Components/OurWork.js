import React from "react";
import DynamicOurWork from "./DynamicOurWork";

const OurWork = () => {
  return (
    <div className="our-work">
      <DynamicOurWork
        title_3="WHAT WE DO"
        statement_3="We combine our specialist legal knowledge, deep commercial understanding, and extensive local expertise to deliver the best results for our clients. "
        icons={[
          "fa-solid fa-money-check-dollar",
          "fa-solid fa-briefcase",
          "fa-solid fa-building-columns",
          "fa-solid fa-lines-leaning"
        ]}
        names={[
          "BANKING & FINANCE",
          "CORPORATE & COMMERCIAL",
          "LITIGATION & ARBITRATION",
          "MERGERS & ACQUISITIONS"
        ]}
        paragraphs={[
          "We advise leading banks, multilaterals, and financial institutions in cross-border lending, loan syndications, security, foreign exchange, foreign investment, and regulatory matters. We have advised in financing of some of the largest power and infrastructure projects in Nepal.",
          "We work in a range of corporate and commercial mandates specializing in aviation, cross-border transactions, franchising, intellectual property, leasing, technology transfers, construction contracts, taxation, and regulatory advice. We have advised many global companies in investing and doing business in Nepal.",
          "Our dispute resolution practice is a market leader in the country. We specialize in arbitrations, contractual disputes, construction and procurement disputes, international trade, and shareholders disputes. We also have special expertise in administrative, constitutional, and property laws.",
          "We advise clients in mergers, acquisitions, joint ventures, and corporate restructurings. We have extensive experience in cross-border transactions, private equity, and distressed sales. Our focus is to flawlessly guide clients from transaction structuring, legal due diligence, drafting of transaction documents, regulatory approvals, to a successful closing."
        ]}
        urls={["/banking", "/corporate", "/litigation", "/mergers"]}
        readText="Learn More"
      />
    </div>
  );
};
export default OurWork;
