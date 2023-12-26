import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'routes/movies';
import {
  CastContainer,
  LoadingText,
  CastList,
  CastItem,
  ActorDetails,
  ActorName,
  CharacterParagraph,
  ActorImage,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCastFromApi = async () => {
      try {
        setIsLoading(true);
        const res = await getMovieCast(id);
        setCast(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastFromApi();
  }, [id]);

  return (
    <CastContainer>
      {isLoading && <LoadingText>Loading...</LoadingText>}
      <CastList>
        {cast.length !== 0 ? (
          cast.map(actor => (
            <CastItem key={actor.cast_id}>
              <ActorDetails>
                <ActorName>{actor.name}</ActorName>
                {actor.character && (
                  <CharacterParagraph>
                    <span>Character:</span> {actor.character}
                  </CharacterParagraph>
                )}
              </ActorDetails>
              {actor.profile_path && (
                <ActorImage
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width="200"
                />
              )}
            </CastItem>
          ))
        ) : (
          <p>We don't have any cast for this movie.</p>
        )}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
