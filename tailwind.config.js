import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            poppins: "Poppins, sans-serif",
        },
        extend: {
            screens: {
                laptopLg: "1160px",
                laptopXl: "1360px",
            },
        },
    },

    plugins: [forms],
};
