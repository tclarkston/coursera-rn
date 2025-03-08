import React from "react";

function FruitsCounter(props) {
  const len = props.fruits.length;

  return (
    <div>
      <h3>{`There ${
        len === 1 ? "is " : "are: "
      } ${len} item/s in the cart`}</h3>
    </div>
  );
}

export default FruitsCounter;
