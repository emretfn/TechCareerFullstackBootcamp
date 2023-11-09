package com.emretufan.TodoAppBackend.controller;

import com.emretufan.TodoAppBackend.entity.Todo;
import com.emretufan.TodoAppBackend.service.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
@Tag(name="Todo", description = "Todo REST API")
public class TodoController {

    @Autowired
    private TodoService todoService;

    //Create new todo
    @PostMapping("/todos")
    @Operation(summary = "Add new todo",
            description = "You can add new todo with this endpoint.",
            responses = {
                    @ApiResponse(responseCode = "201", description = "It returns added todo.",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Todo.class))),
                    @ApiResponse(responseCode = "400", description = "Title is a required field. If not provided, 400 status code is returned.", content = @Content)
            }
    )
    public ResponseEntity<Todo> addTodo(@RequestBody Todo todo) {
        Todo newTodo = todoService.addTodo(todo);

        return new ResponseEntity<Todo>(newTodo, HttpStatus.CREATED);
    }

    //Find all todos
    @GetMapping("/todos")
    @Operation(summary = "Get all todos",
            description = "You can get all todos with this endpoint.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "It returns all todos")
            }
    )
    public ResponseEntity<List<Todo>> getAllTodo() {
        List<Todo> allTodos = todoService.findAllTodo();
        return new ResponseEntity<List<Todo>>(allTodos, HttpStatus.OK);
    }

    //Find todo by id
    @GetMapping("/todos/{todoId}")
    @Operation(summary = "Get specific todo",
            description = "You can get specific todo with todo id. It returns just a todo.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "It returns just a todo."),
                    @ApiResponse(responseCode = "404", description = "Todo not found", content = @Content)
            }
    )
    public ResponseEntity<Todo> getTodo(@PathVariable("todoId") Long todoId) {
        Todo todo = todoService.findTodoById(todoId);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    //Delete Todo
    @DeleteMapping("/todos/{todoId}")
    @Operation(summary = "Delete specific todo",
            description = "You can delete a specific todo with this endpoint.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "It returns nothing."),
                    @ApiResponse(responseCode = "404", description = "The todo to be deleted could not be found with the given id")
            }
    )
    public ResponseEntity<Void> deleteTodo(@PathVariable("todoId") Long todoId) {
        todoService.deleteTodo(todoId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    //Update Todo
    @PutMapping("/todos/{todoId}")
    @Operation(summary = "Update a specific todos",
            description = "You can update a specific todo with todo id.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "It returns updated todo."),
                    @ApiResponse(responseCode = "404", description = "The todo to be updated could not be found with the given id", content = @Content)
            }
    )
    public ResponseEntity<Todo> updateTodo(@PathVariable("todoId") Long todoId, @RequestBody Todo newTodo) {
        Todo updatedTodo = todoService.updateTodo(todoId, newTodo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }


}
