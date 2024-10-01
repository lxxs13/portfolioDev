import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  onDownloadPDFFIle(): void {
    let link = document.createElement('a');
    link.download = 'CV Desarrollador de software Luis Quiroz Schlemm';
    link.href = 'assets/docs/CV-Software-Developer-Luis-Quiroz-Schlemm.pdf';
    link.click();
  }

}
