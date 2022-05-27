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

## Docker
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
