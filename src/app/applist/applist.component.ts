import { Component, OnInit } from '@angular/core';
import { DataTableResource } from "angular5-data-table";
import { AppsService } from '../services/apps.service';
import * as moment from 'moment'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {  AppModule } from "../app.module";


@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {
  appsList: Observable<any[]>;
  itemCount: number;

  constructor(private appsService: AppsService,
    private db: AngularFirestore
  ) {
   
    this.appsList=this.appsService.appsList;
  }
setValueToEdit(data){
this.appsService.appItemToEdit=data;
console.log(data)
}
  getSum(value: Array<number>) {
    //console.log(value)
    var result = 0;
    value.forEach((itemNumber) => {
      result = result + itemNumber;
    })
    return result;
  }
  getAverageRating(value: Array<number>) {
    //console.log(value)
    var result = 0;
    value.forEach((itemNumber) => {
      result = result + itemNumber;
    })
    return result/value.length;
  }
  formateDate(data) {
    return moment(data).format('lll')
  }
  ngOnInit() {
  }

}

