# FastAPI Todo Application

![java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![springboot](https://img.shields.io/badge/Spring-boot?style=for-the-badge&logo=Spring&logoColor=white)

This is a basic API for a todo application made with Springboot. You can use any frontend framework with this. This project uses SQL in this project. Other databases can also be used easily.

## API endpoints:

- Get all the todo items present in the database, send a get request on the following endpoint:

```
http://127.0.0.1:5000/todos
```

- To post a todo item in the database, send a post request on the following endpoint:

```
http://127.0.0.1:5000/todos
```

- To update a specific todo item as completed/pending, send a put request on the following endpoint:

```
http://127.0.0.1:5000/todos/<todoItemID>
```

- To delete a specific todo item, send a delete request on the following endpoint:

```
http://127.0.0.1:5000/todos/<todoItemID>
```

For further details, you can refer to <a href="https://spring.io/projects/spring-boot">Spring-Boot</a>. Also, as a prerequisite, you'll need to have maven and SQL pre-installed on you system.


- To check the working or to run the basic template, run the command in terminal:

```
mvn spring-boot:run
```