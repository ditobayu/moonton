import FeaturedMovies from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import React from "react";
import Flickity from "react-flickity-component";

const Dashboard = ({ auth, featuredMovies, movies }) => {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                        {featuredMovies.map((val) => (
                            <FeaturedMovies
                                key={val.id}
                                slug={val.slug}
                                thumbnail={val.thumbnail}
                                name={val.name}
                                rating={val.rating}
                                category={val.category}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                        {movies.map((val, i) => (
                            <MovieCard
                                key={val.id}
                                slug={val.slug}
                                thumbnail={val.thumbnail}
                                name={val.name}
                                category={val.category}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
};

export default Dashboard;
