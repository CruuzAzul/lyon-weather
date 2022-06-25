import React from "react";
import {Composition} from 'remotion';
import {WeatherComposition} from "./WeatherComposition";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="WeatherScreen"
        component={WeatherComposition}
        durationInFrames={150}
        fps={30}
        width={414}
        height={896}
      />
    </>
  );
};
