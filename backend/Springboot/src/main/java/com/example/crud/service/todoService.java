package com.example.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crud.entity.Todo;
import com.example.crud.repos.todoCrudRepo;

@Service
public class todoService implements todoServiceInterface {

	@Autowired
	private todoCrudRepo crudRepo;

	@Override
	public Todo addTodo(Todo todo) {
		if(todo.getCompleted()==null){
			todo.setCompleted(false);
		}
		Todo emp = crudRepo.save(todo);
		return emp;
	}

	@Override
	public Todo updateTodo(Long todo_id) {
		Todo item = crudRepo.findById(todo_id).get();
		item.setCompleted(!item.getCompleted());
		Todo emp = crudRepo.save(item);
		return emp;
	}

	@Override
	public List<Todo> getAllTodos() {
		return crudRepo.findAll();
	}

	@Override
	public Todo getTodo(Long todo_id) {
		return crudRepo.findById(todo_id).get();
	}

	@Override
	public void deleteTodo(Long todo_id) {
		crudRepo.deleteById(todo_id);
	}
}
