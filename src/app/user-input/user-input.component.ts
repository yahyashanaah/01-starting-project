import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');
  constructor(private invetstmentService: InvestmentService) {
    
  }
  onSubmit(){
    this.invetstmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedInvestment()
     });
   this.enteredAnnualInvestment.set('0');
   this.enteredInitialInvestment.set('0');
   this.enteredExpectedInvestment.set('5');
   this.enteredDuration.set('10');
  }
}
