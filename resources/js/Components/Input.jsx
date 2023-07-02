import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    handleChange: PropTypes.func,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function Input({
    type = "text",
    className = "",
    name,
    value,
    autoComplete,
    required,
    handleChange,
    isFocused = false,
    defaultValue,
    variant = "primary",
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}
