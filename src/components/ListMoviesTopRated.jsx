import { useEffect, useState } from "react";
import ScrollButtonTop from "./ScrollButtonTop";

function ListMoviesTopRated() {
  const api_key = import.meta.env.VITE_API_KEY;

  const [moviesTop100Rated, setMoviesTop100Rated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const allMovies = [];
        for (let page = 1; page <= 5; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`
          );
          const data = await res.json();
          allMovies.push(...data.results);
        }
        setMoviesTop100Rated(allMovies); // Now contains top 100 movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [api_key]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-4 border-t-[#0097b2] border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <ScrollButtonTop />
      <h2 className="text-xl lg:text-5xl font-acthand font-extrabold lg:font-bold text-[#0097b2] my-10">
        Top 100 Populare Movies
      </h2>
      <div className="mx-5 lg:mx-10 border-1 border-gray-300">
        {moviesTop100Rated.map((movie, index) => (
          <div
            key={index}
            className="flex flex-row my-3 mx-3 lg:mx-10 items-center border-b-1 border-gray-400 p-3"
          >
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
              className="w-20 lg:w-fit"
            />
            <div className="ml-3 lg:mx-5 space-y-3">
              <h3 className="text-white text-sm lg:text-4xl font-bold">
                <a href={`/detail/${movie.id}`} className="hover:border-b-2">
                  {index + 1}. {movie.title}
                </a>
              </h3>
              <p className="text-gray-300 lg:text-lg font-semibold">
                {movie.release_date.split("-")[0]}
              </p>
              <p className="text-gray-400 hidden lg:block">
                {movie.overview.slice(0, 400) + "..."}
              </p>
              <div className="flex space-y-2 flex-row space-x-5 sm:space-y-0 gap-4">
                <div className="space-y-2">
                  <p className="flex flex-row gap-2 text-white lg:text-xl font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="yellow"
                      stroke="yellow"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {Math.floor(movie.vote_average * 10) / 10}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex flex-row gap-2 text-white lg:text-xl font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up-icon lucide-trending-up w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]"
                    >
                      <path d="M16 7h6v6" />
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                    </svg>
                    {Math.floor(movie.popularity * 100) / 100}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMoviesTopRated;
