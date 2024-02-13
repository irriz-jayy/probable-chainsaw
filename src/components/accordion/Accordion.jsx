import React, { useState } from "react";
import data from "./data";

// single selection accordion

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    // added conditional rendering to allow it to show and hide if selected
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    // wrapper
    <div className="w-3/4 ">
      <p className="text-xl text-center">FAQs</p>
      {/* accordion */}
      <div className="">
        {data.map((dataItem) => (
          // item
          <div
            key={dataItem.id}
            className="border bg-blue-800 cursor-pointer transition-all duration-4000"
          >
            {" "}
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="h-20 flex justify-between items-center p-2 font-bold"
              //   title
            >
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {/* answer */}
            {selected === dataItem.id ? (
              // answer content
              <div className="bg-blue-500 min-h-24 flex items-center p-2">
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
