import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, CommonModule, FormsModule],
  selector: 'app-minutes-calc',
  templateUrl: './minutes-calc.component.html',
  styleUrl: './minutes-calc.component.scss',
})
export class MinutesCalcComponent {
  protected threeHours = 0;
  protected hours = 0;
  protected fiveMinutes = 0;
  protected minutes = 0;

  result = 0;

  convertMinutes() {
    const threeHoursInMinutes = this.threeHours * 180;
    const hoursInMinutes = this.hours * 60;
    const fiveMinutesInMinutes = this.fiveMinutes * 5;
    const totalMinutes =
      threeHoursInMinutes +
      hoursInMinutes +
      fiveMinutesInMinutes +
      this.minutes;

    this.result = totalMinutes;
  }
}
