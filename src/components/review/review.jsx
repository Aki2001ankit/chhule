import React from "react";
import Imagesection from "./imagesection";
import Writtensection from "./writtensection";

export default function App() {
  return (
    <>
      <div className="row">
        <Imagesection />
        <Writtensection />
      </div>
      <div className="bg-border-bottom"></div>
    </>
  );
}
