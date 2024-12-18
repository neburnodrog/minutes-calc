import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MinutesCalcComponent } from 'src/components/minutes-calc.component';

@Component({
  imports: [RouterModule, MinutesCalcComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'minutes-calc';
}
