import React, { useEffect, useState } from "react";

function UpcomingMovie() {
    const api_key = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    const API_URL_MOVIES_Upcoming = `${BASE_URL}/movie/upcoming?api_key=${api_key}`;
    const [moviesUpcoming, setMoviesUpcoming] = useState([]);
    const [pageUpcoming, setPageUpcoming] = useState(0);

    const moviesPerPage = 5;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL_MOVIES_Upcoming)
            .then((res) => res.json())
            .then((data) => setMoviesUpcoming(data.results))
            .finally(() => setLoading(false));
    }, []);

    const currentMoviesUpcoming = moviesUpcoming.slice(
        pageUpcoming * moviesPerPage,
        (pageUpcoming + 1) * moviesPerPage
    );

    const handleNextUpcoming = () => {
        if ((pageUpcoming + 1) * moviesPerPage < moviesUpcoming.length) {
            setPageUpcoming((prev) => prev + 1);
        }
    };
    const handlePrevUpcoming = () => {
        if (pageUpcoming > 0) setPageUpcoming((prev) => prev - 1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-16 h-16 border-4 border-t-[#0097b2] border-gray-300 rounded-full animate-spin"></div>
            </div>
        );
    }
    return (
        <div className="p-5 my-5">
            <div className="flex flex-row space-x-20">
                {currentMoviesUpcoming.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative w-48 h-72 rounded-xl overflow-hidden group"
                    >
                        <a href={`/detail/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover transition-filter duration-300 group-hover:brightness-40"
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                                <h3 className="font-bold text-base">{movie.title}</h3>
                                <div className="flex flex-row justify-between">
                                    <p>{movie.release_date.split("-")[0]}</p>
                                    <p className="flex flex-row items-center font-semibold gap-2">
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
                                        {Math.floor(movie.vote_average * 10) / 10}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    onClick={handlePrevUpcoming}
                    disabled={pageUpcoming === 0}
                    className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-2 rounded-xl disabled:opacity-50 hover:bg-[#007a91] cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left-icon lucide-arrow-left mr-1"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>{" "}
                    Prev
                </button>
                <button
                    type="button"
                    onClick={handleNextUpcoming}
                    disabled={
                        (pageUpcoming + 1) * moviesPerPage >= moviesUpcoming.length
                    }
                    className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-3 rounded-xl disabled:opacity-50 hover:bg-[#007a91] cursor-pointer"
                >
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-icon lucide-arrow-right ml-1"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default UpcomingMovie;
