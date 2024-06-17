import React, { useState } from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--clr-1"?: string;
  "--clr-2"?: string;
  "--clr-3"?: string;
  "--clr-4"?: string;
  "--clr-5"?: string;
}

interface Props {
  title: string;
  icon: string;
  gradientColors: string[];
  dropdownContent: JSX.Element; // New property for dropdown content
}

export default function DropDownLink({
  title,
  gradientColors,
  icon,
  dropdownContent,
}: Props) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown

  const style: CustomCSSProperties = {
    "--clr-1": gradientColors[0],
    "--clr-2": gradientColors[1],
    "--clr-3": gradientColors[2],
    "--clr-4": gradientColors[3],
    "--clr-5": gradientColors[4],
  };

  return (
    <div className="flex pt-1 pb-5 w-full z-10 group">
      <div className="w-full">
        <div
          className="group relative flex justify-center items-center w-full rounded-xl h-[60px] card"
          style={style}
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
        >
          <div
            className="absolute flex bg-black flex -top-2 -right-2
            justify-center items-center w-full h-full rounded-xl z-10
            duration-200 group-hover:-top-1 group-hover:-right-1"
          >
            <img
              src={`../public/${icon}`}
              className="absolute left-5 h-6 w-6"
            />
            <span className="text-white text-xl font-h2">{title}</span>
          </div>
        </div>
        {isOpen && <div className="dropdown-content">{dropdownContent}</div>} // Conditional rendering of dropdown
      </div>
    </div>
  );
}
