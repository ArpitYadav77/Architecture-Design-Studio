import React from "react";
import { ProjectData } from "@/data/projects";

interface ClientLogoCardProps {
  project: ProjectData;
}

const ClientLogoCard: React.FC<ClientLogoCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white border border-stone-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group aspect-[3/2] text-center">
      {/* Visual representation of a logo/project; using text. Grayscale and zoom/color effects applied */}
      <div className="w-full h-full flex flex-col items-center justify-center filter grayscale transition-all duration-300 group-hover:grayscale-0">
        <span className="font-serif font-semibold text-sm md:text-base text-stone-600 group-hover:text-accent transition-colors duration-300 px-2 leading-tight uppercase">
          {project.title}
        </span>
        {(project.client || project.location) && (
          <span className="text-[10px] md:text-xs text-stone-400 mt-2 uppercase tracking-widest group-hover:text-stone-500 transition-colors duration-300">
            {project.client || project.location}
          </span>
        )}
      </div>
      <span className="sr-only">Project: {project.title}</span>
    </div>
  );
};

export default ClientLogoCard;
