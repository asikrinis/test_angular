import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2/view2.component';
import { Routes, RouterModule } from '@angular/router';
import { View2Service } from './services/view2.service';

const routes: Routes = [
  { path: ':id', component: View2Component },
];
@NgModule({
  declarations: [View2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    View2Service
  ]
})
export class Part2Module { }
