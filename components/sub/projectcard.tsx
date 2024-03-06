import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tools : string;
}

const ProjectCard = ({ src, title, description, tools }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[35rem] ml-[10px]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="w-full  object-cover"
      />

      <div className="relative p-4  w-15">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <p className="mt-2 text-gray-300"><b>Tools Used:</b> {tools}</p>
      </div>
    </div>
  );
};

export default ProjectCard;