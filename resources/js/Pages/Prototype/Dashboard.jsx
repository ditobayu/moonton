import FeaturedMovies from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import React from "react";
import Flickity from "react-flickity-component";

const Dashboard = () => {
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
            <Authenticated>
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
                        {[1, 2, 3, 4].map((val) => (
                            <FeaturedMovies
                                key={val}
                                slug={"the-batman-in-love"}
                                thumbnail={"/images/featured-1.png"}
                                name={`Batman in love ${val}`}
                                rating={val + 1}
                                category={"horror"}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px] " options={flickityOption}>
                        {[1, 2, 3, 4, 5, 6].map((val, i) => (
                            <MovieCard
                                key={i}
                                slug={"the-batman-in-love"}
                                thumbnail={"/images/featured-1.png"}
                                name={`Batman in love ${val}`}
                                category={"horror"}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
};

export default Dashboard;
