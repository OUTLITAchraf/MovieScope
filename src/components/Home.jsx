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
          <div className="pt-6 sm:pt-8 md:pt-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0097b2] font-bold font-acthand px-4 sm:px-6 md:px-8">
                  Top Rated Movies
              </h2>
              <TopRatedMovie/>
          </div>
          <div className="pt-6 sm:pt-8 md:pt-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0097b2] font-bold font-acthand px-4 sm:px-6 md:px-8">
                  Popular Movies
              </h2>
              <PopularMovie/>
          </div>
          <div className="pt-6 sm:pt-8 md:pt-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0097b2] font-bold font-acthand px-4 sm:px-6 md:px-8">
                  Upcoming Movies
              </h2>
              <UpcomingMovie/>
          </div>
      </div>
    </>
  );
}
