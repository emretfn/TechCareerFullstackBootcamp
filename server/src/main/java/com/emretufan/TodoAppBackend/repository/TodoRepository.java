package com.emretufan.TodoAppBackend.repository;

import com.emretufan.TodoAppBackend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
