import React, { useState } from "react";

function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.name);
  function handleButton() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      props.onChangeName(symbol, playerName);
    }
  }
  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChangeName}
      />
    );
    // btnCaption = "Save";
  }
  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
