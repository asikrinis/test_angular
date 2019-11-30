import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View3Component } from './view3/view3.component';
import { Routes, RouterModule } from '@angular/router';
import { View3Service } from './services/view3.service';

const routes: Routes = [
  { path: ':param', component: View3Component },
  { path: '**', redirectTo:'' }
];

@NgModule({
  declarations: [View3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    View3Service
  ]
})
export class Part3Module { }
