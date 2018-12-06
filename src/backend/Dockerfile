FROM node:8.0-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
RUN npm install -g nodemon --quiet

COPY . .