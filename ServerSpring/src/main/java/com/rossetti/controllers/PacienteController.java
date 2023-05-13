package com.rossetti.controllers;

import com.rossetti.models.Paciente;
import com.rossetti.repository.Repository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/pacientes")
@CrossOrigin(origins = "*")
public class PacienteController {

    private final Repository repository;

    public PacienteController(Repository repository){
        this.repository = repository;
    }

    @GetMapping()
    public List<Paciente> findAll(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> findById(@PathVariable Long id){
        return repository.findById(id)
                .map(paciente -> ResponseEntity.ok().body(paciente))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping()
    public Paciente save(@RequestBody Paciente paciente){
        return repository.save(paciente);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
