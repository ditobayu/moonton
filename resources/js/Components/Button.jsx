import React from "react";
import PropTypes from "prop-types";

const Button = ({
    className = "",
    type = "submit",
    variant = "primary",
    processing,
    children,
}) => {
    return (
        <button
            type={type}
            className={`rounded-2xl px-4 py-[13px] text-center ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
