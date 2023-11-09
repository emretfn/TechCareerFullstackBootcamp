package com.emretufan.TodoAppBackend.exception;

public class TodoTitleNotNullException extends RuntimeException {
    public TodoTitleNotNullException(String message){
        super(message);
    }
}
