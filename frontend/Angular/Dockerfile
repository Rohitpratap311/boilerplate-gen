FROM python:2.7-alpine
FROM node:14-alpine

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

COPY ./ ./
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 3000
CMD ["ng", "serve", "--host", "0.0.0.0"]