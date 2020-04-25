import React from "react";
import image from "../../../images/backgroundImg.jpg";

const backgroundOpacity = {
  background: "rgba(173, 107, 205, 0.25)",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const backgroundImage = {
  backgroundImage: `url(${image})`,
};

const LoginImage = ({ children }) => {
  return (
    <div style={backgroundImage}>
      <div style={backgroundOpacity}>{children}</div>
    </div>
  );
};

export default LoginImage;
