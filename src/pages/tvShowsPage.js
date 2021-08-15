import React from "react";
import PageTemplate from '../components/templateTvShowListPage';
import { getTvShows } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToFavorites";

const TvShowsPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('TV', getTvShows)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const tvShows = data.results;
  
    // Redundant, but necessary to avoid app crashing.
    const favorites = tvShows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    return (
      <PageTemplate
        title="Tv Shows"
        tvShows={tvShows}
        action={(tvShow) => {
          return <AddToMustWatchIcon tvShow={tvShow} />
        }}
      />    
    );
  };
  
  export default TvShowsPage;