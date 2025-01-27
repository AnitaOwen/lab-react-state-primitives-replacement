// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState("")

  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([])

  // TODO: Implement the handleGenreSelect function
  function handleGenreSelect(genre){
    setSelectedGenre(genre)
    setRecommendations(bookData[genre].slice(0, 2))
  }

  function showMore(){
    setRecommendations(bookData[selectedGenre])
  
  }

  return (
    <div className="book-recommendations">
      <h2>Book Recommendations</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(bookData).map((genre) => (
          <RecommendationButtons 
          key={genre} 
          genre={genre}
          onGenreSelect={handleGenreSelect} />
        ))}
      </div>
      <ul className="book-list">
        {/* TODO: Display recommendations based on selected genre */}
        {selectedGenre && (
        <>
          <RecommendationList recommendations={recommendations} selectedGenre={selectedGenre}/>
          {recommendations.length < 3 && <button onClick={showMore}>More Like This</button>}
        </>
        )}
        {/* {selectedGenre && <RecommendationList recommendations={recommendations} selectedGenre={selectedGenre}/>}
        {selectedGenre && <button onClick={showMore}>More Like This</button>} */}
      </ul>
    </div>
  );
}; 

export default BookRecommendations;
