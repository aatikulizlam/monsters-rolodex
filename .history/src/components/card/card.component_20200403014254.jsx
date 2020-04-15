import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img 
            alt='monster' 
            src={ 'https://robohash.org/1?set=set1' }
        />
        <h1> { props.monster.name } </h1>
    </div>
)