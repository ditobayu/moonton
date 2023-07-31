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

const Create = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1>Insert a Movie</h1>
            <hr className="my-4" />
            <form className="flex flex-col gap-4" onSubmit={submit}>
                <div>
                    <Label forInput="name" value="name" />
                    <Input
                        type="text"
                        name="name"
                        placeholder="name"
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
                        variant="primary-outline"
                        isError={errors.video_url}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div>
                    <Label forInput="thumbnail" value="thumbnail" />
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
                        variant="primary-outline"
                        isError={errors.rating}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Label forInput="is_featured" value="is_featured" />
                    {/* <Input
                        type="number"
                        name="is_featured"
                        placeholder="is_featured"
                        variant="primary-outline"
                        isError={errors.is_featured}
                        handleChange={onHandleChange}
                    /> */}
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
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

export default Create;
