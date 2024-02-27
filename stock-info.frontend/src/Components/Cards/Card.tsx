import React from "react";

type Props = {};

export const Card = (props: Props) => {
  return (
    <div className="mt-6 w-96 rounded max-w-sm shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt="Playing cards"
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="description">Apple Inc.</p>
    </div>
  );
}
export default Card;