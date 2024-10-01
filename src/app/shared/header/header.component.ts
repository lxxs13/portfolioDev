import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element)
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


}
