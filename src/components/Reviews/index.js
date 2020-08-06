import React from 'react';

import './Reviews.css';

import starIcon from 'images/star.svg';
import starIconFilled from 'images/star--filled.svg';


export default function Reviews({ reviews }) {
  function rating(score){
    let stars = [];
    for(let i = 1; i <= 5; i++){
      if(i <= score){
        stars.unshift(<img key = {i} className = "star-icon" src={starIconFilled} alt="star-icon" data-testid="filled-star" />);
      }else{
        stars.unshift(<img key = {i} className = "star-icon" src={starIcon} alt="star-icon" data-testid="unfilled-star"/>);
      }
    }
    return stars
  }

  return (
    <div className = "container-fluid">
      <div className = "row">
        <div className = "col-md-8 col-7 col-centered">

          <h2>All Reviews</h2>
          <div className = "card-group justify-content-center">

            {reviews.map(review => (
              <div className = "review-block card-header" key={review.name} data-testid="review">

                <div className = "card-header">
                  <p>{review.name}</p>
                </div>
                
                <div className = "card-body">
                  <p>{review.comment}</p>
                </div>

                <div className = "card-footer">
                  {rating(review.rating)}
                </div>     

              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

