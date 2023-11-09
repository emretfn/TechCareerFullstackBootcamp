package com.emretufan.TodoAppBackend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "todo")
@Data
@Schema(name = "Todo", description = "Todo model")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(name = "id", description = "Todo id", example = "1")
    private long id;

    @Column(name = "title")
    @Schema(name = "title", description = "Todo title", example = "Todo 1")
    private String title;

    @Column(name = "done")
    @Schema(name = "done", description = "Todo done status", example = "false", defaultValue = "false")
    private Boolean done = false;

}
