import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import '../css/SliderMovies.css'

function FadeSlideMovies() {
    const api_key = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL_MOVIES_TRENDING = `${BASE_URL}/trending/movie/day?api_key=${api_key}`;
    const [moviesTrending, setMoviesTrending] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch(API_URL_MOVIES_TRENDING)
            .then((res) => res.json())
            .then((data) => setMoviesTrending(data.results))
            .finally(() => setLoading(false));
    }, [API_URL_MOVIES_TRENDING])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-16 h-16 border-4 border-t-[#0097b2] border-gray-300 rounded-full animate-spin"></div>
            </div>
        );
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 640, // phones
                settings: {
                    dots: false // show dots on mobile devices
                }
            }
        ]
    };
    return (
        <div className="slider-container w-full rounded-lg my-6 sm:my-8 md:my-10 lg:w-4xl lg:mx-auto lg:rounded-2xl">
            <Slider {...settings}
            >
                {moviesTrending.map((movietr) => (
                    <div key={movietr.id} className="relative">
                        <img
                            src={movietr.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${movietr.backdrop_path}`
                                : 'https://placehold.co/1280x720/000000/FFFFFF?text=Backdrop+Not+Found'}
                            alt={movietr.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-lg" />
                        <div className="absolute bottom-0 flex flex-col sm:flex-row p-3 sm:p-4 w-full">
                            <img
                                src={movietr.poster_path
                                    ? `https://image.tmdb.org/t/p/original/${movietr.poster_path}`
                                    : 'https://placehold.co/200x300/000000/FFFFFF?text=Poster+Not+Found'}
                                alt=""
                                className="w-[40px] h-[60px] sm:w-[50px] sm:h-[70px] lg:w-25 lg:h-38 rounded-xl self-start"
                            />
                            <div className="mx-0 sm:mx-5 mt-3 sm:mt-0">
                                <h2 className="text-[#0097b2] text-sm font-semibold sm:text-lg md:text-xl lg:text-3xl lg:font-bold">
                                    {movietr.title}
                                </h2>
                                <p className="text-white text-xs mt-2 sm:text-sm md:mt-3 lg:block">
                                    {movietr.overview.slice(0, 80) + "..."}
                                </p>
                                <div className="flex flex-row mt-2 sm:mt-3 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 items-center">
                                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg lg:font-semibold flex flex-row gap-1 sm:gap-2 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="yellow"
                                            stroke="yellow"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star-icon lucide-star w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[22px]"
                                        >
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                        </svg>
                                        {Math.floor(movietr.vote_average * 10) / 10}
                                    </p>
                                    <p className="flex flex-row gap-1 sm:gap-2 text-white text-xs sm:text-sm md:text-base lg:text-base lg:font-semibold items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-calendar-icon lucide-calendar w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[22px]"
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
                        </div>
                        <a
                            href={`/detail/${movietr.id}`}
                            className="absolute bottom-4 right-4 bg-[#0097b2] text-white text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl"
                        >
                            Detail
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FadeSlideMovies;
