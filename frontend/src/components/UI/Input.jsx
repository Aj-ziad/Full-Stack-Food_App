import React from "react";

export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  ...rest
}) {
  return (
    <div className={`flex mt-4 flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-500 bg-white"
        {...rest}
      />
    </div>
  );
}
