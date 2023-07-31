import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, flash, movies }) => {
    return (
        <Authenticated auth={auth}>
            <h1>Movie Index</h1>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button className="w-40 mb-8">Insert New</Button>
            </Link>
            {flash?.message && <FlashMessage message={flash.message} />}
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    alt="thumbnail"
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Button type="button" variant="danger">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
};

export default Index;
