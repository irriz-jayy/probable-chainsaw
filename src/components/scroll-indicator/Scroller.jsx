import React, { useEffect, useState } from "react";

const Scroller = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);

    console.log(scrollPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div>
      <div className="fixed  text-center bg-white top-0 z-10">
        <h1 className="text-2xl font-bold ">Custom scroll indicator</h1>
        <div className="w-full h-12 bg-yellow-400">
          <div
            style={{ width: `${scrollPercentage}%` }}
            className="h-12 bg-purple-400 w-0"
          ></div>
        </div>

        <div>
          {data && data.length > 0
            ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
