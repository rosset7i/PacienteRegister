package com.rossetti.repository;

import com.rossetti.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface Repository extends JpaRepository<Paciente, Long> {
}
