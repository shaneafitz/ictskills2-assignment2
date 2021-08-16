import React from "react";
import TvShowDetails from "../components/tvShowDetails";
import SampleTvShow from "./tvSampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV show Details Page/TV Show Details",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails tvShow={SampleTvShow} />;

Basic.storyName = "Default";
