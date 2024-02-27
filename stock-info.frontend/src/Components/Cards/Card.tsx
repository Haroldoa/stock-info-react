import React from "react";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
};

export const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className="mt-6 w-96 rounded max-w-sm shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt="Playing cards"
      />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="description">Apple Inc.</p>
    </div>
  );
}
export default Card;