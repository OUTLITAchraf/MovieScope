import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import Slider from "react-slick";


function DetailMovie() {

  const { id } = useParams();

  const api_key = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_MOVIE_DETAIL = `${BASE_URL}/movie/${id}?api_key=${api_key}`;
  const API_URL_MOVIE_IMAGES = `${BASE_URL}/movie/${id}/images?api_key=${api_key}`
  const API_URL_MOVIE_RECOMMENDATIONS = `${BASE_URL}/movie/${id}/recommendations?api_key=${api_key}`

  const [movieDetail, setMovieDetail] = useState({});
  const [movieImages, setMovieImages] = useState([]);
  const [movieRecommendations, setMovieRecommendations] = useState([]);

  useEffect(() => {

    fetch(API_URL_MOVIE_DETAIL)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));

    fetch(API_URL_MOVIE_IMAGES)
      .then((res) => res.json())
      .then((data) => setMovieImages(data.backdrops))

    fetch(API_URL_MOVIE_RECOMMENDATIONS)
      .then((res) => res.json())
      .then((data) => setMovieRecommendations(data.results))

  }, []);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {movieDetail.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-full md:w-[360px] rounded-lg mb-6 md:mb-0 md:mr-6"
          />
        ) : (
          <img
            src="https://placehold.co/360x470/000000/FFFFFF?text=Poster+Not+Found"
            alt={movieDetail.title}
            className="w-full md:w-[360px] rounded-lg mb-6 md:mb-0 md:mr-6"
          />
        )}
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{movieDetail.title}</h2>
            <p className="text-sm text-gray-400 font-semibold">
              {movieDetail.tagline}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Description</h3>
            <p className="text-gray-400 text-base">{movieDetail.overview}</p>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0 gap-4">
            <div className="space-y-2">
              <h3 className="text-white text-lg font-semibold">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {genresMovie.map((genre) => (
                  <p
                    key={genre.id}
                    className="bg-[#0097b2] py-1 px-3 text-white rounded-xl"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-2">
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
                {Math.floor(movieDetail.vote_average * 10) / 10}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-lg font-semibold">Popularity</h3>
              <p className="flex flex-row gap-2 text-white text-xl font-semibold items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up-icon lucide-trending-up"
                >
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
                {Math.floor(movieDetail.popularity * 100) / 100}
              </p>
            </div>
            <div className="space-y-2">
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
            {productionCompanies.map((company, index) => (
              <span key={index} className="ml-2 text-gray-400 text-base">
                {company.name || "Unknown"}
                {index < productionCompanies.length - 1 && (
                  <span className="ml-2 text-lg">•</span>
                )}
              </span>
            ))}
          </p>
          <p className="text-white text-lg font-semibold">Release date
            <span className="mx-2 text-gray-400 text-base">{movieDetail.release_date}</span>
          </p>
          <p className="text-white text-lg font-semibold">Status
            <span className="mx-2 text-gray-400 text-base">{movieDetail.status}</span>
          </p>
          <p className="text-white text-lg font-semibold">Production coutries
            {productionCountries.map((country, index) => (
              <span key={index} className="ml-2 text-gray-400 text-base">
                {country.name || "Unknown"}
                {index < productionCountries.length - 1 && (
                  <span className="ml-2 text-lg">•</span>
                )}
              </span>
            ))}
          </p>
          <p className="text-white text-lg font-semibold">Production coutries
            {spokenLanguages.map((langue, index) => (
              <span key={index} className="ml-2 text-gray-400 text-base">
                {langue.name || "Unknown"}
                {index < spokenLanguages.length - 1 && (
                  <span className="ml-2 text-lg">•</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <h3 className="text-4xl font-bold text-white mt-10 mb-7">Movie Images</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {movieImages.slice(0, 8).map((img, index) => {
            if (index === 7 && movieImages.length > 8) {
              return (
                <div key={index} className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                    alt={`Backdrop ${index}`}
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
                    <span className="text-white text-xl font-bold">
                      +{movieImages.length - 10} more
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <img
                key={index}
                src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                alt={`Backdrop ${index}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            );
          })}
        </div>
      </div>
      <div className="slider-container mt-10 px-4 sm:px-6">
        <h3 className="text-4xl font-bold text-white mb-7">Suggestion Movies</h3>
        <Slider {...settings}>
          {movieRecommendations.map((movie) => (
            <div key={movie.id} className="px-1 sm:px-2">
              <div className="rounded-xl bg-[#0d0d0d] px-2 pt-2 border-2 border-gray-700 overflow-hidden hover:border-2 hover:border-gray-300 transition-transform duration-200">
                <a href={`/detail/${movie.id}`}>
                  <img
                    src={movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : 'https://placehold.co/200x300/000000/FFFFFF?text=Poster+Not+Found'}
                    alt={movie.title}
                    className="w-full object-cover rounded-xl"
                  />
                </a>
                <div className="flex justify-between items-center text-white p-2">
                  <h3 className="font-bold text-sm truncate mr-2 sm:mr-4">{movie.title}</h3>
                  <p className="flex items-center text-sm font-semibold gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="yellow"
                      stroke="yellow"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {Math.floor(movie.vote_average * 10) / 10}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default DetailMovie;
