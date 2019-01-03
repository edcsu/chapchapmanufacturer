# chapchapmanufacturer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Simulate Restful service
Whenever you start Angular dev server be sure to start json-server too.

json-server package in the project creates web services from JSON data or JavaScript code.

To start the RESTful web service, open a command prompt and run the following command in the Chapbon folder:
 `npm run json` which is short for `json-server data.js -p 3500 -m authMiddleware.js`

Navigate to `http://localhost:3500/` 
You can change the port in the package.json file where;
    ...
    "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
  #  "json": "json-server data.js -p 3500 -m authMiddleware.js"
    },
    ...

