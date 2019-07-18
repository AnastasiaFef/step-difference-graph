# Running instrictuins

## Preconditions

Install Angular CLI
> npm install -g @angular/cli

Install JSON Server
> npm install -g json-server

## Start the server

1. Run `npm start` in the directory of the project. This command will trigger `json-server --watch db.json` (JSON server) and `ng serve` (Angular project). 

[![npm start](https://media.giphy.com/media/fYMgrEw4xE8rZJW7se/giphy.gif)](https://drive.google.com/open?id=1Bce9hbAGv8dPFB-EK5GNzJ5IwYMHSyNu)


2. Navigate to `http://localhost:4200/`.

[![localhost:4200](https://media.giphy.com/media/elDtrUpkrh8UpmRJQq/giphy.gif)](https://drive.google.com/open?id=1SNBX1oQljx7-EPKg7YOvK6mmcRdra8_I)


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# About the project

This project was created using Angular CLI.
JSON Server is used to simulate the server and create a local API.
Chart.js library and ng2-charts wrapper is used to display reporting data on the page.

If the server slow or isn't started user will get "Loading..." message:
[![Loading...](https://media.giphy.com/media/ghHrtsd8SqjQnDDCwz/giphy.gif)](https://drive.google.com/open?id=1N2UF0EcV0IlBd77fg47n_OrN0R-nuVVk)

The line chart displays 3 data: the "tracked" data (simulates Merlin data), "synced" data (simulates what end user is presented in the app) and the "difference" (visualization of the syncing gaps). You can select what line charts to view:

[![filter data](https://media.giphy.com/media/RfY8XEieq2nNMrZWe2/giphy.gif)](https://drive.google.com/open?id=1N2UF0EcV0IlBd77fg47n_OrN0R-nuVVk))

When hovering over the dots, you'll be able to see exact numbers for a given day:

[![data points](https://media.giphy.com/media/UU1N93QFTLniyUhH7W/giphy.gif)](https://drive.google.com/open?id=1VFi9AWYfxh8xZSL5dNELLbU2VA9ZqRGg))
