# Capital Balance Calculator
---

This project is a sample of a simple Capital Balance Calculator written in Angular.The calculator takes a list of input parameters and generates yearly projections of a person's capital balances. 

## Approaches

This program uses a simple **BehaviorSubject** store implementation to store the input parameter values. The observable stream of input parameters is chained into several new observables with the data then processed and shaped into new data formats for different uses. Any components relying on these specific data formats would then subscribe to the appropriate observables.

With this approach, any updates to the input would immediately flow down respectively to each subscriber component. This also makes it easy to implement a new chain of observables in the future if any new transformation of data is required.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Libraries used

[Angular Material](https://material.angular.io/) - Used for general user controls and UI components 
[Tailwind CSS](https://tailwindcss.com/) - Framework for managing styling
[Chart.JS](https://www.chartjs.org/) - Used for creating charts

## Other notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.
