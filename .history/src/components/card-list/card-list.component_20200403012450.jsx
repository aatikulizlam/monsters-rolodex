import React from 'react'

import './card-list.styles.css'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.abcd.map(monster => (
                    <h1 key={monster.id}> {monster.name} </h1>
                ))
            }
        </div>
    )
}