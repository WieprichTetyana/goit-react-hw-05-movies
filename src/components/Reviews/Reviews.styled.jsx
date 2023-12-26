import styled from 'styled-components';

// Styled components
export const ReviewsContainer = styled.div`
  padding: 20px;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: grey;
`;

export const ReviewList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  color: #01232e;
`;

export const AuthorHeading = styled.h3`
  font-weight: 500;
  span {
    font-weight: bold;
    text-transform: uppercase;
    color: #025c7a;
  }
`;

export const ReviewContent = styled.p`
  font-style: oblique;
  color: #012937;
  text-transform: uppercase;
`;
