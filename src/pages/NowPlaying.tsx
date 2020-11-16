import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Carousel } from '../components/slider/Carousel';
import { MoviePoster } from '../components/slider/MoviePoster';

import { Movie } from '../model/Movie';

const NOW_PLAYING = gql`
  query nowPlaying {
    nowPlaying {
      id
      title
      overview
      poster_path
      backdrop_path
      favorite
      popularity
      cast {
        name
      }
    }
  }
`;

export const NowPlaying = () => {
  const { loading, error, data } = useQuery(NOW_PLAYING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Carousel title="Now Playing">
      {data.nowPlaying.map((movie: Movie) => (
        <MoviePoster movie={movie} key={movie.id}></MoviePoster>
      ))}
    </Carousel>
  );
};
