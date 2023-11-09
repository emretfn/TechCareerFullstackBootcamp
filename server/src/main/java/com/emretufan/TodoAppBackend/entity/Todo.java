package com.emretufan.TodoAppBackend.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "todo")
@Data
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "done")
    private Boolean done;

}
