import React, { useEffect, useState } from "react";

export default function ListMovies() {
    const api_key = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL_MOVIES_TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${api_key}`;
    const API_URL_MOVIES_POPULAIRE = `${BASE_URL}/movie/popular?api_key=${api_key}`;
    const API_URL_MOVIES_UPCOMING = `${BASE_URL}/movie/upcoming?api_key=${api_key}`;
    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [moviesPopulaire, setMoviesPopulaire] = useState([]);
    const [moviesUpcoming, setMoviesUpcoming] = useState([]);
    const [pageTopRated, setPageTopRated] = useState(0);
    const [pagePopulaire, setPagePopulaire] = useState(0);
    const [pageUpcoming, setPageUpcoming] = useState(0);
    const moviesPerPage = 5;


    useEffect(() => {
        fetch(API_URL_MOVIES_TOP_RATED)
            .then((res) => res.json())
            .then((data) => setMoviesTopRated(data.results))
            .catch((err) => console.log(err));

        fetch(API_URL_MOVIES_POPULAIRE)
            .then((res) => res.json())
            .then((data) => setMoviesPopulaire(data.results))
            .catch((err) => console.log(err));

        fetch(API_URL_MOVIES_UPCOMING)
            .then((res) => res.json())
            .then((data) => setMoviesUpcoming(data.results))
            .catch((err) => console.log(err));
    });

    const currentMoviesTopRated = moviesTopRated.slice(
        pageTopRated * moviesPerPage,
        (pageTopRated + 1) * moviesPerPage
    );
    const currentMoviesPopulaire = moviesPopulaire.slice(
        pagePopulaire * moviesPerPage,
        (pagePopulaire + 1) * moviesPerPage
    );
    const currentMoviesUpcoming = moviesUpcoming.slice(
        pageUpcoming * moviesPerPage,
        (pageUpcoming + 1) * moviesPerPage
    );

    const handleNextTopRated = () => {
        if ((pageTopRated + 1) * moviesPerPage < moviesTopRated.length) {
            setPageTopRated(prev => prev + 1);
        }
    };
    const handlePrevTopRated = () => {
        if (pageTopRated > 0) setPageTopRated(prev => prev - 1);
    };

    const handleNextPopulaire = () => {
        if ((pagePopulaire + 1) * moviesPerPage < moviesPopulaire.length) {
            setPagePopulaire(prev => prev + 1);
        }
    };
    const handlePrevPopulaire = () => {
        if (pagePopulaire > 0) setPagePopulaire(prev => prev - 1);
    };

    const handleNextUpcoming = () => {
        if ((pageUpcoming + 1) * moviesPerPage < moviesUpcoming.length) {
            setPageUpcoming(prev => prev + 1);
        }
    };
    const handlePrevUpcoming = () => {
        if (pageUpcoming > 0) setPageUpcoming(prev => prev - 1);
    };

    return <>
        <div>
            <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">Top Rated Movies</h2>
            <div className="p-5 my-5">
                <div className="flex flex-row space-x-20">
                    {currentMoviesTopRated.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={handlePrevTopRated}
                        disabled={pageTopRated === 0}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-2 rounded-xl disabled:opacity-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left mr-1"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>                         Prev
                    </button>
                    <button
                        type="button"
                        onClick={handleNextTopRated}
                        disabled={((pageTopRated + 1) * moviesPerPage) >= moviesTopRated.length}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-3 rounded-xl disabled:opacity-50"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">Populaire Movies</h2>
            <div className="p-5 my-5">
                <div className="flex flex-row space-x-20">
                    {currentMoviesPopulaire.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={handlePrevPopulaire}
                        disabled={pagePopulaire === 0}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-2 rounded-xl disabled:opacity-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left mr-1"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        Prev
                    </button>
                    <button
                        type="button"
                        onClick={handleNextPopulaire}
                        disabled={((pagePopulaire + 1) * moviesPerPage) >= moviesPopulaire.length}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-3 rounded-xl disabled:opacity-50"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h2 className="text-4xl text-[#0097b2] font-bold font-acthand">Upcoming Movies</h2>
            <div className="p-5 my-5">
                <div className="flex flex-row space-x-20">
                    {currentMoviesUpcoming.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={handlePrevUpcoming}
                        disabled={pageUpcoming === 0}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-2 rounded-xl disabled:opacity-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left mr-1"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        Prev
                    </button>
                    <button
                        type="button"
                        onClick={handleNextUpcoming}
                        disabled={((pageUpcoming + 1) * moviesPerPage) >= moviesUpcoming.length}
                        className="flex flex-row text-lg font-semibold items-center bg-[#0097b2] text-white py-2 px-3 rounded-xl disabled:opacity-50"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </>;
}
