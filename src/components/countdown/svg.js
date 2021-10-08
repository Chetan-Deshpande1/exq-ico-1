import React from 'react'
import './countdown.scss'
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

const SVGCircle=(props)=>{
  

   function polarToCartesian(centerX, centerY, radius, angleInDegrees) {

   
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  };


    return (
      <>
        <BrowserView>
          <svg className="countdown-svg">
            <path
              fill="none"
              stroke="#1062d3"
              stroke-width="4"
              d={describeArc(50, 50, 48, 0, props.radius)}
            />
          </svg>
        </BrowserView>
        <MobileView>
          <svg className="countdown-svg">
            <path
              fill="none"
              stroke="#1062d3"
              stroke-width="4"
              d={describeArc(38, 38, 35, 0, props.radius)}
            />
          </svg>
        </MobileView>
      </>
    );

}
export default SVGCircle;