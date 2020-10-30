# ElrondExplorer
This project was created as a POC project

## Development server

1. For the mockAPI I used https://github.com/typicode/json-server
In order to run mockAPI you will need to do the following
 -  Install the json-server npm install -g json-server
 -  Navigate in the solution to MockApi folder
 -  Open a terminal (git bash, powershell) and run json-server --watch db.json
Now it will be up and running the MockAPi Server on http://localhost:3000

2. For the angular app run the following command
`ng serve --open` to also reflect any change you are doing it to the code.  Navigate to `http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
But there are no extra tests written for the moment

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
But there are no extra tests written for the moment
