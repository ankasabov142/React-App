import "./App.css";
import "./Animals.css";
import Animals from "./Animals";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  const animals = [
    { name: "Lion", isMammal: true },
    { name: "Snake", isMammal: false },
    { name: "Dolphin", isMammal: true },
    { name: "Crocodile", isMammal: false },
    { name: "Elephant", isMammal: true },
    { name: "Shark", isMammal: false },
    { name: "Gorilla", isMammal: true },
    { name: "Parrot", isMammal: false },
    { name: "Kangaroo", isMammal: true },
    { name: "Tiger", isMammal: true },
    { name: "Penguin", isMammal: false },
    { name: "Hippopotamus", isMammal: true },
  ];

  return (
    <>
      <div className="animalContainer">
        <h1>The animal Kingdom</h1>

        <Animals animals={animals} />
      </div>
    </>
  );
}

export default App;
