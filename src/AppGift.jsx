import React, { useState } from "react";
import Addcategory from "./components/Addcategory";
import GiftGrid from "./components/GiftGrid";

const AppGift = () => {
  const [categories, setcategories] = useState(["Real Madrid"]);

  const OnAddCategory = (elemento) => {
    if (categories.includes(elemento)) return;
    setcategories([elemento, ...categories]);
  };

  return (
    <>
      <h1>APP DE GIF</h1>

      <Addcategory onNewAdd={OnAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};

export default AppGift;
