import json
import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))
DATABASE = os.path.join(PROJECT_ROOT, 'db/todo_app.db')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////" + DATABASE
db = SQLAlchemy(app)


#-------------------------------- ORMs ------------------------------------
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(80))
    completed = db.Column(db.Boolean)


def as_dict(todo: Todo):
    if not todo: return ""
    return {"id": todo.id, "text": todo.text, "completed": todo.completed}


#-------------------------------- CORS ------------------------------------
@app.after_request
def after_request(response):
    response.headers[
        "Access-Control-Allow-Origin"] = "*"  # <- You can change "*" for a domain for example "http://localhost"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    response.headers[
        "Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers[
        "Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    return response


#-------------------------------- Routes ------------------------------------
@app.get("/todos")
def read_todos():
    todo_list = Todo.query.all()
    res = [as_dict(todo) for todo in todo_list]
    return json.dumps(res)


@app.post("/todos")
def create_todo():
    text = request.get_json().get("text")
    new_todo = Todo(text=text, completed=False)
    db.session.add(new_todo)
    db.session.commit()
    return as_dict(new_todo)


@app.put("/todos/<string:todo_id>")
def update_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    todo.completed = not todo.completed
    db.session.commit()
    return as_dict(todo)


@app.delete("/todos/<string:todo_id>")
def delete_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    db.session.delete(todo)
    db.session.commit()
    return as_dict(todo)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
