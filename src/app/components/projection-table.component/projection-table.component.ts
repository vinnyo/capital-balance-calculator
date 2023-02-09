import { Component } from "@angular/core";
import { CalculatorService } from "src/app/services/calculator.service";

@Component({
    selector: 'projection-table',
    templateUrl: './projection-table.component.html',
    styles: [],
})
export class ProjectionTableComponent {

    public projections$ = this._service.yearlyProjections$

    constructor(
        private _service: CalculatorService
    ){
        this.projections$.subscribe( res => console.log("yearly projections ", res))
    }
}