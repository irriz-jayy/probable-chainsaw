import React, { useState } from "react";
import { HashLoader } from "react-spinners";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#000000");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <HashLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingScreen;
