import React from "react";
import "./Keyboard.css";

export const Keyboard = ({
  width = 120,
  height = width * 0.75,
  onKeyPress,
}) => {
  return (
    <svg className="whole" height={height} width={width} viewBox="0 0 161 120">
      <rect
        onClick={() => onKeyPress("C")}
        style={{
          fill: "white",
          stroke: "black",
        }}
        x="0"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("D")}
        style={{ fill: "white", stroke: "black" }}
        x="23"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("E")}
        style={{ fill: "white", stroke: "black" }}
        x="46"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("F")}
        style={{ fill: "white", stroke: "black" }}
        x="69"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("G")}
        style={{ fill: "white", stroke: "black" }}
        x="92"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("A")}
        style={{ fill: "white", stroke: "black" }}
        x="115"
        y="0"
        width="23"
        height="120"
      />
      <rect
        onClick={() => onKeyPress("B")}
        className="secondPiano"
        style={{ fill: "white", stroke: "black" }}
        x="138"
        y="0"
        width="23"
        height="120"
      />
      {/* Black keys (overlap with the white keys)  */}
      <rect
        onClick={() => onKeyPress("C#")}
        style={{ fill: "black", stroke: "black" }}
        x="14.33333"
        y="0"
        width="13"
        height="80"
      />
      <rect
        onClick={() => onKeyPress("D#")}
        style={{ fill: "black", stroke: "black" }}
        x="41.66666"
        y="0"
        width="13"
        height="80"
      />
      <rect
        onClick={() => onKeyPress("F#")}
        style={{ fill: "black", stroke: "black" }}
        x="82.25"
        y="0"
        width="13"
        height="80"
      />
      <rect
        onClick={() => onKeyPress("G#")}
        style={{ fill: "black", stroke: "black" }}
        x="108.25"
        y="0"
        width="13"
        height="80"
      />
      <rect
        onClick={() => onKeyPress("A#")}
        style={{ fill: "black", stroke: "black" }}
        x="134.75"
        y="0"
        width="13"
        height="80"
      />
    </svg>
  );
};
