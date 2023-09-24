import React from 'react';
import './style/Card.sass';
import { Link } from 'react-router-dom';
import cartesDatas from './Data/logements.json'


function CardComponent() {
    return (
      <div id='cartblock'>
        {cartesDatas.map(({ id, title, cover }) => (
          <Link key={id} to={`/logement/${id}`}>
            <Card id={id} title={title} cover={cover} /> 
          </Link>
        ))}
      </div>
    );
  }
  
  function Card({ id, title, cover }) {
    return (
      <nav id='cardsBlock'>
        <div id='cartContener'>
          <img className="cardImages" src={cover} alt={title} />
          <h2 className='cardTitle'>{title}</h2> 
        </div>
      </nav>
    );
  }
export default CardComponent;