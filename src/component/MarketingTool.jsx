import React from 'react';
import '../assets/SCSS/MarketingTools.scss'

const cardsData = [
  { bgColor: "#A6C8FF", title: "Reputation Management", text: "Improve online reputation and business listings." },
  { bgColor: "#FEC57B", title: "Smart Inbox", text: "Manage customer conversations from every channel in a single, easy-to-use inbox." },
  { bgColor: "#6FDC8C", title: "Social Media Management", text: "Manage your social media profiles and paid ads from a single intuitive view." },
  { bgColor: "#FFB3B8", title: "Marketing Plan", text: "Run your entire marketing on autopilot." },
  { bgColor: "#E0E0E", title: "Unified Reporting", text: "Track ROI on every dollar spend." },

];

const Card = ({ bgColor, title, text }) => (
  <div className="card" style={{ backgroundColor: bgColor ,    height: "274px",
    width:' 95%'}}>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const MarketingTools = () => {
  return (
    <div className="column-with-cards">
      <div className="left-column">
        <p>Marketing Tools</p>
        <h2>Skyrocket 🚀 your growth with advanced marketing tools</h2>
        <p>A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.</p>
        <button style={{backgroundColor:'black'}} class="btn btn-primary  btn-color">Join the Waitlist</button>
      </div>
      <div className="right-column">
        <div className="cards-container" style={{ scrollbarWidth: 'none'}}>
          <div className="scrollable-cards">
            {cardsData.map((card, index) => (
              <Card key={index} bgColor={card.bgColor} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;
