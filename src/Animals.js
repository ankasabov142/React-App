import React from "react";

export default function Animals({ animals }) {
  return animals.map(({ name, isMammal }) => {
    let bool = "";
    if (isMammal == true ? (bool = "true") : (bool = "false"))
      return (
    <div className="animalDiv">
      <h1 className="animalHeading">
          {" "}
          The {name} is mammal-{bool}
        </h1>
    </div>
        
      );
  });
}
