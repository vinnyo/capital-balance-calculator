import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { DEFAULT_LINE_CHART_CONFIG } from '../constants';
import { CalculatorService } from '../services/calculator.service';
Chart.register(...registerables);

@Component({
    selector: 'projection-chart',
    styles: [],
    template: `
        <div class="full-row">
            <canvas id="proj-chart">{{ chart }}</canvas>
        </div>
    `,
})
export class ProjectionChartComponent implements OnInit, OnDestroy {
    /** Chart instance */
    public chart: Chart;
    /** Subscription to chart data observable */
    private data_sub: Subscription;

    constructor(private _service: CalculatorService) {}

    ngOnInit() {
        this.data_sub = this._service.chartData$.subscribe((data) => {
            if (!data) return;
            //Update chart if already exist. Else create new instance of Chart
            if (this.chart) {
                this.chart.data = data;
                this.chart.update();
            } else {
                this.chart = new Chart('proj-chart', {
                    type: 'line',
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                        },
                    },
                    data,
                });
            }
        });
    }

    ngOnDestroy() {
        this.data_sub?.unsubscribe();
    }
}
