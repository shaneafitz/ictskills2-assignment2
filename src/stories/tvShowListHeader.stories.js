import React from "react";
import TvListHeader from "../components/headerTvList";

export default {
  title: "TV Home Page/Header",
  component: TvListHeader,
};

export const Basic = () => <TvListHeader title={'Discover TV shows'} />;

Basic.storyName = "Default";