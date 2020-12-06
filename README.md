# Retail Shop Management System Web App


It is retail shop management and blling system single page Web App.<br>
It supports all operations in constant time(except searching for an item)
It manages all shop items functions , removing item ,searching item,altering the properties of item.
It manages all receipt functions, removing items from receipt,  selecting quantity and it dynamically changes the subtotal according to quantity needed.It finally prints total bill.<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## How to use?
 The user can edit stock details or add a new stock .<br>
 The user clicks on an item and it will be added to receipt<br>
 Select the quantity and it will dymamically compute subtotal for that item (by multipliying with price Per piece).<br>
 Edit the receipt if needed  and finallly get the total bill
 
 
 ## Special care taken
 1. can search for an item according to name or company filters.<br>
 2.The user cannot have two items with same name(neither in stock nor in receipt) otherwise It will create confusion.<br>
 3.every Operation done in constant time(except searching which is done in linear time)<br>
 4.Changing the details of the item while it is already added to receipt ,removes it from receipt .<br>
 5.Validators are used where ever needed - no price below 1,no quantity below 1 in receipt<br>
 
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
