import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchMovie() {
  const { query } = useParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!query.trim()) {
      setSearchMovie([]);
      setErrorMessage("Please enter a movie name");
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSearchMovie(data.results);
          setErrorMessage("");
        } else {
          setSearchMovie([]);
          setErrorMessage("No movie found with that name");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error fetching movies");
      });
  }, [query, api_key]);

  return (
      <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0097b2] font-semibold font-acthand my-6 sm:my-8 md:my-10 px-4 sm:px-6">
              Result Search of {query}
          </h2>

          {errorMessage && (
              <p className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center text-2xl sm:text-3xl md:text-5xl text-white font-acthand my-10 sm:my-15 md:my-20 px-4 sm:px-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-frown-icon lucide-frown w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                      <line x1="9" x2="9.01" y1="9" y2="9"/>
                      <line x1="15" x2="15.01" y1="9" y2="9"/>
                  </svg>
                  {errorMessage}
              </p>
          )}

          {!errorMessage && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mx-4 sm:mx-6 md:mx-10">
                  {searchMovie
                      .filter((movie) => movie.poster_path)
                      .map((movie) => (
                          <div
                              key={movie.id}
                              className="relative w-full h-60 sm:h-72 md:h-80 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
                          >
                              <a href={`/detail/${movie.id}`}>
                                  <img
                                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                      alt={movie.title}
                                      className="w-full h-full object-cover transition-filter duration-300 group-hover:brightness-40"
                                  />

                                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 text-white">
                                      <h3 className="font-bold text-sm sm:text-base md:text-lg">{movie.title}</h3>
                                      <div className="flex flex-row justify-between">
                                          <p className="text-xs sm:text-sm">{movie.release_date?.split("-")[0] || "N/A"}</p>
                                          <p className="flex flex-row items-center font-semibold gap-1 sm:gap-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 24 24"
                                                  fill="yellow"
                                                  stroke="yellow"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="lucide lucide-star-icon lucide-star w-3 h-3 sm:w-4 sm:h-4"
                                              >
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                              </svg>
                                              <span className="text-xs sm:text-sm">{Math.floor(movie.vote_average * 10) / 10}</span>
                                          </p>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      ))}
              </div>
          )}
      </div>
  );
}

export default SearchMovie;
