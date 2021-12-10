package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.factory.ClientFactory;
import com.lacouf.al420565final.model.Client;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/client")
public class ClientController {
    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = ClientFactory.getClients();
        return ResponseEntity.ok(clients);
    }

    @GetMapping("/gender/M")
    public ResponseEntity<List<Client>> getMaleClients() {
        List<Client> males = ClientFactory.getClients().stream()
                .filter(c -> c.getGender().equals("M"))
                .collect(Collectors.toList());
        return ResponseEntity.ok(males);
    }

    @GetMapping("/province/ON")
    public ResponseEntity<List<Client>> getOntarianClients() {
        List<Client> ontarians = ClientFactory.getClients().stream()
                .filter(c -> c.getProvince().equals("ON"))
                .collect(Collectors.toList());
        return ResponseEntity.ok(ontarians);
    }
}
