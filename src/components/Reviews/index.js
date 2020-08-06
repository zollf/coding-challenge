import React from 'react';

import './Reviews.css';

import starIcon from 'images/star.svg';

export default function Reviews({ reviews }) {
  return (
    <div class = "container-fluid">
      <div class = "row">
        <div class = "col-md-6 col-7 col-centered">
          <h2>All Reviews</h2>
          <div class = "card-group justify-content-center">

            

            {reviews.map(review => (
              <div class = "review-block card-body" key={review.name} data-testid="review">
                <p>{review.name}</p>
                <div>
                  <img src={starIcon} alt="" />
                </div>
                <p>{review.comment}</p>
              </div>
            ))}

          </div>
        </div>  
      </div>
    </div>
  )
}