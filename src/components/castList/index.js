import React from "react";
import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";

const CastList = ( { cast } ) => {
  let castCards = cast.map((c) => (
    <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={c.id} cast={c}  />
    </Grid>
  ));
  return castCards;
  // return <h1>{cast.toString()}</h1>
};

export default CastList;
