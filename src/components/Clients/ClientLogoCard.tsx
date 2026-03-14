import React from "react";
import chandigarhSquare from "@/assets/Chandigarh Square.png";

const ClientLogoCard = ({ project }: any) => {
  return (
    <div className="flex items-center justify-center p-6 bg-white border border-stone-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 aspect-[3/2]">
      <img
        src={chandigarhSquare}
        alt="Chandigarh Square"
        className="max-w-[200px] h-auto object-contain"
      />
    </div>
  );
};

export default ClientLogoCard;