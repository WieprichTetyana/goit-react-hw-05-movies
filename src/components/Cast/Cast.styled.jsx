import styled from 'styled-components';

// Styled components
export const CastContainer = styled.div`
  padding: 20px;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: grey;
`;

export const CastList = styled.ul`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  align-items: center;
`;

export const CastItem = styled.li`
  border-radius: 8px;
  height: 460px;
  box-shadow: rgba(2, 92, 122, 0.25) 0px 54px 55px,
    rgba(2, 92, 122, 0.12) 0px -12px 30px, rgba(2, 92, 122, 0.12) 0px 4px 6px,
    rgba(2, 92, 122, 0.17) 0px 12px 13px, rgba(2, 92, 122, 0.09) 0px -3px 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ActorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100px;
`;

export const ActorName = styled.h2`
  font-style: oblique;
  color: rgb(2, 92, 122);
  text-transform: uppercase;
`;

export const CharacterParagraph = styled.p`
  font-weight: 500;
  align-self: flex-start;
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ActorImage = styled.img`
  border-radius: 10;
`;
