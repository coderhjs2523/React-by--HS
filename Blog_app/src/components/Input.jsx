import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {

  const id = useId();

  return (
    <div className="w-full">

      {label && (
        <label
          className="
            block
            mb-2
            text-sm
            font-semibold
            text-gray-700
          "
          htmlFor={id}
        >
          {label}
        </label>
      )}


      <input
        type={type}
        className={` w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder:text-gray-400 border border-gray-200 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${className} `}
        ref={ref}
        {...props}
        id={id}
      />

    </div>
  );
});

export default Input;
