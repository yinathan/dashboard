import React from "react";
import "./styles.css";
import Reviews from "./components/Reviews"
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";
import Sidebar from "./components/Sidebar";
import WebsiteVisitors from "./components/WebsiteVisitors";




function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className="grid">
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
      </div>
        <WebsiteVisitors />
    </div>
  );
}

export default App;
