import React from 'react';
import { render, waitForDomChange, waitForElementToBeRemoved } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { times } from 'lodash';

import App, { reviewsURL } from '.';
import ReviewMock from 'test/mocks/Review';
import { act } from 'react-dom/test-utils';

const numReviews = 10;
const reviews = times(numReviews, ReviewMock);

fetchMock.mock(reviewsURL, reviews);

test('loads the reviews', async () => {
  let getByText;
  act(() => {
    ({ getByText } = render(<App />));
  });

  expect(getByText(/loading/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => getByText(/loading/i))
});

test('calculates the total number of reviews and average rating correctly', async () => {
  const total = reviews.length;

  let totalRatings = 0;
  for(let i = 0; i < reviews.length; i++){
    totalRatings += reviews[i].rating;
  }
  
  const averageRating = (totalRatings/total).toFixed(1);

  let getByText;
  act(() => {
    ({ getByText } = render(<App />));
  });

  await waitForDomChange();

  expect(getByText(new RegExp(`${averageRating}`))).toBeInTheDocument();
  expect(getByText(new RegExp(`${total} reviews`))).toBeInTheDocument();
});