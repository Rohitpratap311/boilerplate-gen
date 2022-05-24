import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Todo from "./Todo";

function TodoList({ todos, removeTodo }) {
	const todoList = todos.map((todo, _) => {
		return <Todo todo={todo} key={todo.id} removeTodo={removeTodo} />;
	});

	return (
		<div className="TodoList">
			<h2>TodoList</h2>
			<ListGroup>{todoList}</ListGroup>
		</div>
	);
}

export default TodoList;
