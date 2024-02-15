import React, { useState } from "react";
import QRCode from "react-qr-code";

const Codegen = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode(e) {
    setQrCode(input);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate QR Code
        </button>
      </div>

      {/* qr code image */}
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={200}
          bgColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default Codegen;
