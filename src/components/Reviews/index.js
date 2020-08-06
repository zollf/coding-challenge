import React from 'react';

import starIcon from 'images/star.svg';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>All Reviews</h2>

      {reviews.map(review => (
        <div key={review.name} data-testid="review">
          <p>Name?</p>
          <div>
            <img src={starIcon} alt="" />
          </div>
          <p>Description?</p>
        </div>
      ))}
    </div>
  )
}