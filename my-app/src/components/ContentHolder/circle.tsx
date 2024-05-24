import React from "react";

interface CircleProps {
  radius?: number;
  fillColor?: string;
  text?: string; // Optional text content
}

const Circle: React.FC<CircleProps> = ({
  radius = 5,
  fillColor = "aquablue",
  text,
}) => {
  return (
    <svg width={radius * 2 + 15} height={radius * 2 + 5}>
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        fill={fillColor}
        filter={"drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.1))"}
      />
      {text && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="white"
          fontSize="16px"
          dy=".3em"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

export default Circle;
