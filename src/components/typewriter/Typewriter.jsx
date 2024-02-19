import React from "react";
import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <>
      <div>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi im Jay!")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteChars(4)
              .typeString("Your favourite uncle")
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Typewriter;
