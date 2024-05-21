import React from 'react';

const KidCompassSVG = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        .outline {
          fill: none;
          stroke: #000;
          stroke-width: 4;
        }
      `}</style>
    </defs>

    {/* Child 1 */}
    <path
      className="outline"
      d="M 50 250 q 10 -30 20 -60 q 10 -10 20 -30 q 10 -10 20 -10 q 10 0 20 10 q 10 20 20 30 q 10 30 20 60"
    />

    {/* Child 2 */}
    <path
      className="outline"
      d="M 120 240 q 15 -40 25 -70 q 10 -15 20 -25 q 10 -10 20 -5 q 10 5 20 15 q 10 10 20 25 q 10 30 25 60"
    />

    {/* Child 3 */}
    <path
      className="outline"
      d="M 200 230 q 20 -50 30 -80 q 10 -20 20 -30 q 10 -10 20 0 q 10 10 20 30 q 10 30 30 80"
    />
  </svg>
);

export default KidCompassSVG;