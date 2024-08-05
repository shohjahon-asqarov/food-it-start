import React from "react";
import {
  BreckFastIcons,
  BrowsAllIcons,
  BurgerIcons,
  DesertIcons,
  praducts,
} from "../assets/data";
const Catagories = () => {
  return (
    <section>
      <div className="container mt-32">
        <div className=" space-y-8 text-center">
          <p className="subtitle">CUSTOMER FAVORITES</p>
          <h2>Popular Catagories</h2>
        </div>
        <ul className="grid grid-cols-4 items-center gap-10 justify-between mt-24 mb-10">
          {
            praducts.map(i => {
              return(
                <li className="shadow-catalog-card py-7 rounded-3xl text-center space-y-3">
                  <img className="mx-auto w-32 h-32 p-5 bg-green-100 rounded-full" src={i.img} alt={i.tittle} />
                  <h3 className="text-[#1E1E1E]">{i.tittle}</h3>
                  <p className="text-grey-200 text-xl">{i.all}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Catagories;
