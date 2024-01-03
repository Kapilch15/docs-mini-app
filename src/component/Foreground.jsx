import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae dgdgf edtertrg.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae dgdgf edtertrg.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae dgdgf edtertrg.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae dgdgf edtertrg.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed flex flex-wrap gap-12 top-0 left-0 z-30 w-full h-full"
      >
        {data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
