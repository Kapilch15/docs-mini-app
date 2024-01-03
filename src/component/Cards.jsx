import React from "react";
import { MdDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Cards = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceDamping: 30 }}
        className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden text-white px-8 py-10"
      >
        <FaRegFileAlt />
        <p className="text-sm  font-semibold leading-tight mt-5 ">
          {data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5>{data.fileSize}</h5>
            <span className="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <MdDownload size={"0.9em"} color="#000" />
              )}
            </span>
          </div>

          {data.tag?.isOpen && (
            <div
              className={`tag flex justify-center items-center w-full py-4 ${
                data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-500"
              }`}
            >
              <h3 className="text-sm font-semibold">{data.tag?.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Cards;
