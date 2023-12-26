import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'routes/movies';
import {
  ReviewContent,
  LoadingText,
  ReviewList,
  ReviewItem,
  AuthorHeading,
  ReviewsContainer,
} from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviewsFromApi = async () => {
      try {
        setIsLoading(true);
        const { results } = await getReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsFromApi();
  }, [id]);

  return (
    <ReviewsContainer>
      {isLoading && <LoadingText>Loading...</LoadingText>}

      <ReviewList>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <AuthorHeading>
                <span>Author:</span> {review.author}
              </AuthorHeading>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ReviewList>
    </ReviewsContainer>
  );
};

export default Reviews;
