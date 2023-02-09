import { Component } from "@angular/core";
import { CalculatorService } from "src/app/services/calculator.service";

@Component({
    selector: 'calculator-input',
    templateUrl: './calculator-input.component.html',
    styles:[]
})
export class CalculatorInputComponent{

    public input$ = this.service.input$.pipe();

    public editValues = () => this.service.editInput();

    constructor(
        private service: CalculatorService
    ){}

}