import React from "react";

export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-500 bg-white/5"
        {...rest}
      />
    </div>
  );
}
