package com.emretufan.TodoAppBackend.controller;

import com.emretufan.TodoAppBackend.entity.Todo;
import com.emretufan.TodoAppBackend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TodoController {

    @Autowired
    private TodoService todoService;

    //Create new todo
    @PostMapping("/todos")
    public ResponseEntity<Todo> addTodo(@RequestBody Todo todo) {
        Todo newTodo = todoService.addTodo(todo);

        return new ResponseEntity<Todo>(newTodo, HttpStatus.CREATED);
    }

    //Find all todos
    @GetMapping("/todos")
    public ResponseEntity<List<Todo>> getAllTodo() {
        List<Todo> allTodos = todoService.findAllTodo();
        return new ResponseEntity<List<Todo>>(allTodos, HttpStatus.OK);
    }

    //Find todo by id
    @GetMapping("/todos/{todoId}")
    public ResponseEntity<Todo> getTodo(@PathVariable("todoId") Long todoId) {
        Todo todo = todoService.findTodoById(todoId);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    //Delete Todo
    @DeleteMapping("/todos/{todoId}")
    public ResponseEntity<Void> deleteTodo(@PathVariable("todoId") Long todoId) {
        todoService.deleteTodo(todoId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    //Update Todo
    @PutMapping("/todos/{todoId}")
    public ResponseEntity<Todo> updateTodo(@PathVariable("todoId") Long todoId, @RequestBody Todo newTodo) {
        Todo updatedTodo = todoService.updateTodo(todoId, newTodo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }


}
