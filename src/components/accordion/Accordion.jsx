import React, { useState } from "react";
import data from "./data";

// single selection accordion

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item">
            <div className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
