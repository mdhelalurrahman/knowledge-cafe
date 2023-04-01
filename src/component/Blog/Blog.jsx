import {data} from "autoprefixer";
import React, {useEffect, useState} from "react";
import Card from "../Card/Card";

const Blog = ({handlerMark, readMark}) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <div>
        {cards.map((card) => (
          <Card
            card={card}
            readMark={readMark}
            handlerMark={handlerMark}
            key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
