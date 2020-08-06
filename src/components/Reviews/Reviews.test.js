import React from 'react';
import { render } from '@testing-library/react';
import { times } from 'lodash';

import ReviewMock from 'test/mocks/Review';
import Reviews from '.';

const numReviews = 10;
const reviews = times(numReviews, ReviewMock);

test('displays all reviews', () => {
  const { getAllByTestId } = render(<Reviews reviews={reviews} />)
  expect(getAllByTestId('review')).toHaveLength(numReviews);
});

test('displays the right amount of filled and unfilled stars', () => {
  const testReview = ReviewMock({ rating: 3 });

  const { getAllByTestId } = render(<Reviews reviews={[testReview]} />)
  expect (getAllByTestId('filled-star')).toHaveLength(testReview.rating);
  expect (getAllByTestId('unfilled-star')).toHaveLength(5 - testReview.rating);
});