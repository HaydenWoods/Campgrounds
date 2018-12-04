FROM node:8.0-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json .
RUN npm install
RUN npm install -g nodemon

COPY . .