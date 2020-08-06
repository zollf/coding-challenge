import './App.css';

import React, { useEffect, useState } from 'react';

import ReviewSummary from 'components/ReviewSummary';
import Reviews from 'components/Reviews';

export const reviewsURL = 'https://assets-shared.s3-ap-southeast-2.amazonaws.com/reviews.json';

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    fetch(reviewsURL)
      .then(response => response.json())
      .then(json => setReviews(json));
  }, []);

  useEffect(() => {
    let totalRatings = 0;
   
    for(let i = 0; i < reviews.length; i++){
      totalRatings += reviews[i].rating;
    }
    
    setAverageRating(totalRatings/reviews.length);
  }, [reviews]);

  return (
    <div className="App">
      <h1>Our Reviews</h1>

      {reviews.length ? (
        <>
          <ReviewSummary total={reviews.length} averageRating={averageRating} />
          <Reviews reviews={reviews} />
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
