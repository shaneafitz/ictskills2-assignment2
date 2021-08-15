import React from "react";
import TVCard from "../components/tvCard";
import SampleTvShow from "./tvSampleData";

export default {
  title: "TV Home Page/TVCard",
  component: TVCard,
};

export const Basic = () => {
  return (
    <TVCard
      tvShow={SampleTvShow}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TVCard
      tvShow={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";