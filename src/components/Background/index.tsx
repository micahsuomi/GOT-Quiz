import React from "react";

import "./style.css";

interface BackgroundProps {
  children: React.ReactNode
}
const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="background">
      {children}
    </div>
  );
};

export default Background;
