import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';


const routes: Routes = [
                        {path: '', redirectTo:'/home', pathMatch: 'full'},
                        {path:'about', component:AboutComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'portfolio', component:PortfolioComponent},
                        {path:'skills', component:SkillsComponent},
                        {path:'home', component:HomeComponent},
                        {path:'**', component:NoPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
