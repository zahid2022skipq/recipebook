import React from "react";
import banner from "../../Assests/home-image.jpg";
import { FaChartLine } from "react-icons/fa";

const CarouselComponent = () => {
  return (
    <div className="flex justify-center mt-20 mb-20">
      <img src={banner} alt="banner" height={600} width={800} />

      <div className="bg-zinc-600 absolute font-bold mt-96 text-white p-5">
        <h1 className=" text-6xl font-bold  text-white opacity-100">
          Pancakes for Breakfast
        </h1>
      </div>
    </div>
  );
};

export default CarouselComponent;
