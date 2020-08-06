import casual from 'casual';

export default ({ name, rating, comment } = {}) => ({
  name: name || casual.name,
  rating: rating || casual.integer(1, 5),
  comment: comment || casual.sentence,
});