import React from "react";

const FlashMessage = ({ className, message = "" }) => {
    return (
        <div className="flex bg-green-100 text-green-700 rounded p-4 mb-4 text-sm">
            {message}
        </div>
    );
};

export default FlashMessage;
