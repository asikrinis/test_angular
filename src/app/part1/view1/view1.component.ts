import { Component, OnInit } from '@angular/core';
import { View1Service } from '../services/view1.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private service: View1Service) { }
  data: Observable<any>;
  ngOnInit() {
    console.log('oninit');
    this.data = this.service.getData();
  }

}
