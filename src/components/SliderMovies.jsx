import Slider from "react-slick";
import React, { useEffect, useState } from "react";

function FadeSlide() {
    const api_key = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL_MOVIES_TRENDING = `${BASE_URL}/trending/movie/week?api_key=${api_key}`;
    const [moviesTrending, setMoviesTrending] = useState([]);

    useEffect(()=>{
        fetch(API_URL_MOVIES_TRENDING)
        .then((res) => res.json())
        .then((data) => setMoviesTrending(data.results))
        .catch((err) => console.log(err));
    },[])

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="slider-container w-4xl mx-auto my-10 rounded-2xl">
            <Slider {...settings}>
                {moviesTrending.map((movietr) => (
                    <div key={movietr.id} className="relative">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movietr.backdrop_path}`}
                            alt={movietr.title}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-2xl" />
                        <div className="absolute bottom-0 flex flex-row p-4">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movietr.poster_path}`}
                                alt=""
                                className="w-25 h-38 rounded-xl"
                            />
                            <div className="mx-5 mt-3">
                                <h2 className="text-[#0097b2] text-2xl font-bold">
                                    {movietr.title}
                                </h2>
                                <p className="text-white text-sm mt-3">
                                    {movietr.overview.slice(0, 150) + "..."}
                                </p>
                                <div className="flex flex-row mt-3 space-x-10 items-center">
                                    <p className="text-white text-lg font-semibold flex flex-row gap-2 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
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
                                        {Math.floor(movietr.vote_average * 10) / 10}
                                    </p>
                                    <p className="flex flex-row gap-2 text-white font-semibold items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-calendar-icon lucide-calendar"
                                        >
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <path d="M3 10h18" />
                                        </svg>
                                        {movietr.release_date}
                                    </p>
                                </div>
                            </div>
                            <a
                                href=""
                                className="bg-[#0097b2] text-white mt-auto py-2 px-3 rounded-xl"
                            >
                                Detail
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FadeSlide;
