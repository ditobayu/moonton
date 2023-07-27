<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                "name" => "Batman In Love 1",
                "slug" => "batman-in-love1",
                "category" => "Romance",
                "video_url" => "https://www.youtube.com/watch?v=Eq6hoHywaM4",
                "thumbnail" => "https://i.ytimg.com/vi/KMWx15H0SFs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAQFWdrh73Hg6BTTkI8DJ96fAsBHw",
                "rating" => 9.5,
                "is_featured" => 1
            ],
            [
                "name" => "Batman In Love 2",
                "slug" => "batman-in-love2",
                "category" => "Romance",
                "video_url" => "https://www.youtube.com/watch?v=Eq6hoHywaM4",
                "thumbnail" => "https://i.ytimg.com/vi/KMWx15H0SFs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAQFWdrh73Hg6BTTkI8DJ96fAsBHw",
                "rating" => 9.3,
                "is_featured" => 0
            ],
            [
                "name" => "Batman In Love 3",
                "slug" => "batman-in-love3",
                "category" => "Romance",
                "video_url" => "https://www.youtube.com/watch?v=Eq6hoHywaM4",
                "thumbnail" => "https://i.ytimg.com/vi/KMWx15H0SFs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAQFWdrh73Hg6BTTkI8DJ96fAsBHw",
                "rating" => 9.2,
                "is_featured" => 0
            ],
        ];

        Movie::insert($movies);
    }
}
