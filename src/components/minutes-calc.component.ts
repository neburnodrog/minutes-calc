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
  protected speedups: Speedups = {
    research: {
      threeHours: null,
      hours: null,
      fiveMinutes: null,
      minutes: null,
    },
    training: {
      threeHours: null,
      hours: null,
      fiveMinutes: null,
      minutes: null,
    },
    construction: {
      threeHours: null,
      hours: null,
      fiveMinutes: null,
      minutes: null,
    },
    general: {
      threeHours: null,
      hours: null,
      fiveMinutes: null,
      minutes: null,
    },
    healing: {
      threeHours: null,
      hours: null,
      fiveMinutes: null,
      minutes: null,
    },
  };

  result = 0;

  convertMinutes() {
    const totalSpeedupMinutes: Record<keyof Speedups, number> = {
      research: 0,
      training: 0,
      construction: 0,
      general: 0,
      healing: 0,
    };
    let totalMinutes = 0;

    Object.entries(this.speedups).forEach(([speedupType, speedups]) => {
      Object.entries(speedups).forEach(([speedupTime, value]) => {
        const cleanValue = (value as number | null) ?? 0;

        switch (speedupTime) {
          case 'threeHours':
            totalSpeedupMinutes[speedupType as keyof Speedups] +=
              cleanValue * 180;
            totalMinutes += cleanValue * 180;
            return;

          case 'hours':
            totalSpeedupMinutes[speedupType as keyof Speedups] +=
              cleanValue * 60;
            totalMinutes += cleanValue * 60;
            return;

          case 'fiveMinutes':
            totalSpeedupMinutes[speedupType as keyof Speedups] +=
              cleanValue * 5;
            totalMinutes += cleanValue * 5;
            return;

          case 'minutes':
            totalSpeedupMinutes[speedupType as keyof Speedups] += cleanValue;
            totalMinutes += cleanValue;
            return;

          default:
            return;
        }
      });
    });

    // this.result = totalMinutes;
    alert(`
      Total speeup minutes: ${totalMinutes} minutes\n\n
      Details:\n

      Research speedups: ${totalSpeedupMinutes.research} minutes\n
      Training speedups: ${totalSpeedupMinutes.training} minutes\n
      Construction speedups: ${totalSpeedupMinutes.construction} minutes\n
      Healing speedups: ${totalSpeedupMinutes.healing} minutes\n
      General speedups: ${totalSpeedupMinutes.general} minutes\n
      `);
  }
}

interface Speedups {
  research: SpeedupTypes;
  training: SpeedupTypes;
  construction: SpeedupTypes;
  general: SpeedupTypes;
  healing: SpeedupTypes;
}

interface SpeedupTypes {
  threeHours: number | null;
  hours: number | null;
  fiveMinutes: number | null;
  minutes: number | null;
}
