# LabTarget

```bash
git clone https://github.com/AlbertoBasalo/lab-target
cd lab-target
npm install
npm start
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

### Generate the application

## Generate the application

```bash
ng new lab-target --minimal
```

### Consume (link) the library

```bash
# target the global npm link
cd lab-target
npm link lab-ui
npm link lab-srv
npm link lab-core
# build.options: preserveSymlinks: true
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```

```
