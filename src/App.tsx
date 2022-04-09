import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Iphone 13 Pro",
      description: "Oh.So.Pro",
      imgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
    },
    {
      title: "iPhone SE",
      description: "Love the power. Love the price.",
      imgUrl:
        "https://www.apple.com/v/ipad/home/bw/images/overview/router_river/apple_tv_plus_river__fz3g2jn3adyu_large.jpg",
    },
    {
      title: "iPad Air",
      description: "Light. Bright. Full of might.",
      imgUrl:
        "https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg",
    },
  ];
  const bgAndFontColor = [
    {
      backgroundColor: "#fff",
      color: "#000",
    },
    {
      backgroundColor: "#000",
      color: "#fff",
    },
  ];

  return (
    <div className="App">
      <Carousel>
        {cards.map((item, index) => {
          let bg = index % 2 === 0 ? 1 : 0;
          return (
            <Card
              options={item}
              key={index}
              style={bgAndFontColor[bg] as React.CSSProperties}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
