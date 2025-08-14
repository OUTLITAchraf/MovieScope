import React, { useEffect, useState } from "react";
import FadeSlideMovies from "./SectionMovie/FadeSlideMovies";
import TopRatedMovie from "./SectionMovie/TopRatedMovie";
import PopularMovie from "./SectionMovie/PopularMovie";
import UpcomingMovie from "./SectionMovie/UpcomingMovie";

export default function Home() {
  return (
    <>
      <div>
        <FadeSlideMovies />
        <div className="pt-10">
          <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">
            Top Rated Movies
          </h2>
          <TopRatedMovie/>
        </div>
        <div className="pt-10">
          <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">
            Popular Movies
          </h2>
          <PopularMovie/>
        </div>
        <div className="pt-10">
          <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">
            Upcoming Movies
          </h2>
          <UpcomingMovie/>
        </div>
      </div>
    </>
  );
}
