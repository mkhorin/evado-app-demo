# Evado Demo

Presentation of features of 
[Evado Declarative Framework](https://github.com/mkhorin/evado)
for rapid web app development.

![Evado Declarative Framework](https://github.com/mkhorin/evado/blob/master/doc/evado-framework-steps.jpg)

## Docker installation

Copy files from repository to `/app`
```sh
cd /app
docker-compose up -d mongo
docker-compose up --build installer
docker-compose up -d server
```

## Typical installation

#### Install environment
- [Node.js](https://nodejs.org) (version 16)
- [MongoDB](https://www.mongodb.com/download-center/community) (version 4)

#### Linux
Copy files from repository to `/app`
```sh
cd /app
npm install
NODE_ENV=development node console/install
```

#### Windows
Copy files from repository to `c:/app`
```sh
cd c:/app
npm install
set NODE_ENV=development
node console/install
```

## Start app

#### Linux
```sh
cd /app
NODE_ENV=development node console/start
```

#### Windows
```sh
cd c:/app
set NODE_ENV=development
node console/start
```

## Usage

Web interface `http://localhost:3000`

## Tutorial

- [Build Apps Without Coding](https://mkhorin.github.io/evado-site/)