import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { DEFAULT_INPUT } from '../constants';
import { CalculatorInputDialogComponent } from '../dialogs/calculator-input-dialog.component/calculator-input-dialog.component';
import { InputValues } from '../types';
import { calculateAnnualProjections } from './calculator.fn';

@Injectable({
    providedIn: 'root',
})
export class CalculatorService {

    /** Local store of input values */
    private readonly _input = new BehaviorSubject<InputValues>(DEFAULT_INPUT);
    public readonly input$ = this._input.asObservable();
    set input(value: InputValues) {
        this._input.next(value);
    }

    /** Calculated annual projections  */
    public yearlyProjections$ = this.input$.pipe(
      map( input => calculateAnnualProjections(input))
    )

    constructor(private _dialog: MatDialog) {}

    public editInput() {
        const current_values = this._input.getValue();
        const ref = this._dialog.open(CalculatorInputDialogComponent, {
            data: current_values,
        });

        const sub: Subscription = ref.afterClosed().subscribe((values) => {
            if(!values) return;
            this.input = values;
            sub.unsubscribe();
        });
    }
}
