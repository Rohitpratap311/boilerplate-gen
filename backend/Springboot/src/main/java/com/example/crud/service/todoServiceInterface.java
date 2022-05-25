package com.example.crud.service;

import java.util.List;

import com.example.crud.entity.Todo;

public interface todoServiceInterface {

	public Todo addTodo(Todo todo);

	public Todo updateTodo(Long todo_id);

	public List<Todo> getAllTodos();

	public Todo getTodo(Long todo_id);

	public void deleteTodo(Long todo_id);

	public void deleteAllTodo();

}
