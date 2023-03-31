import React, { useState } from "react";
import DataTable from "../Components/DataTable/DataTable";
import SimpleModal from "../Modal/Modal";

export default function TeamDetails() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({
    playerName: "",
    playerCountry: "",
    playerTeam: "",
    jerseyNumber: 0,
    skills: [],
    auctionAmount: 0,
  });

  function handleInput(e) {
    const { id, value, type } = e.target;
    let playerDataCopy = {
      ...player,
    };
    if (type === "checkbox") {
      if (playerDataCopy["skills"].indexOf(id) > -1) {
        playerDataCopy["skills"] = playerDataCopy["skills"].filter(
          (s) => s !== id
        );
      } else {
        playerDataCopy["skills"].push(id);
      }
    } else {
      playerDataCopy[id] = value;
    }
    setPlayer(playerDataCopy);
  }

  function handleAddPlayer(e) {
    if (e) {
      let playersCopy = [...players];
      playersCopy.push(player);
      setPlayers(playersCopy);
    }
  }

  function handleDelete(name = "") {
    let playersDataCopy = [...players];
    playersDataCopy = playersDataCopy.filter(
      (player) => player.playerName !== name
    );
    setPlayers(playersDataCopy);
  }

  return (
    <div id="team-details-page-container">
      <img
        className="team-banner-image"
        alt="team-banner"
        src="https://sportsmintmedia.com/wp-content/uploads/2020/09/cskwe-3.jpg"
      />
      <div className="team-details-table-container">
        <div className="row mb-5">
          <div className="col-6">
            <h1>
              CSK PLAYERS <span>(12/12)</span>
            </h1>
          </div>
          <div className="col-6 d-flex flex-row-reverse">
            <SimpleModal
              handleChange={handleInput}
              handleSubmit={handleAddPlayer}
            />
          </div>
        </div>
        <DataTable data={players} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
