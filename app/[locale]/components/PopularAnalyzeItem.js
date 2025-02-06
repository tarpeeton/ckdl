"use client";
import { SlBasket } from "react-icons/sl";
import HouseCall from "./Modals/HouseCall";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cardSlice";

export default function PopularAnalyzeItem({ locale, title,description, slug, price}) {
  const [houseCall, setHouseCall] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const item = {
      id: slug, 
      name: title, 
      fee: price, 
      count: 1, 
    };
    dispatch(addToCart(item));
  };
    // Redux'dan shu itemga tegishli count ni olish
    const itemInCart = useSelector((state) =>
      state.cart.items.find((item) => item.id === slug)
    );
    const count = itemInCart ? itemInCart.count : 0;
  return (
    <>
      {houseCall ? <HouseCall setState={setHouseCall} /> : <></>}
      <div
        className="w-full flex flex-col justify-between p-4 gap-16 border border-[#E4E4E4] rounded-3xl"
      >
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="line-clamp-5">{description}</p>
        </div>
        <div className="w-full flex gap-2 items-center gap-x-5">
          <button
            onClick={(e) => {
              e.preventDefault();
              setHouseCall(true);
            }}
            className="text-lg text-white font-semibold rounded-full py-2 px-4 bg-[#FB6A68]"
          >
            {locale === 'ru' ? "Сдать из дома" : "Uyga Chaqirish"}
          </button>
          <button
            onClick={handleAddToCart}
            className={`${count < 10 && count>10 ? "disabled:inset-0 bg-red-500" : ""} bg-red-400 text-center hover:bg-red-500  text-white p-3 rounded-[10px] relative`}
          >
            <SlBasket className="text-center mx-auto" size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-[2px] bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="w-full flex justify-between">
        {price != null ? (
          <p className="bg-rose-100 text-rose-400 font-bold py-1 rounded-full px-4">
            {formattedPrice} сум
          </p>
        ) : <div></div>}
        <div>
          <Image
            src={backet}
            width={100}
            height={100}
            alt="Basket Icon"
            className="w-8 h-8"
          />
        </div>
      </div> */
}
