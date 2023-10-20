import React, { useState, useEffect } from "react";
import ParticipantSvc from "../service/ParticipantSvc";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddParticipant = () => {
  //collect the data from the form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const participantData = { firstName, lastName, email };

  function saveParticipant(e) {
    e.preventDefault();
    if (
      participantData.firstName !== "" &&
      participantData.email !== "" &&
      participantData.lastName !== ""
    ) {
      if (id) {
        ParticipantSvc.updateParticipant(participantData, id)
          .then(navigate("/"))
          .catch((error) => console.log(error));
      } else {
        ParticipantSvc.saveParticipant(participantData)
          .then(navigate("/"))
          .catch((error) => console.log(error));
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  function title() {
    if (id) {
      return "Update Participant";
    } else {
      return "Add Participant";
    }
  }

  useEffect(() => {
    if (id) {
      ParticipantSvc.getParticipantById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <button
                  onClick={(e) => saveParticipant(e)}
                  className="btn btn-success"
                >
                  Save
                </button>{" "}
                <Link to={"/participant"} className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddParticipant;
