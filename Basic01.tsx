import React from "react";
import imagebasic from "./1.jpg";
// import "./App.css";
type Props = {
};

function Basic01({}: Props) {
  return (
    <main>
      <div className="basic01">
        <img src={imagebasic} alt="" />
        <p>
          <h2>Clothing and Apparel</h2>
          <ul className={"mt-5"}>
            <li className={"mb-3"}>Accessory</li>
            <li className={"mb-3"}>Bags</li>
            <li className={"mb-3"}>Kid's fashion</li>
            <li className={"mb-3"}>Mens</li>
          </ul>
        </p>
      </div>
    </main>
  );
}

export default Basic01;