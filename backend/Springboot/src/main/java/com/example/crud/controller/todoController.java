package com.example.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.entity.Todo;
import com.example.crud.service.todoServiceInterface;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("")
public class todoController {
	
	@Autowired
	private todoServiceInterface todoServiceInterface;
	
	@GetMapping("/todos")
	public ResponseEntity<List<Todo>> getAllTodos(){
		List<Todo> allTodos = todoServiceInterface.getAllTodos();
		return new ResponseEntity<List<Todo>>(allTodos, HttpStatus.OK);
	}
	
	@GetMapping("/todos/{todo_id}")
	public ResponseEntity<Todo> getTodo(@PathVariable("todo_id") Long todo_id){
		Todo selectedTodo = todoServiceInterface.getTodo(todo_id);
		return new ResponseEntity<Todo>(selectedTodo, HttpStatus.OK);
	}
	
	@PostMapping("/todos")
	public ResponseEntity<Todo> addTodo(@RequestBody Todo todo) {
		Todo savedTodo = todoServiceInterface.addTodo(todo);
		return new ResponseEntity<Todo>(savedTodo, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/todos/{todo_id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable("todo_id") Long todo_id){
		todoServiceInterface.deleteTodo(todo_id);
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/todos")
	public ResponseEntity<Void> deleteAllTodo(){
		todoServiceInterface.deleteAllTodo();
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/todos/{todo_id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("todo_id") Long todo_id) {
		Todo savedTodo = todoServiceInterface.updateTodo(todo_id);
		return new ResponseEntity<Todo>(savedTodo, HttpStatus.CREATED);
	}
}
