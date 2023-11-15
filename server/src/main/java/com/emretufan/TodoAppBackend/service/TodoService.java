package com.emretufan.TodoAppBackend.service;

import com.emretufan.TodoAppBackend.entity.Todo;
import com.emretufan.TodoAppBackend.exception.TodoNotFoundException;
import com.emretufan.TodoAppBackend.exception.TodoTitleNotNullException;
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
        if (todo.getTitle() == null || todo.getTitle().isBlank() || todo.getTitle().isEmpty()) {
            throw new TodoTitleNotNullException("Todo title can't be empty");
        }else {
            return todoRepository.save(todo);
        }
    }

    //Find all todos
    public List<Todo> findAllTodo() {
        return todoRepository.findAll();
    }

    //Find todo by id
    public Todo findTodoById(Long todoId) {
        return todoRepository.findById(todoId).orElseThrow(() -> new TodoNotFoundException("Todo not found with the given ID."));
    }


    //Delete todo
    public void deleteTodo(Long todoId) {
        boolean isExist = todoRepository.existsById(todoId);
        if(isExist) {
            todoRepository.deleteById(todoId);
        } else {
            throw new TodoNotFoundException("Todo not found with the given ID.");
        }
    }

    //Delete all

    public void  deleteAllTodos() {
        todoRepository.deleteAll();
    }

    //Delete dones

    public void  deleteDoneTodo() {
        List<Todo> doneTodos = todoRepository.findByDone(true);

        if (!doneTodos.isEmpty()) {
            todoRepository.deleteAll(doneTodos);
        }else {
            throw new TodoNotFoundException("No todos with done=true found.");
        }
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
