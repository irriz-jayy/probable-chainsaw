import React, { useEffect, useState } from "react";

const Scroller = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return <div>Scroller</div>;
};

export default Scroller;
