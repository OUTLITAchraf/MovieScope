import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailMovie() {
  const api_key = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_MOVIE_DETAIL = `${BASE_URL}/movie/${id}?api_key=${api_key}`;
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    fetch(API_URL_MOVIE_DETAIL)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, [API_URL_MOVIE_DETAIL]);

  const genresMovie = movieDetail.genres || [];
  const productionCountries = movieDetail.production_countries || [];
  const productionCompanies = movieDetail.production_companies || [];
  const spokenLanguages = movieDetail.spoken_languages || [];

  function formatRuntime(minutes) {
    if (!minutes) return "Unknown";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }

  return (
    <div className="flex flex-row">
      {movieDetail.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-[360px] rounded-lg"
        />
      )}
      <div className="mx-5 space-y-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white ">{movieDetail.title}</h2>
          <p className="text-sm text-gray-400 font-semibold">
            {movieDetail.tagline}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-lg font-semibold">Description</h3>
          <p className="text-gray-400 text-base">{movieDetail.overview}</p>
        </div>
        <div className="flex flex-row">
          <div className="ml-2 space-y-2">
            <h3 className="text-white text-lg font-semibold">Genres</h3>
            <div className="flex flex-row">
              {genresMovie.map((genre) => (
                <p
                  key={genre.id}
                  className="mr-2 bg-[#0097b2] py-1 px-3 text-white rounded-xl"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
          <div className="ml-20 space-y-2">
            <h3 className="text-white text-lg font-semibold">Rate</h3>
            <p className="flex flex-row gap-2 text-white text-xl font-semibold items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="yellow"
                stroke="yellow"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star-icon lucide-star"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              {Math.floor(movieDetail.vote_average * 100) / 100}
            </p>
          </div>
          <div className="ml-20 space-y-2">
            <h3 className="text-white text-lg font-semibold">Popularity</h3>
            <p className="flex flex-row gap-2 text-white text-xl font-semibold items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trending-up-icon lucide-trending-up"
              >
                <path d="M16 7h6v6" />
                <path d="m22 7-8.5 8.5-5-5L2 17" />
              </svg>
              {Math.floor(movieDetail.popularity * 100) / 100}
            </p>
          </div>
          <div className="ml-20 space-y-2">
            <h3 className="text-white text-lg font-semibold">Duration</h3>
            <p className="flex flex-row gap-2 text-white text-xl font-semibold items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-timer-icon lucide-timer"
            >
              <line x1="10" x2="14" y1="2" y2="2" />
              <line x1="12" x2="15" y1="14" y2="11" />
              <circle cx="12" cy="14" r="8" />
            </svg>
            {formatRuntime(movieDetail.runtime)}
          </p>
          </div>
        </div>
        <p className="text-white text-lg font-semibold">Production company
          {productionCompanies.map((company) => (
            <span className="mx-2 text-gray-400 text-base">{company.name || "Unknown"}</span>
          ))}
        </p>
        <p className="text-white text-lg font-semibold">Release date
          <span className="mx-2 text-gray-400 text-base">{movieDetail.release_date}</span>
        </p>
        <p className="text-white text-lg font-semibold">Status
          <span className="mx-2 text-gray-400 text-base">{movieDetail.status}</span>
        </p>
        <p className="text-white text-lg font-semibold">Production coutries
          {productionCountries.map((country) => (
            <span className="mx-2 text-gray-400 text-base">{country.name || "Unknown"}</span>
          ))}
        </p>
        <p className="text-white text-lg font-semibold">Production coutries
          {spokenLanguages.map((langue) => (
            <span className="mx-2 text-gray-400 text-base">{langue.name || "Unknown"}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default DetailMovie;
