# Running instrictuins

## Preconditions

Install Angular CLI
> npm install -g @angular/cli

Install JSON Server
> npm install -g json-server

## Start the server

1. Run `npm start` in the directory of the project. This command will trigger `json-server --watch db.json` (JSON server) and `ng serve` (Angular project). 
2. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# About the project

This project was created using Angular CLI.
JSON Server is used to simulate the server and create a local API.
Chart.js library and ng2-charts wrapper is used to display reporting data on the page.
