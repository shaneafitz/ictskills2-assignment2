import React from "react";
import TvShow from "../tvCard";
import Grid from "@material-ui/core/Grid";


const TvShowList = ( {tvShows, action }) => {
    let tvShowCards = tvShows.map((m) => (
      <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <TvShow key={m.id} tvShow={m} action={action} />
      </Grid>
    ));
    return tvShowCards;
  };
  export default TvShowList;