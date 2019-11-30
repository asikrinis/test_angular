import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1/view1.component';
import { View1Service } from '../part1/services/view1.service';

@NgModule({
  declarations: [View1Component, View1Service],
  imports: [
    CommonModule
  ]
})
export class Part1Module { }
