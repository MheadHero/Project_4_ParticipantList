package com.participantlistsystem.Participant.List.System.controller;

import com.participantlistsystem.Participant.List.System.model.Participant;
import com.participantlistsystem.Participant.List.System.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/participantlist")
@CrossOrigin(origins = "*")

public class ParticipantController {
    @Autowired
    private ParticipantService ParticipantService;

    @PostMapping
    public Participant saveParticipant(@RequestBody Participant participant) {
        return ParticipantService.saveParticipant(participant);
    }

    @GetMapping
    public List<Participant> getAllParticipants() {
        return ParticipantService.getAllParticipants();
    }

    @GetMapping("/{id}")
    public Optional<Participant> getParticipantById(@PathVariable long id) {
        return ParticipantService.getParticipantById(id);
    }

    @PutMapping("/{id}")
    public Participant updateParticipant(@PathVariable long id, @RequestBody Participant participant) {
        return ParticipantService.updateParticipant(id, participant);
    }

    @DeleteMapping("/{id}")
    public void deleteParticipantById(@PathVariable long id) {
        ParticipantService.deleteParticipantById(id);
    }
}
