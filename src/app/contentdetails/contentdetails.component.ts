import { Component, OnInit } from '@angular/core';
import { ContentlistComponent } from "../contentlist/contentlist.component";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contentdetails',
  templateUrl: './contentdetails.component.html',
  styleUrls: ['./contentdetails.component.css']
})
export class ContentdetailsComponent implements OnInit {
contentId:any;
  constructor(private ContentlistComponent:ContentlistComponent,private route:
     ActivatedRoute) {
    console.log(this.ContentlistComponent.content)
            this.contentId=this.route.snapshot.params['contentId'];

   }

  ngOnInit() {
  }

}
