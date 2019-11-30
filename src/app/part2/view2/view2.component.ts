import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { View2Service } from '../services/view2.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(private activate: ActivatedRoute,
    private service: View2Service) { }

  data: Observable<any>;
  param: string;

  ngOnInit() {
    if (typeof (this.activate.snapshot.params.id) != 'undefined') {
      this.param = this.activate.snapshot.params.id;
      this.dataParamater(this.activate.snapshot.params.id);
    }
  }

  dataParamater(id: number | string): void{
    console.log(id);
    this.data = this.service.getDataParameters(id);
  }


}
