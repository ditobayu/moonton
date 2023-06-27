export default function Label({ value, className = "", children, forInput }) {
    return (
        <label
            htmlFor={forInput}
            className={`block text-base mb-2 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
