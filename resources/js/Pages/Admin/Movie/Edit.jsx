import Authenticated from "@/Layouts/Authenticated";
import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

const Edit = ({ auth, movie }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        ...movie,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        put(route("admin.dashboard.movie.update", movie.id), {
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Edit Movie" />
            <h1>Update Movie: {movie.name}</h1>
            <hr className="my-4" />
            <form className="flex flex-col gap-4" onSubmit={submit}>
                <div>
                    <Label forInput="name" value="name" />
                    <Input
                        type="text"
                        name="name"
                        placeholder="name"
                        defaultValue={movie.name}
                        variant="primary-outline"
                        isError={errors.name}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <Label forInput="category" value="category" />
                    <Input
                        type="text"
                        name="category"
                        placeholder="category"
                        defaultValue={movie.category}
                        variant="primary-outline"
                        isError={errors.category}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>
                <div>
                    <Label forInput="video_url" value="video_url" />
                    <Input
                        type="url"
                        name="video_url"
                        placeholder="video_url"
                        defaultValue={movie.video_url}
                        variant="primary-outline"
                        isError={errors.video_url}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div>
                    <Label forInput="thumbnail" value="thumbnail" />
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        alt="thumbnail"
                        className="w-40"
                    />
                    <Input
                        type="file"
                        name="thumbnail"
                        placeholder="thumbnail"
                        variant="primary-outline"
                        isError={errors.thumbnail}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div>
                    <Label forInput="rating" value="rating" />
                    <Input
                        type="number"
                        name="rating"
                        placeholder="rating"
                        defaultValue={movie.rating}
                        variant="primary-outline"
                        isError={errors.rating}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Label forInput="is_featured" value="is_featured" />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={data.is_featured}
                    />
                    <InputError message={errors.is_featured} className="mt-2" />
                </div>
                <Button type="submit" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
};

export default Edit;
