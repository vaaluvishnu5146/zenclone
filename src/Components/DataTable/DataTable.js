import React from "react";

export default function DataTable({ data = [], handleDelete = (name) => {} }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Player Name</th>
          <th scope="col">Player Country</th>
          <th scope="col">Team Playing</th>
          <th scope="col">Skills</th>
          <th scope="col">Jersey Number</th>
          <th scope="col">Auction Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((player, index) => (
            <tr key={`datatable-players-table-row-${index}`}>
              <th scope="row">{index + 1}</th>
              <td>{player.playerName}</td>
              <td>{player.playerCountry}</td>
              <td>{player.playerTeam}</td>
              <td>
                {player.skills.map((s, i) => (
                  <span
                    key={`player-${player.playerName}-skills`}
                    class="badge text-bg-primary"
                  >
                    {s}
                  </span>
                ))}
              </td>
              <td>{player.jerseyNumber}</td>
              <td>{player.auctionAmount}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(player.playerName)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <h3>No Players found</h3>
        )}
      </tbody>
    </table>
  );
}
