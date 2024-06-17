import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--clr-1"?: string;
  "--clr-2"?: string;
  "--clr-3"?: string;
  "--clr-4"?: string;
  "--clr-5"?: string;
}

interface Props {
  title: string;
  links: string[];
  icon: string;
  gradientColors: string[];
}

export default function LinkToSocial({
  title,
  links,
  gradientColors,
  icon,
}: Props) {
  const style: CustomCSSProperties = {
    "--clr-1": gradientColors[0],
    "--clr-2": gradientColors[1],
    "--clr-3": gradientColors[2],
    "--clr-4": gradientColors[3],
    "--clr-5": gradientColors[4],
  };

  return (
    <div className="flex pt-1 pb-5 w-full z-10 group">
      <a href={links[0]} target="_blank" className="w-full">
        <div
          className="group relative flex justify-center items-center w-full rounded-xl h-[60px] card"
          style={style}
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
      </a>
    </div>
  );
}
