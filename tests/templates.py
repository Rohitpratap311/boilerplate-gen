import json
from typing import List

import requests

GETTODOS = "http://127.0.0.1:5000/todos"
POSTTODO = "http://127.0.0.1:5000/todos"
DELETETODOS = "http://127.0.0.1:5000/todos"
DELETETODO = lambda id: f"http://127.0.0.1:5000/todos/{id}"
UPDATETODO = lambda id: f"http://127.0.0.1:5000/todos/{id}"

status_codes = [200, 201, 202]


def get_data_headers(data):
    return {
        "data": json.dumps(data),
        "headers": {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }


class TestCase:
    def test_get_todos(self):
        res = requests.get(GETTODOS)
        data = res.json()

        # Check for todos
        assert res.status_code in status_codes
        assert isinstance(data, List)

    def test_post_todo(self):
        data = {'text': 'Hi'}
        res = requests.post(POSTTODO, **get_data_headers(data))
        todo = res.json()

        # Post a todo
        assert res.status_code in status_codes
        assert todo.get("text", None) == data.get("text")
        assert todo.get("id", None) != None
        assert todo.get("completed", None) == False

        res2 = requests.get(GETTODOS)
        todos = res2.json()

        # Check whether the todo posted is stored in the db
        assert todo in todos

    def test_delete_all(self):
        # Delete all todos
        res = requests.delete(DELETETODOS)
        assert res.status_code in status_codes

        res2 = requests.get(GETTODOS)
        todos = res2.json()

        # Assert number of todos is 0
        assert len(todos) == 0

    def test_delete_todo(self):
        # Post a todo
        data = {'text': 'Hi'}
        res = requests.post(POSTTODO, **get_data_headers(data))
        todo = res.json()

        assert res.status_code in status_codes
        assert todo.get("text", None) == data.get("text")
        assert todo.get("id", None) != None
        assert todo.get("completed", None) == False

        # Delete that todo
        res2 = requests.delete(DELETETODO(todo.get("id")))
        assert res2.status_code in status_codes

        # Check that the deleted todo is not present in the db
        res3 = requests.get(GETTODOS)
        todos = res3.json()

        assert todo not in todos

    def test_update_todo(self):
        # Post a todo
        data = {'text': 'Hi'}
        res = requests.post(POSTTODO, **get_data_headers(data))
        todo = res.json()

        assert res.status_code in status_codes
        assert todo.get("text", None) == data.get("text")
        assert todo.get("id", None) != None
        assert todo.get("completed", None) == False

        # Update that todo
        res2 = requests.put(UPDATETODO(todo.get("id")))
        todo_res = res2.json()

        assert res2.status_code in status_codes
        assert todo_res.get("completed") == (not todo.get("completed"))

        # Check that the updated todo is present in the db
        res3 = requests.get(GETTODOS)
        todos = res3.json()

        assert todo_res in todos
