
import React from "react";

export default function Button({
  children,
  className = "",
  textOnly = false,
  type = "button",
  ...props
}) {
 
  const base =
    "w-1/2 py-3 rounded-lg " ;
  const filled =
    "bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 focus:ring-orange-400";
  const textStyle = "font-semibold text-black hover:underline";

  const style = `${base} ${textOnly ? textStyle : filled} ${className}`;

  return (
    <button type={type} style={{ backgroundColor: "#ffc304" }} className={style} {...props}>
      {children}
    </button>
  );
}
