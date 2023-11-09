package com.emretufan.TodoAppBackend.exception;


public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(String message) {
        super(message);
    }
}
