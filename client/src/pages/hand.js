import React from "react";
import "./hand.css";

const Hand = () => {
  return (
    <div>
      <div className="handP2">
        <div id="ace" className="card black">
          <div className="valueP2">A</div>
        </div>
        <div className="card red">
          <div className="valueP2">A</div>
        </div>
        <div className="card black">
          <div className="valueP2">A</div>
        </div>
        <div className="card red">
          <div className="valueP2">A</div>
        </div>
        <div className="card red">
          <div className="valueP2">A</div>
        </div>
      </div>

      <div className="handP1">
        <div className="card-selected">
          <div className="valueP1">A</div>
        </div>
      </div>
    </div>
  );
};

export default Hand;
