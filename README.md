# Evado Demo

Presentation of the main features of the 
[Evado Declarative Framework](https://github.com/mkhorin/evado)
for rapid web app development.

![Evado Declarative Framework](https://github.com/mkhorin/evado/blob/master/doc/evado-framework-steps.jpg)

## Installation

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