import React from 'react'
import "./Section4.scss"
const Section4 = () => {
    const cards = [
        {
            id: 1,
            image: 'https://preview.colorlib.com/theme/tasty/images/person_3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            rating: 4,
            name: 'Joen Doe'
        },
        {
            id: 2,
            image: 'https://preview.colorlib.com/theme/tasty/images/person_1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            rating: 4,
            name: 'Joen Doe'
        },
        {
            id: 3,
            image: 'https://preview.colorlib.com/theme/tasty/images/person_2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            rating: 4,
            name: 'Joen Doe'
        }
    ];

    return (
        <div className="card-section">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <img src={card.image} alt={card.name} className="card-image" />
                    <div className="card-content">
                        <p className="card-description">{card.description}</p>
                        <div className="card-rating">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={index < card.rating ? 'star filled' : 'star'}>&#9733;</span>
                            ))}
                        </div>
                        <h3 className="card-name">{card.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Section4
