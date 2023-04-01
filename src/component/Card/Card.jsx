import React from "react";

const Card = ({handlerMark, card, readMark}) => {
  return (
    <div>
      <div className="card card-compact w-[700px] bg-base-100 shadow-2xl mb-4">
        <figure>
          <img src={card.img} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex  justify-between">
            <div className="flex flex-wrap ">
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={card.author}
                  alt=""
                />
              </div>
              <div className="ms-3">
                <h2>{card.name}</h2>
                <p>{card.date}</p>
              </div>
            </div>
            <div className="flex  items-center">
              <p>{card.ratings} min read</p>
              <button onClick={() => readMark(card)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <h2>{card.title}</h2>
          <div className="card-actions justify-start underline text-blue-700">
            <button onClick={() => handlerMark(card.ratings)}>
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
