import React from "react";
import "./PianoKeyboard.css";

export const PianoKeyboard = ({
  width = 120,
  height = width * 0.75,
  onKeyPress,
  letterSound,
}) => {
  return (
    <svg className="whole" height={height} width={width} viewBox="0 0 161 120">
      <g>
        <rect
          onMouseDown={() => onKeyPress("C")}
          style={{
            fill: "white",
            stroke: "black",
          }}
          x="0"
          y="0"
          width="23"
          height="120"
        />
        <text x="7" y="110" fontSize="12">
          {letterSound[0]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("D")}
          style={{ fill: "white", stroke: "black" }}
          x="23"
          y="0"
          width="23"
          height="120"
        />
        <text x="30" y="110" fontSize="12">
          {letterSound[1]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("E")}
          style={{ fill: "white", stroke: "black" }}
          x="46"
          y="0"
          width="23"
          height="120"
        />
        <text x="53" y="110" fontSize="12">
          {letterSound[2]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("F")}
          style={{ fill: "white", stroke: "black" }}
          x="69"
          y="0"
          width="23"
          height="120"
        />
        <text x="76" y="110" fontSize="12">
          {letterSound[3]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("G")}
          style={{ fill: "white", stroke: "black" }}
          x="92"
          y="0"
          width="23"
          height="120"
        />
        <text x="99" y="110" fontSize="12">
          {letterSound[4]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("A")}
          style={{ fill: "white", stroke: "black" }}
          x="115"
          y="0"
          width="23"
          height="120"
        />
        <text x="122" y="110" fontSize="12">
          {letterSound[5]}
        </text>
      </g>
      <g>
        <rect
          onMouseDown={() => onKeyPress("B")}
          className="secondPiano"
          style={{ fill: "white", stroke: "black" }}
          x="138"
          y="0"
          width="23"
          height="120"
        />
        <text x="145" y="110" fontSize="12">
          {letterSound[6]}
        </text>
      </g>

      {/* Black keys (overlap with the white keys)  */}

      <g>
        <rect
          onMouseDown={() => onKeyPress("C#")}
          style={{ fill: "black", stroke: "black" }}
          x="14.33333"
          y="0"
          width="13"
          height="80"
        />
        {/* <text x="10" y="65" fontSize="8" style={{ color: "orange" }}>
          {letterSound[7]}
        </text> */}
      </g>

      <g>
        <rect
          onMouseDown={() => onKeyPress("D#")}
          style={{ fill: "black", stroke: "black" }}
          x="41.66666"
          y="0"
          width="13"
          height="80"
        />
      </g>

      <g>
        <rect
          onMouseDown={() => onKeyPress("F#")}
          style={{ fill: "black", stroke: "black" }}
          x="82.25"
          y="0"
          width="13"
          height="80"
        />
      </g>

      <g>
        <rect
          onMouseDown={() => onKeyPress("G#")}
          style={{ fill: "black", stroke: "black" }}
          x="108.25"
          y="0"
          width="13"
          height="80"
        />
      </g>

      <g>
        <rect
          onMouseDown={() => onKeyPress("A#")}
          style={{ fill: "black", stroke: "black" }}
          x="134.75"
          y="0"
          width="13"
          height="80"
        />
      </g>
    </svg>
  );
};
