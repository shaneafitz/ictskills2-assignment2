import React from "react";
import Castlist from "../components/castList";
import SampleCast from "./castSampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Cast Page/CastList",
  component: Castlist,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const cast = [
    { ...SampleCast, id: 1 },
    { ...SampleCast, id: 2 },
    { ...SampleCast, id: 3 },
    { ...SampleCast, id: 4 },
    { ...SampleCast, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <Castlist
        cast={cast}
        action={(cast) => <AddToFavoritesIcon cast={cast} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
