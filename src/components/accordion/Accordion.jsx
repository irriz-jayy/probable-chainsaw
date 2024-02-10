import React, { useState } from "react";
import data from "./data";

// single selection accordion

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item">
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="title"
            >
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {selected === dataItem.id ? (
              <div className="content">
                <p>{dataItem.answer}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
