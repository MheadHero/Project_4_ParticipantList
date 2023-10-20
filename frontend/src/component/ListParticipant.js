import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParticipantSvc from "../service/ParticipantSvc";

const ListParticipant = () => {
  const [participants, setParticipants] = useState([]); //useState is a hook that allows you to have state variables in functional components

  useEffect(() => {
    getAllParticipants();
  }, []);

  function getAllParticipants() {
    ParticipantSvc.getAllParticipants()
      .then((response) => {
        setParticipants(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteParticipant(e, id) {
    e.preventDefault();
    ParticipantSvc.deleteParticipant(id)
      .then(() => getAllParticipants())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <Link to={"/add-participant"} className="btn btn-primary mb-2 mt-3">
        Add Participant
      </Link>
      <h2 className="text-center mb-4">Participant List</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th>Participant ID</th>
          <th>Participant First Name</th>
          <th>Participant Last Name</th>
          <th>Participant Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr id={participant.id}>
              <td>{participant.id}</td>
              <td>{participant.firstName}</td>
              <td>{participant.lastName}</td>
              <td>{participant.email}</td>
              <td>
                <Link
                  to={`/add-participant/${participant.id}`}
                  className="btn btn-info"
                >
                  Update
                </Link>{" "}
                <a
                  onClick={(e) => deleteParticipant(e, participant.id)}
                  className="btn btn-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListParticipant;
