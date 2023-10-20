import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/participantlist";

class ParticipantSvc {
  getAllParticipants() {
    return axios.get(BASE_URL);
  }

  saveParticipant(participant) {
    return axios.post(BASE_URL, participant);
  }

  updateParticipant(participant, id) {
    return axios.put(BASE_URL + "/" + id, participant);
  }

  getParticipantById(id) {
    return axios.get(BASE_URL + "/" + id);
  }

  deleteParticipant(id) {
    return axios.delete(BASE_URL + "/" + id);
  }
}

export default new ParticipantSvc();
