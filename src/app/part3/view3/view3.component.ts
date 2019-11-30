import { Component, OnInit } from '@angular/core';
import { View3Service } from '../services/view3.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {

  constructor( private activate: ActivatedRoute,
    private service: View3Service) { }

data: Observable<any>;

ngOnInit() {
if(typeof(this.activate.snapshot.params.param) != 'undefined'){
this.getSearchData(this.activate.snapshot.params.param);
}
}

getSearchData(param: string): void{
this.data = this.service.dataFilter(param)
}

}
