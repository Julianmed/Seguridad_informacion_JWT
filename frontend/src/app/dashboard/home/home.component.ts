import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: string;

  constructor(private calService: CalculatorService) { }

  ngOnInit() {
  }

  suma(form){
    this.calService.suma(form.value).subscribe((total) => {
      console.log(total);
      this.result = total;
    });
  }

}
