import React from 'react';

const IconLoader = () => (
  <svg id="logo-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64">
    <title>Loader A</title>
    <g>
      {/* Stylized Letter A */}
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Calibre', 'Arial', sans-serif"
        fontWeight="bold"
        fontSize="48"
        fill="currentColor"
        letterSpacing="2"
      >
        A
      </text>
      {/* Animated Circular Stroke */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeDasharray="62.8 188.4"
        strokeDashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default IconLoader;
