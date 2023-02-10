import { Component, OnDestroy, OnInit } from '@angular/core';
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
                                display:false
                            }
                        },
                        scales:{
                            y:{
                                ticks: {
                                    callback: (value) => this.yAxisFormat(value)
                                }
                            }
                        }
                    },
                    data
                });
            }
        });
    }

    ngOnDestroy() {
        this.data_sub?.unsubscribe();
    }

    private yAxisFormat(value:number|string){
        //Format values to include thousand commas.
        if(value >= 1000){
            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return '$' + value;
          }
    }
}
