import React from "react";
import "./style.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import datas from "./data";

export default function App() {
  const cards = datas.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <div className="container">
        <NavBar />
        <Hero />
        <div className="cards-list">{cards}</div>
      </div>
    </div>
  );
}

//         title={data.title}
// description={data.description}
// price={data.price}
// img={data.coverImg}
// rating={data.stats.rating}
// reviewCount={data.stats.reviewCount}
// location={data.location}
// openSpots={data.openSpots}
