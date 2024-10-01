import { Component } from '@angular/core';
import { WelcomeSectionComponent } from '../../components/welcome-section/welcome-section.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MyExperienceComponent } from '../../components/my-experience/my-experience.component';
import { MySkillsComponent } from '../../components/my-skills/my-skills.component';
import { MyProjectsComponent } from '../../components/my-projects/my-projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeSectionComponent,
    MyExperienceComponent,
    MySkillsComponent,
    MyProjectsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
