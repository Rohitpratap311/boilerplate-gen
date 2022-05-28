# boilerplate-gen
[![App: Site](https://img.shields.io/badge/App-Site-orange)](https://aerothon-ntp.github.io/boilerplate-gen)
![Build](https://github.com/Aerothon-NTP/boilerplate-gen/actions/workflows/main.yml/badge.svg)
![Build](https://github.com/Aerothon-NTP/boilerplate-gen/actions/workflows/tests.yml/badge.svg)

<br>

- This repo houses the assests used to built the web application **boilerplate-gen** for **Aerothon 4.0** organized by **Airbus** at **Hackerearth**.
- This web application enables the user to build natives apps using a **cross platform UI** toolkit .
- The backend for this appliaction is hosted with **hikaru** and the frontend is hosted with **github pages**.
- **SQLite** database has been used.

<br>

## Dev :

- **CI/CD** pipeline is used to **automate the software delivery process**. 
- It builds code, runs tests (CI), and safely deploys a new version of the application (CD) .
- It remove manual errors, provide standardized feedback loops to developers, and enable fast product iterations.

<br>

## Tools :

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/> </a><a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/> <a href="https://www.python.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="80" height="80"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80"/> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/> </a>

<br>
    
## Features :
    
- This web application allows the user to download varoius **integrated combination** of frontend and backend template of a **todo application** supports **CRUD(Create,Read,Update,Delete)** operations and user can create any native application on the top of that.    
- It supports the following frameworks (as of now ): 
    - Frontend : React, Angular and React - Native
    - Backend  : Flask, FastAPI, SpringBoot and NodeJS 
- Requirement and dependencies for each framework is very **well documented**.
- This allows user to create 12 templates (more coming soon).
- It supports **command line utility** so the the user can directly download templates from terminal.
- All the components are **dockerised** ( also including dockercompose).
- We have created **test templates** for testing backends frameworks.
- This application provides a easy to use graphical **User Interface** so that anyone can use it and **download the ZIP file** for templates. 

<br> <img src="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/Resourecs/Generate%20BoilerPlate.png" /> <br>

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

