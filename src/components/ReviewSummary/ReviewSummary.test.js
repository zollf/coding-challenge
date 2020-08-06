import React from 'react';
import { render } from '@testing-library/react';

import ReviewSummary from '.';

test('displays the total and average rating', () => {
  const averageRating = 4.5;
  const total = 123;

  const { getByText } = render(<ReviewSummary averageRating={averageRating} total={total} />);
  expect(getByText(new RegExp(`${averageRating}`))).toBeInTheDocument();
  expect(getByText(new RegExp(`${total} reviews`))).toBeInTheDocument();
});

test('uses the singular form of reviews if there is only 1 review', () => {
  const { getByText } = render(<ReviewSummary averageRating={5} total={1} />);
  expect(getByText(/1 review/)).toBeInTheDocument();
});