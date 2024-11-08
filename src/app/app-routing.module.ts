import { SectionComponent } from './section/section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'home',
    component:SectionComponent
  },
  {
    path:'course/:course/class/:id',
    component:QuestionBankComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
