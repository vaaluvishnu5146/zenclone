import React from "react";
import BasicChecks from "../Elements/Checks/BasicChecks";
import BasicTextField from "../Elements/TextField/BasicTextField";
import { TeamsPlaying } from "../mocks/mock";

export default function SimpleModal({
  handleChange = (e) => {},
  handleSubmit = (e) => {},
}) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD PLAYERS
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <BasicTextField
                id="playerName"
                placeholder="Enter Players Name"
                label="Player Name"
                type="text"
                onChange={handleChange}
              />
              <BasicTextField
                id="playerCountry"
                placeholder="Enter Player Country"
                label="Player Country"
                type="text"
                onChange={handleChange}
              />
              <div className="row">
                <div className="col-6">
                  <label for="playerCountry" class="form-label">
                    Team Playing
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    id="playerTeam"
                  >
                    <option selected>Select Team</option>
                    {TeamsPlaying.map((team, index) => (
                      <option
                        key={`add-player-modal-select-teams-${index}`}
                        value={team}
                      >
                        {team}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <BasicTextField
                    id="jerseyNumber"
                    placeholder="Enter Jersey Number"
                    label="Jersey Number"
                    type="number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-2 p-2">
                <h4 className="p-0 mb-2">PLAYER SKILLS</h4>
                <BasicChecks
                  onChange={handleChange}
                  label="BATSMAN"
                  id="batsman"
                />
                <BasicChecks
                  onChange={handleChange}
                  label="BOWLER"
                  id="bowler"
                />
                <BasicChecks
                  onChange={handleChange}
                  label="WICKET KEEPER"
                  id="keeper"
                />
                <BasicChecks
                  onChange={handleChange}
                  label="All ROUNDER"
                  id="allrounder"
                />
              </div>
              <BasicTextField
                id="auctionAmount"
                placeholder="Enter Auction Amount"
                label="Auction Amount"
                type="number"
                onChange={handleChange}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-warning"
                onClick={handleSubmit}
              >
                ADD PLAYER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
