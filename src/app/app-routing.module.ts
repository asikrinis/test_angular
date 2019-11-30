import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './part1/view1/view1.component';

const routes: Routes = [
  { path: '', component: View1Component },
  { path: '', loadChildren: './part2/part2.module#Part2Module' },
  { path: 'busqueda', loadChildren: './part3/part3.module#Part3Module' },
  //{ path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }