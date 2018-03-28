import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AppsService } from "../services/apps.service";

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  content: Observable<any[]>;

  constructor(private service:AppsService) { 
    this.content=service.getContent();
  }

  ngOnInit() {
  }
  setModelToEdit(item){
    this.service.contentItemToEdit=item;
  console.log(this.service.contentItemToEdit);
  }
delete(contentId){
this.service.deleteContent(contentId);
}

}
