import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  inp1 =  new FormControl();
  inp2 =  new FormControl();
  result: number;
  symbol: string = '+';
  count: number;

  ngOnInit() {
    this.count = 0;
  }

  operate(operator){
    const val_inp1 = this.inp1.value;
    const val_inp2 = this.inp2.value;

    if(!val_inp1 || !val_inp2){
      return false;
    }

    switch(operator){
      case 'addition':
        this.result = val_inp1 + val_inp2;
        this.symbol = '+';
        break;

      case 'substraction':
        this.result = val_inp1 - val_inp2;
        this.symbol = '-';
        break;

      case 'multiplication':
        this.result = val_inp1 * val_inp2;
        this.symbol = '*';
        break;

      case 'division':
        this.result = val_inp1 / val_inp2;
        this.symbol = '/';
        break;
    }
    this.count++;
  }

  reset(){
    this.result = 0;
    this.count = 1;
    this.symbol = '';
  }

}
