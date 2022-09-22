//rfc
import React from 'react';
// import './SignleCard.css';

export default function SignleCard({ card, handleChoice, flipped, disabled, faded, isMatched }) {
	// console.log(disabled);
	const hadnleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<div className='card' key={card.id}>
			<div className={`${flipped ? 'flipped' : ''} ${isMatched && faded ? 'faded' : ''}`}>
				<img className='frontOfCard' src={card.src} alt='front Of Card <3' />
				<img className='backOfCard' src='/yellowQ(1).jpg' onClick={hadnleClick} alt='back Of Card ?' style={{ height: 160, width: 160 }} />
			</div>
		</div>
	);
}
