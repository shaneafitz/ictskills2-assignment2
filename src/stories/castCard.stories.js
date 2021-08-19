import React from "react";
import CastCard from "../components/castCard";
import SampleCast from "./castSampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


export default {
  title: "Cast Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      cast={SampleCast}
      taging={(cast) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleCast, profile_path: undefined };
  return (
    <CastCard
      cast={sampleNoPoster}
      taging={(cast) => null}
    />
  );
};
Exceptional.storyName = "exception";
