Notes on the Angular framework.

Based off the Udemy course "Angular - The Complete Guide (2022 Edition)" by Maximilian Schwarzmüller.

# Startup

`ng new`

`ng serve`

`ng build`

Directives are basically any custom HTML element/attribute that you can create. Components are actually directives. "Directives are instructions in the DOM."

# Directives

Attribute and structural directives.

Attribute directives kind of look like HTML element attributes.

Structural directives change the structure of the DOM (ngIf, etc.). They are also marked with an asterisk in HTML templates. An element can only have one structural directive (no combining ngFor and ngIf).

ng generate directive some-new-directive

# Misc

Scope of CSS files is blocked to only the component it's a part of. Angular enforces this by adding its own unique attributes to elements so the CSS can differentiate. This is similar to "shadow DOM".

It's actually best practice to do initialization in `ngOnInit` rather than the constructor. Find out why.

# Original README
```
# AppS113

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
```
