import React from 'react';
import Card from './Card'; 
import attract1 from "../assets/images/attract1.svg";
import attract2 from "../assets/images/attract2.svg";
import attract3 from "../assets/images/attract3.svg";
import "../assets/SCSS/Card.scss"

function CardList() {
 
  const cardData = [
    { id: 1, imageSrc: attract1, subText: 'Campaigns', heading:'Attract potential clients', text: 'Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery across channels.' },
    { id: 2, imageSrc: attract2, subText:'Workflows', heading:'Convert prospects into profits', text: 'Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion.' },
    { id: 3, imageSrc: attract3, subText:'Programs', heading:'Retain existing customers', text: 'Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs.' }
    // Add more data as needed
  ];

  return (
    <div className='attract'>
        <p>Marketing Recipes</p>
        <h3>Attract. Convert. Retain.</h3>
        <p>A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.</p>
        <button style={{    borderRadius: "9px",marginBottom: "6px"}}>Vist the library</button>
    <div className='cardlist'>
      
      {cardData.map(card => (
        <Card key={card.id} imageSrc={card.imageSrc} heading = {card.heading} subText={card.subText} text={card.text} />
      ))}
    </div>
    </div>
  );
}

export default CardList;
