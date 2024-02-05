import React, { useState } from 'react';
import './MyFlashCards.css';

const MyFlashCards = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    {front}
                </div>
                <div className="flashcard-back">
                    {back}
                </div>
            </div>
        </div>
    );
};

export default MyFlashCards;