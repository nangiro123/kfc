import React from "react";
import fallbackImage from "../assets/png/menu1.png";

const ImageWithFallback = ({ src, alt = "", ...props }) => (
  <img
    {...props}
    src={src || fallbackImage}
    alt={alt}
    onError={(event) => {
      event.currentTarget.onerror = null;
      event.currentTarget.src = fallbackImage;
    }}
  />
);

export default ImageWithFallback;