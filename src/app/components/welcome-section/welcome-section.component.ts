import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.scss'
})
export class WelcomeSectionComponent implements OnInit {

  ngOnInit(): void {
    let typedName = new Typed('#p-name', {
      strings: ['¡Hola, soy Luis Quiroz!'],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 625,
      fadeOut: true,
      loop: false
    });
    
    let typedPosition = new Typed('#p-position', {
      strings: ['Desarrollador de software'],
      startDelay: 3800,
      showCursor: false,
      typeSpeed: 50,
      loop: false
    });
  }

}
