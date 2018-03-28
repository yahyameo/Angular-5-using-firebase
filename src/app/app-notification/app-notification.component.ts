import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AppsService } from "../services/apps.service";
import { AngularFirestore } from "angularfire2/firestore";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Observable";
export interface BookMarked{
    UserID :string;
    CreationDate :string;
    IsActive:boolean;
}

declare var $:any;
@Component({
  selector: 'app-app-notification',
  templateUrl: './app-notification.component.html',
  styleUrls: ['./app-notification.component.css']
})
export class AppNotificationComponent implements OnInit {
  appsList: Observable<any[]>;
  constructor(private service: AppsService, private route:
    ActivatedRoute, private router: Router, private afs: AngularFirestore) {
   
  }
  urlregex = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');

   frmAddEditApp = new FormGroup({
    title: new FormControl('', Validators.required),
    createdDate: new FormControl(new Date()),
    appID:new FormControl(''),
    content:new FormControl(''),
    BookMarked:new  FormControl({}),
    isActive:new FormControl(true),
imageUrl:new FormControl('')
  });

  ngOnInit() {
    this.appsList = this.service.appsList;
    let id= this.route.snapshot.params['contentId'];
if(id)
  {
   this.frmAddEditApp.setValue({
    title: this.service.contentItemToEdit['title'],
    createdDate: this.service.contentItemToEdit['createdDate'],
    appID: this.service.contentItemToEdit['appID'],
    content: this.service.contentItemToEdit['content'],
    BookMarked: this.service.contentItemToEdit['BookMarked'],
    isActive:this.service.contentItemToEdit['isActive'],
    imageUrl:this.service.contentItemToEdit['imageUrl'],
      });
  }

  }
  addAppContent() {
    let id= this.route.snapshot.params['contentId'];
    console.log(this.route.snapshot.params['contentId'])
    if(id)
      {
        this.service.updateContent(id,this.frmAddEditApp.value);
      this.router.navigate(['contentList'])
      }
      else
{
      this.service.addAppContent(this.frmAddEditApp.value);
      this.router.navigate(['contentList'])

}
     
  }

  get title() {
    return this.frmAddEditApp.get('title')
  }
}
