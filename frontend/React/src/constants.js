const GETTODOS = "http://127.0.0.1:5000/todos";
const POSTTODO = "http://127.0.0.1:5000/todos";
const DELETETODO = (id) => `http://127.0.0.1:5000/todos/${id}`;
const UPDATETODO = (id) => `http://127.0.0.1:5000/todos/${id}`;

export { GETTODOS, POSTTODO, DELETETODO, UPDATETODO };
