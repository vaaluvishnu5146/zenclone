import React from "react";
import BasicChecks from "../Elements/Checks/BasicChecks";
import BasicTextField from "../Elements/TextField/BasicTextField";
import { TeamsPlaying } from "../mocks/mock";
import { Formik, Field } from "formik";

const initialState = {
  playerName: "",
  playerCountry: "",
  playerTeam: "",
  auctionAmount: 0,
};

function handleValidate(values) {
  const errors = {};
  if (!values.playerName) {
    errors["playerName"] = "Player Name is required";
  } else if (!values.playerCountry) {
    errors["playerCountry"] = "Player Country is required";
  } else if (!values.jerseyNumber) {
    errors["jerseyNumber"] = "Player Jersey Number is required";
  } else if (values.jerseyNumber < 1) {
    errors["jerseyNumber"] = "Player Jersey Number must be greater than 0";
  } else if (!values.auctionAmount) {
    errors["auctionAmount"] = "Player auction amount is required";
  } else if (values.auctionAmount <= 5000000) {
    errors["auctionAmount"] =
      "Player auction amount should be greater than 5CR";
  } else if (values?.skills?.length <= 1) {
    errors["skills"] = "Players skills cannot be lesser than 2";
  }
  return errors;
}

export default function SimpleModal({
  handleChange = (e) => {},
  handleSubmit = (e) => {},
  data = {},
}) {
  function handleFormSubmit(values, fun = {}) {
    if (values) {
      handleSubmit(values);
      fun.setSubmitting(false);
    }
  }
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
            <Formik
              initialValues={initialState}
              validate={handleValidate}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div class="modal-body">
                    <BasicTextField
                      id="playerName"
                      placeholder="Enter Players Name"
                      label="Player Name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.playerName}
                      error={touched.playerName && errors.playerName}
                      touched={touched.playerName}
                    />
                    <BasicTextField
                      id="playerCountry"
                      placeholder="Enter Player Country"
                      label="Player Country"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.playerCountry}
                      error={errors.playerCountry}
                      touched={touched.playerCountry}
                    />
                    <div className="row">
                      <div className="col-6">
                        <label for="playerCountry" class="form-label">
                          Team Playing
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          id="playerTeam"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.playerTeam}
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
                          onBlur={handleBlur}
                          value={values.jerseyNumber}
                          error={errors.jerseyNumber}
                          touched={touched.jerseyNumber}
                        />
                      </div>
                    </div>
                    <div className="row mb-2 p-2">
                      <h4 className="p-0 mb-2">PLAYER SKILLS</h4>
                      <div class="form-check mb-3">
                        <Field
                          className={`form-check-input ${
                            errors.skills && "is-invalid"
                          }`}
                          type="checkbox"
                          name="skills"
                          value="batsman"
                        />
                        <label
                          class="form-check-label"
                          for="validationFormCheck1"
                        >
                          Batsman
                        </label>
                        <div class="invalid-feedback">{errors.skills}</div>
                      </div>
                      <div class="form-check mb-3">
                        <Field
                          className={`form-check-input ${
                            errors.skills && "is-invalid"
                          }`}
                          type="checkbox"
                          name="skills"
                          value="bowler"
                        />
                        <label
                          class="form-check-label"
                          for="validationFormCheck1"
                        >
                          Bowler
                        </label>
                        <div class="invalid-feedback">{errors.skills}</div>
                      </div>
                      <div class="form-check mb-3">
                        <Field
                          className={`form-check-input ${
                            errors.skills && "is-invalid"
                          }`}
                          type="checkbox"
                          name="skills"
                          value="fielder"
                        />
                        <label
                          class="form-check-label"
                          for="validationFormCheck1"
                        >
                          Fielder
                        </label>
                        <div class="invalid-feedback">{errors.skills}</div>
                      </div>
                      <div class="form-check mb-3">
                        <Field
                          className={`form-check-input ${
                            errors.skills && "is-invalid"
                          }`}
                          type="checkbox"
                          name="skills"
                          value="allrounder"
                        />
                        <label
                          class="form-check-label"
                          for="validationFormCheck1"
                        >
                          All Rounder
                        </label>
                        <div class="invalid-feedback">{errors.skills}</div>
                      </div>
                      <div className="invalid-feedback">{errors.skills}</div>
                    </div>
                    <BasicTextField
                      id="auctionAmount"
                      placeholder="Enter Auction Amount"
                      label="Auction Amount"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.auctionAmount}
                      error={errors.auctionAmount}
                      touched={touched.auctionAmount}
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
                      disabled={
                        !isValid ||
                        isSubmitting ||
                        errors.playerName ||
                        errors.playerCountry ||
                        errors.playerTeam
                      }
                      type="submit"
                      class="btn btn-warning"
                    >
                      ADD PLAYER
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

//                       <BasicChecks
//                         onChange={handleChange}
//                         label="BOWLER"
//                         id="bowler"
//                         checked={
//                           data["skills"].indexOf("bowler") > -1 ? true : false
//                         }
//                       />
//                       <BasicChecks
//                         onChange={handleChange}
//                         label="WICKET KEEPER"
//                         id="keeper"
//                         checked={
//                           data["skills"].indexOf("keeper") > -1 ? true : false
//                         }
//                       />
//                       <BasicChecks
//                         onChange={handleChange}
//                         label="All ROUNDER"
//                         id="allrounder"
//                         checked={
//                           data["skills"].indexOf("allrounder") > -1
//                             ? true
//                             : false
//                         }
//                       />
