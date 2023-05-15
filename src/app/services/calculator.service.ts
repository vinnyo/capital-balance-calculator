import { Injectable, computed, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Subscription, tap } from 'rxjs';
import { DEFAULT_INPUT } from '../constants';
import { CalculatorInputDialogComponent } from '../dialogs/calculator-input-dialog.component/calculator-input-dialog.component';
import { InputValues, YearlyProjection } from '../types';
import { calculateAnnualProjections } from './calculator.fn';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  /** Local store of input values */
  readonly input = signal<InputValues>(DEFAULT_INPUT);

  /** Calculated annual projections  */
  readonly yearlyProjections = computed(() => calculateAnnualProjections(this.input()));

  /** Chart series data */
  readonly chartData = computed(() => this.toChartData(this.yearlyProjections()));

  constructor(private _dialog: MatDialog) { }

  public editInput() {
    const current_values = this.input();
    const ref = this._dialog.open(CalculatorInputDialogComponent, {
      data: current_values,
    });

    const sub: Subscription = ref.afterClosed().subscribe((values) => {
      if (!values) return;
      this.input.set(values);
      sub.unsubscribe();
    });
  }

  private toChartData(projections: YearlyProjection[]) {
    return ({
      labels: projections.map(e => `${e.year}`),
      datasets: [
        {
          label: 'Start Balance',
          data: projections.map(e => e.start_balance)
        }
      ]
    })
  }
}


