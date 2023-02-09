import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CalculatorInputDialogComponent } from './dialogs/calculator-input-dialog.component/calculator-input-dialog.component';
import { CalculatorInputComponent } from './components/calculator-input.component/calculator-input.component';
import { ProjectionTableComponent } from './components/projection-table.component/projection-table.component';
import { ProjectionChartComponent } from './components/projection-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        CalculatorInputDialogComponent,
        CalculatorInputComponent,
        ProjectionTableComponent,
        ProjectionChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
