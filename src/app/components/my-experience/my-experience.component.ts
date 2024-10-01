import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-my-experience',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
  ],
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.scss'
})
export class MyExperienceComponent {

}
