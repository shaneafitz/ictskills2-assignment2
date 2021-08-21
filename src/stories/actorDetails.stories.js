import React from "react";
import ActorDetails from "../components/actorDetails";
import SampleActor from "./actorSampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Details Page/Actor Details",
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ActorDetails actor={SampleActor} />;

Basic.storyName = "Default";
