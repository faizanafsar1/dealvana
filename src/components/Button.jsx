import clsx from "clsx";
import { useMemo } from "react";

export default function Button({ style, label }) {
  const buttonStyle = useMemo(() => {
    switch (style) {
      case "primary":
        return "bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white";
      case "secondary":
        return "border-primary-light text-primary-light";
    }
  }, [style]);
  return (
    <button
      className={clsx(
        buttonStyle,
        "cursor-pointer duration-300 hover:scale-105 border-2 px-6 py-3 rounded-md font-semibold"
      )}
    >
      {label}
    </button>
  );
}
