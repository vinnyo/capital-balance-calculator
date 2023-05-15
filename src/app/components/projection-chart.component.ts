import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
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
export class ProjectionChartComponent implements OnInit {

    /** Chart instance */
    public chart: Chart;

    constructor(private _service: CalculatorService) {
        effect(() => {
            const data = this._service.chartData();
            if (this.chart) {
                this.chart.data = data;
                this.chart.update();
            }
        })
    }

    ngOnInit() {
        this.chart = new Chart('proj-chart', {
            type: 'line',
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: (value) => this.yAxisFormat(value)
                        }
                    }
                }
            },
            data: this._service.chartData()
        })
    }

    private yAxisFormat(value: number | string) {
        //Format values to include thousand commas.
        const toNum = Number(value);
        if (!isNaN(toNum) && toNum >= 1000) {
            return '$' + toNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return '$' + value;
        }
    }
}
