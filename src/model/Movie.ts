export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  favorite: boolean;
  cast?: Cast[];
}

export interface Cast {
  id: number;
  name: string;
}
