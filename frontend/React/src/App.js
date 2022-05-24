import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { getTodos, postTodo, deleteTodo } from "./utils";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos(setTodos);
	}, []);

	const addTodo = (todoText) => {
		postTodo(todoText, (todo) => {
			setTodos([...todos, todo]);
		});
	};

	const removeTodo = (id) => {
		deleteTodo(id, (_) => {});
		setTodos(
			todos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	return (
		<Container className="App">
			<h2>React Todo App</h2>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} removeTodo={removeTodo} />
		</Container>
	);
}

export default App;
