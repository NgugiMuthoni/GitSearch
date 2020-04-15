import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from './git/git.component';
import { ReposComponent } from './repos/repos.component';


const routes: Routes = [
  {path: '', component: GitComponent},
  {path: 'repos', component: ReposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
