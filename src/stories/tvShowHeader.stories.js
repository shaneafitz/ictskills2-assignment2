import React from "react";
import TvShowHeader from "../components/headerTvShow";
import SampleTvShow from "./tvSampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "TV show Details Page/TV Show Header",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader tvShow={SampleTvShow} />;

Basic.storyName = "Default";
