import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeddingCard from "./components/WeddingCard";
import weddingData from "./data";

function App() {
  return (
    <div className="container mt-5">
      <WeddingCard
        groom={weddingData.groom}
        father={weddingData.father}
        brothers={weddingData.brothers}
      />
    </div>
  );
}

export default App;
