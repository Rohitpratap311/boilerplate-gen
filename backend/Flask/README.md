# Flask Todo Application

![Python 3](https://img.shields.io/badge/Python-3-green.svg?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/Flask-009485?style=for-the-badge&logo=fastapi&logoColor=white)

This is a basic API for a todo application made with Flask. You can use any frontend framework with this. This project uses SQLite in this project. Other databases can also be used easily.

## API endpoints:

- Get all the todo items present in the database, send a get request on the following endpoint:

```
http://127.0.0.1:8000/todos
```

- To post a todo item in the database, send a post request on the following endpoint:

```
http://127.0.0.1:8000/todos
```

- To update a specific todo item as completed/pending, send a put request on the following endpoint:

```
http://127.0.0.1:8000/todos/<todoItemID>
```

- To delete a specific todo item, send a delete request on the following endpoint:

```
http://127.0.0.1:8000/todos/<todoItemID>
```

- To check the working or to run the basic template, run the commands in terminal:

```
python -m pip install -r requirements.txt
python app.py
```