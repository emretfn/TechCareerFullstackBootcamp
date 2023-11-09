package com.emretufan.TodoAppBackend.service;

import com.emretufan.TodoAppBackend.entity.Todo;
import com.emretufan.TodoAppBackend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    //Create Todo
    public Todo addTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    //Find all todos
    public List<Todo> findAllTodo() {
        return todoRepository.findAll();
    }

    //Find todo by id
    public Todo findTodoById(Long todoId) {
        return todoRepository.findById(todoId).get();
    }


    //Delete todo
    public void deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
    }


    //update todo
    public Todo updateTodo(Long todoId, Todo newTodo) {
        Todo findedTodo = findTodoById(todoId);

        if (findedTodo != null) {
            findedTodo.setTitle(newTodo.getTitle());
            findedTodo.setDone(newTodo.getDone());

            return todoRepository.save(findedTodo);
        }

        return null;
    }
}
