import React, { useState } from 'react';
import './App.css';
import MyFlashCards from './components/myFlashCards';

const App = () => {
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

    const flashcards = [
        { front: 'Which country has the longest coastline?', back: 'Canada', },
        { front: 'Which country borders the most countries?', back: 'China' },
        { front: 'Which country is both a country and a continent?', back: 'Australia' },
        { front: 'Which country hosts the largest biodiversity?', back: 'Brazil' },
        { front: 'Which country has the worlds largest archipelago?', back: 'Indonesia' },
        { front: 'Which country is the most densely populated?', back: 'Monaco' },
        { front: 'Which country offers prime views of the "Northern Lights', back: 'Norway' },
        { front: 'Which country exclusively uses renewable energy?', back: 'Iceland' },
        { front: 'Which country has 63 national parks?', back: 'The United States of America' },
        { front: 'Which country recognized 22 official languages?', back: 'India' },
        // Add more flashcards as needed
    ];

    const handleNextClick = () => {
        setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length);
    };

    return (
        <div className="app">
            <h1>Country Quiz</h1>
            <p>Guess the country based on the given facts and images.</p>
            <p>Number of cards: {flashcards.length}</p>
            <MyFlashCards
                front={flashcards[currentFlashcardIndex].front}
                back={flashcards[currentFlashcardIndex].back}
            />
            <button className="next-button" onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default App;