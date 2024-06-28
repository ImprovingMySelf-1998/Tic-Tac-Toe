import React from "react";

function Log(props) {
  return (
    <ol id="log">
      {props.turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}

export default Log;
