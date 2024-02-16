import React from "react";
import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <div>
      <TypewriterComponent
        options={{
          strings: ["Hey im Jay your favorite cousin"], // Your text here
          autoStart: true, // Start typing automatically
          loop: true, // Repeat the typing animation
          cursor: "", // Hide the cursor
          typeSpeed: 70, // Typing speed in milliseconds
          delay: 70, // Delay between each character in milliseconds
        }}
      />
    </div>
  );
};

export default Typewriter;
