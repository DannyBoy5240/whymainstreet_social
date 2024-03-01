import React from "react";

const DotsSvg = ({ width, height, class_name }) => {
  return (
    <svg
      className={class_name}
      width={width}
      height={height}
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128,96a32,32,0,1,0,32,32A32.03667,32.03667,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,128,136Zm0-56A32,32,0,1,0,96,48,32.03667,32.03667,0,0,0,128,80Zm0-40a8,8,0,1,1-8,8A8.00917,8.00917,0,0,1,128,40Zm0,136a32,32,0,1,0,32,32A32.03667,32.03667,0,0,0,128,176Zm0,40a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,128,216Z" />
    </svg>
  );
};

export default DotsSvg;
