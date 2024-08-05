import React from "react";
import {
  HeroImg,
  NoodlesImg,
  PlayIcons,
  SaladImg,
  StarHidden,
  StarIcons,
} from "../assets/data";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-2 justify-between items-center">

        {/* Hero => left */}
        <div className="space-y-12">
          <h1 className="leading-[90px]">
            Dive into Delights Of Delectable{" "}
            <span className="text-green-300">Food</span>
          </h1>
          <p className="text-grey-200">
            Where Each Plate Weaves a Story of Culinary <br /> Mastery and
            Passionate Craftsmanship
          </p>
          <div className="flex items-center gap-8">
            <button className="btn-green shadow-green-btn hover:bg-white hover:text-green-300 duration-300">
              Order Now
            </button>
            <p className="text-grey-200">Watch Video</p>
            <button className="w-20 h-20 bg-green-white flex justify-center items-center shadow-btn">
              <img src={PlayIcons} alt="play video" />
            </button>
          </div>
        </div>

        {/* Hero => right */}
        <div>
          {/* Hot = btn */}
          <button className="font-semibold bg-[#FBFBFB] text-red text-xl py-3 px-5 shadow-btn rounded-ee-md translate-y-48 -translate-x-20">
            Hot spicy Food 🌶
          </button>

          {/* Hero = Img */}
          <div>
            <img className="" src={HeroImg} alt="hero-img" />
          </div>

          {/* Spicy noodles = Vegetarian salad */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 shadow-hero-card py-3 px-6 rounded-2xl bg-white -translate-y-12 translate-x-10">
              <div>
                <img className="w-20" src={NoodlesImg} alt="noodles" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">Spicy noodles</p>
                <div className="flex items-center">
                  <img src={StarIcons} alt="star" />
                  <img src={StarIcons} alt="star" />
                  <img src={StarIcons} alt="star" />
                  <img src={StarHidden} alt="star hidden" />
                  <img src={StarHidden} alt="star hidden" />
                </div>
                <p className="text-grey-200 text-xl font-semibold">
                  <span className="text-red text-base font-semibold">$</span>
                  18.00
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shadow-hero-card py-3 px-7 rounded-2xl bg-white -translate-y-12 translate-x-12">
              <div>
                <img className="w-20" src={SaladImg} alt="noodles" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">Vegetarian salad</p>
                <div className="flex items-center">
                  <img src={StarIcons} alt="star" />
                  <img src={StarIcons} alt="star" />
                  <img src={StarIcons} alt="star" />
                  <img src={StarIcons} alt="star hidden" />
                  <img src={StarHidden} alt="star hidden" />
                </div>
                <p className="text-grey-200 text-xl font-semibold">
                  <span className="text-red text-base font-semibold">$</span>{" "}
                  23.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
