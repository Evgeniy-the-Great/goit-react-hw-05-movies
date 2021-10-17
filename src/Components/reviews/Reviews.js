import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../api-servise';
import style from './Reviews.module.css';

const Reviews = ({ match }) => {
  const [review, setReview] = useState([]);
  const movieId = match.params.movieId;

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);
  console.log(review);

  return (
    <div className={style.reviewContainer}>
      <ul className={style.reviewList}>
        {review && review.length
          ? review.map(({ author, content }) => (
              <li className={style.reviewItem}>
                <p className={style.reviewAuthor}>
                  Author <span className={style.reviewAuthorNme}>{author}</span>{' '}
                  :{' '}
                </p>
                <p className={style.reviewContent}>"{content}"</p>
              </li>
            ))
          : "We don't have any reviews for this movie."}
      </ul>
    </div>
  );
};

export default Reviews;
