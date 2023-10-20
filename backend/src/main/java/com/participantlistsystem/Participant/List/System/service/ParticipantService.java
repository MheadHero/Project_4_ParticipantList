package com.participantlistsystem.Participant.List.System.service;

import com.participantlistsystem.Participant.List.System.model.Participant;
import com.participantlistsystem.Participant.List.System.repository.ParticipantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParticipantService implements ParticipantServiceInterface {

    @Autowired
    private ParticipantRepo participantRepo;

    @Override
    public Participant saveParticipant(Participant participant) {
        return participantRepo.save(participant);
    }

    @Override
    public Optional<Participant> getParticipantById(long id) {
        return participantRepo.findById(id);
    }

    @Override
    public List<Participant> getAllParticipants() {
        return participantRepo.findAll();
    }

    @Override
    public Participant updateParticipant(long id, Participant participant) {
        Participant participantUpdate = participantRepo.findById(id).orElseThrow();
        participantUpdate.setFirstName(participant.getFirstName());
        participantUpdate.setLastName(participant.getLastName());
        participantUpdate.setEmail(participant.getEmail());
        return participantRepo.save(participantUpdate);
    }

    @Override
    public void deleteParticipantById(long id) {
        participantRepo.deleteById(id);
    }
}
