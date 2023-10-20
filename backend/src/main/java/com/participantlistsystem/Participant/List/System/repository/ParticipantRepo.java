package com.participantlistsystem.Participant.List.System.repository;

import com.participantlistsystem.Participant.List.System.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepo extends JpaRepository<Participant, Long> {
}
