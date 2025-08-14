import React, { useEffect, useState } from "react";

function TopRatedMovie() {
    const api_key = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    const API_URL_MOVIES_TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${api_key}`;
    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [pageTopRated, setPageTopRated] = useState(0);

    const moviesPerPage = 5;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL_MOVIES_TOP_RATED)
            .then((res) => res.json())
            .then((data) => setMoviesTopRated(data.results))
            .finally(() => setLoading(false));
    }, []);

    const currentMoviesTopRated = moviesTopRated.slice(
        pageTopRated * moviesPerPage,
        (pageTopRated + 1) * moviesPerPage
    );

    const handleNextTopRated = () => {
        if ((pageTopRated + 1) * moviesPerPage < moviesTopRated.length) {
            setPageTopRated((prev) => prev + 1);
        }
    };
    const handlePrevTopRated = () => {
        if (pageTopRated > 0) setPageTopRated((prev) => prev - 1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-16 h-16 border-4 border-t-[#0097b2] border-gray-300 rounded-full animate-spin"></div>
            </div>
        );
    }
    return (
        <div className="p-3 sm:p-5 my-3 sm:my-5">
            <div className="flex flex-row overflow-x-auto space-x-4 sm:space-x-6 md:space-x-20 md:mx-5">
                {currentMoviesTopRated.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 rounded-lg sm:rounded-xl overflow-hidden group flex-shrink-0"
                    >
                        <a href={`/detail/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover transition-filter duration-300 group-hover:brightness-40"
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 text-white">
                                <h3 className="font-bold text-xs sm:text-sm md:text-base">{movie.title}</h3>
                                <div className="flex flex-row justify-between">
                                    <p className="text-xs sm:text-sm">{movie.release_date.split("-")[0]}</p>
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

            <div className="flex justify-between mt-4 sm:mt-5">
                <button
                    type="button"
                    onClick={handlePrevTopRated}
                    disabled={pageTopRated === 0}
                    className="flex flex-row text-sm sm:text-base md:text-lg font-semibold items-center bg-[#0097b2] text-white py-1 px-2 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl disabled:opacity-50 hover:bg-[#007a91] cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left-icon lucide-arrow-left mr-1 w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>{" "}
                    Prev
                </button>
                <button
                    type="button"
                    onClick={handleNextTopRated}
                    disabled={
                        (pageTopRated + 1) * moviesPerPage >= moviesTopRated.length
                    }
                    className="flex flex-row text-sm sm:text-base md:text-lg font-semibold items-center bg-[#0097b2] text-white py-1 px-2 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl disabled:opacity-50 hover:bg-[#007a91] cursor-pointer"
                >
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-icon lucide-arrow-right ml-1 w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TopRatedMovie;
