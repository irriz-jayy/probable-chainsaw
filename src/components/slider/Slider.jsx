import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Slider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);

        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);

  if (loading) {
    return (
      <img
        src="https://media1.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952tz043423gbqygsdtlqyttyod4gyzd3j6u1185sif&ep=v1_gifs_search&rid=200w.gif&ct=g"
        alt="loading"
        className="h-48 w-96"
      />
    );
  }

  if (errorMsg !== null) {
    return <div>Error {errorMsg}</div>;
  }

  return (
    <>
      <div className="h-60 w-96 flex flex-row relative items-center justify-center">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-white left-4 cursor-pointer"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "rounded-md w-full h-full"
                    : "rounded-md w-full h-full hidden"
                }
                key={imageItem.id}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-white right-4 cursor-pointer"
        />
      </div>
    </>
  );
};

export default Slider;
