import React from "react";

function Buttons({ handleNext, handlePrevius, index }) {
  return (
    <div className="container-buttons">
      <button
        className={`button ${index === 0 && "color-off"}`}
        onClick={() => handlePrevius()}
        disabled={index === 0}
      >
         <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         
        >
          <path
            d="M6 -5.88703e-07L7.4 0.976428L3.85 3.36699L16 3.36699L16 4.71379L3.85 4.71379L7.4 7.10435L6 8.08078L5.24537e-07 4.04039L6 -5.88703e-07Z"
            className={`button ${index === 0 ? "flecha-off" : "flecha-on"}`}
          />
        </svg>
        Anterior
       
      </button>
      <button className="button" onClick={() => handleNext()}>
        Siguiente{" "}
        <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 -5.88703e-07L8.6 0.976428L12.15 3.36699L-6.11959e-07 3.36699L-4.37114e-07 4.71379L12.15 4.71379L8.6 7.10435L10 8.08078L16 4.04039L10 -5.88703e-07Z"
            fill="#EF552A"
          />
        </svg>
      </button>
    </div>
  );
}

export default Buttons;
