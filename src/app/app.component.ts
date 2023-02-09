import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  editValues = () => this.service.editInput();

  constructor(private service: CalculatorService){}
}
