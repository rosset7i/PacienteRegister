package com.rossetti.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    @Column(name = "data_de_nascimento")
    private String dataDeNascimento;
    private String endereco;
    private String observacao;
}
