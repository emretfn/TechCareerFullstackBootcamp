package com.emretufan.TodoAppBackend.repository;

import com.emretufan.TodoAppBackend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByDone(boolean done);

}
