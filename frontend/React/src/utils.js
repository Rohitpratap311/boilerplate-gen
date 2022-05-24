import { GETTODOS, POSTTODO, DELETETODO, UPDATETODO } from "./constants";
const axios = require("axios").default;

async function getTodos(cb) {
	let todos = await axios({ method: "get", url: GETTODOS });
	cb(todos.data);
}

async function postTodo(text, cb) {
	let todo = await axios({
		method: "post",
		url: POSTTODO,
		data: { text },
	});

	cb(todo.data);
}

async function deleteTodo(id, cb) {
	let res = await axios({
		method: "delete",
		url: DELETETODO(id),
	});

	cb(res);
}

async function updateTodo(id, cb) {
	let res = await axios({
		method: "put",
		url: UPDATETODO(id),
	});

	cb(res);
}

export { getTodos, postTodo, deleteTodo, updateTodo };
