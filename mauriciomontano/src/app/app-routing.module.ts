import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full', data: { animationState: 'Main' } },
  { path: 'main', component: MainComponent, data: { animationState: 'Main' } },
  { path: 'aboutme', component: AboutMeComponent, data: { animationState: 'Aboutme' } },
  { path: 'portafolio', component: PortafolioComponent, data: { animationState: 'Portafolio' } },
  { path: 'education', component: EducationComponent, data: { animationState: 'Education' } },
  { path: 'skills', component: SkillsComponent, data: { animationState: 'Skills' } },
  { path: 'contact', component: ContactComponent, data: { animationState: 'Contact' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
