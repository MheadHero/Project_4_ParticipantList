package com.participantlistsystem.Participant.List.System.service;

import com.participantlistsystem.Participant.List.System.model.Participant;

import java.util.List;
import java.util.Optional;

public interface ParticipantServiceInterface {
    public Participant saveParticipant(Participant participant);
    public Optional<Participant> getParticipantById(long id);
    List<Participant> getAllParticipants();
    Participant updateParticipant(long id, Participant participant);
    void deleteParticipantById(long id);
}
