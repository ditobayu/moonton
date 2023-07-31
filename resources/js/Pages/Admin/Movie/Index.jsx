import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, flash }) => {
    return (
        <Authenticated auth={auth}>
            <h1>Movie Index</h1>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button className="w-40 mb-8">Insert New</Button>
            </Link>
            {flash?.message && <FlashMessage message={flash.message} />}
        </Authenticated>
    );
};

export default Index;
