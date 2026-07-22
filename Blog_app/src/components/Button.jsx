import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {

    return (
        <button
            type={type}
            className={` px-5 py-2.5 rounded-xl font-semibold ${bgColor} ${textColor} shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className} `}
            {...props}
        >
            {children}
        </button>
    );
}