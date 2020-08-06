import React from 'react';

import './ReviewSummary.css';

export default function ReviewSummary({ total, averageRating }) {
  return (
    <div className="ReviewSummary">
      <h2>Summary</h2>

      <div>
        {averageRating}
        &nbsp;&nbsp;-&nbsp;&nbsp;
        {total} reviews
      </div>
    </div>
  );
}