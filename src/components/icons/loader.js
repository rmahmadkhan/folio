import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Outer A */}
      <g id="A" transform="translate(11.000000, 5.000000)">
        <path
          d="M50 10 L35 70 L40 70 L44 55 L56 55 L60 70 L65 70 L50 10 Z" // Outer part of A
          fill="currentColor"
        />
        {/* Inner triangle */}
        <path
          d="M47 50 L53 50 L50 35 Z" // Inner triangle
          fill="none" // Hollow
          stroke="currentColor" // Keep the outline visible
        />
      </g>

      {/* Hexagonal outer shape */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
