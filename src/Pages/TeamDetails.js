import React, { useEffect, useState } from "react";
import DataTable from "../Components/DataTable/DataTable";
import SimpleModal from "../Modal/Modal";

function getStorage(key) {
  let data = null;
  try {
    data = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
  return data;
}

const playerMock = {
  playerName: "",
  playerCountry: "",
  playerTeam: "",
  jerseyNumber: 0,
  skills: [],
  auctionAmount: 0,
};

export default function TeamDetails() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(getStorage("players"));
    return () => {};
  }, []);

  function handleAddStorage(data = []) {
    try {
      localStorage.setItem("players", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  function handleAddPlayer(values) {
    try {
      let players = JSON.parse(localStorage.getItem("players"));
      if (values) {
        players.push(values);
        handleAddStorage(players);
        setPlayers(getStorage("players"));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // function handleDelete(name = "") {
  //   let playersDataCopy = [...players];
  //   playersDataCopy = playersDataCopy.filter(
  //     (player) => player.playerName !== name
  //   );
  //   setPlayers(playersDataCopy);
  // }

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
            <SimpleModal handleSubmit={handleAddPlayer} />
          </div>
        </div>
        <DataTable data={players} handleDelete={() => {}} />
      </div>
    </div>
  );
}
