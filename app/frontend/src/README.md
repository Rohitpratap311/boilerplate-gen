# boilerplate-gen
[![App: Site](https://img.shields.io/badge/App-Site-orange)](https://aerothon-ntp.github.io/boilerplate-gen)
![Build](https://github.com/Aerothon-NTP/boilerplate-gen/actions/workflows/main.yml/badge.svg)
![Build](https://github.com/Aerothon-NTP/boilerplate-gen/actions/workflows/tests.yml/badge.svg)


## Features Done:
- CI/CD => for deployment of web app and tests
- Web app
- Frontend
    - React, Angular and React - Native

- Backend
    - Flask, FastAPI, SpringBoot and NodeJS

- Command line utility
- Heroku hosting
- Dockerised all the components ( also including dockercompose)
- Test - Test templates for testing backends
- SQLITE DB
- Zip download
<img src="https://github.com/Aerothon-NTP/boilerplate-gen/blob/document/Resourecs/Generate%20BoilerPlate.png" width="128"/>

# Requirements for using different frameworks and tools :

## 1. Docker
Change docker-compose.yml as required by your tech stack

As a sample React X Flask is already given.

Run:
- Start the app

        docker-compose up

- For starting the app with a rebuild

        docker-compose up --build

- Start the app in detached mode

        docker-compose up -d

- Stoping the app

        docker-compose down


## 2. FastAPI 

![Python 3](https://img.shields.io/badge/Python-3-green.svg?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-009485?style=for-the-badge&logo=fastapi&logoColor=white)

You can use any frontend framework with this. This project uses SQLite in this project. Other databases can also be used easily. <a href="https://fastapi.tiangolo.com/tutorial/sql-databases/">Refer to this</a> for more information on how to use other databases with FastAPI.


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

For further details, you can refer to <a href="http://127.0.0.1:5000/docs">http://127.0.0.1:5000/docs</a> after starting the server. It will give you an auto generated and very detailed documentation.


- To check the working or to run the basic template, run the command in terminal:

```
uvicorn main:app --reload
```

## 3. Flask 

![Python 3](https://img.shields.io/badge/Python-3-green.svg?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/Flask-009485?style=for-the-badge&logo=fastapi&logoColor=white)

You can use any frontend framework with this. This project uses SQLite in this project. Other databases can also be used easily.

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

## 4. Springboot

![java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![springboot](https://img.shields.io/badge/Spring-boot?style=for-the-badge&logo=Spring&logoColor=white)

You can use any frontend framework with this. This project uses SQL in this project. Other databases can also be used easily.

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

- To delete all todo items, send a delete request on the following endpoint:

```
http://127.0.0.1:8000/todos
```

For further details, you can refer to <a href="https://spring.io/projects/spring-boot">Spring-Boot</a>. Also, as a prerequisite, you'll need to have maven 3.x and SQL pre-installed on you system. And as an SQL action, create a DB and change <a href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/backend/Springboot/src/main/resources/application.properties">Application.properties</a> file accordingly.


- To install all the packages/dependencies, run the command in terminal:

```
mvn install
```

- To check the working or to run the basic template, run the command in terminal:

```
mvn spring-boot:run
```

## 5. ReactJS

## Integeration

Works with any boilerplate backend chose, uses all the end-points given in the doc (check backend schema).   

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>


## 6. AngularJS

 ## Integeration

Works with any boilerplate backend chosen, uses all the end-points given in the doc (check backend schema).

## Scripts

To Install dependencies in the development mode. In the project directory, you can run:

### `npm install`

Serve on localhost:4200

### `ng serve`

Build for production

### `ng build`

## 7. Command Line Tool

How to use the NTP Command line tool (Make sure you have python installed in your machine):

**STEP 1:**  Download all the supporting packages using the following command

### `pip install -r requirements.txt`

<a href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/document/cmd_tool/requirements.txt">Requirements file</a>

**STEP 2:** You can run the Tool using

### `python tool.py` 

