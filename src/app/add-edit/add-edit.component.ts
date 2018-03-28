import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AppsService } from '../services/apps.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  appData:any
  constructor(private service: AppsService, private route:
     ActivatedRoute,private router:Router,private afs: AngularFirestore) {

  }
  urlregex = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');

  frmAddEditApp = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('Books', Validators.required),
    websiteUrl: new FormControl('', [Validators.required, Validators.pattern(this.urlregex)]),
    playStoreUrl: new FormControl('', Validators.pattern(this.urlregex)),
    appStoreUrl: new FormControl('', Validators.pattern(this.urlregex)),
    description: new FormControl('', Validators.required),
    createdDate:new FormControl(new Date()),
  });

  ngOnInit() {
    let appid=this.route.snapshot.params['appid'];
    if(appid)
      {
        this.frmAddEditApp
      .setValue({
        title: this.service.appItemToEdit['title'],
        category: this.service.appItemToEdit['category'],
        websiteUrl: this.service.appItemToEdit['websiteUrl'],
        appStoreUrl: this.service.appItemToEdit['appStoreUrl'],
        playStoreUrl: this.service.appItemToEdit['playStoreUrl'],
        description: this.service.appItemToEdit['description'],
         createdDate: this.service.appItemToEdit['createdDate'],
      })
      }
        console.log(this.route.snapshot.params['appid']);
        console.log(this.service.appsList)
  }
  fillData(data) {
    let title = '';
    if (data && data.title) {
      title = data.title
    }
    let category = 'Book'
    if (data && data.category) {
      category = data.category
    }
    let websiteUrl = ''
    if (data && data.websiteUrl) {
      websiteUrl = data.websiteUrl
    }
    let appStoreUrl = ''
    if (data && data.appStoreUrl) {
      appStoreUrl = data.appStoreUrl
    }
    let playStoreUrl = ''
    if (data && data.playStoreUrl) {
      playStoreUrl = data.playStoreUrl
    }
    let description = ''
    if (data && data.description) {
      description = data.description
    }
   
    this.frmAddEditApp
      .setValue({
        title: title,
        category: category,
        websiteUrl: websiteUrl,
        appStoreUrl: appStoreUrl,
        playStoreUrl: playStoreUrl,
        description: description
      })
  }
  addEditApp() {
    if (this.frmAddEditApp.valid) {
       let id= this.route.snapshot.params['appid'];
    console.log(this.route.snapshot.params['appid'])
    if(id){
             this.service.updateApp(id,this.frmAddEditApp.value);
             this.router.navigate(['']);
    }
            else{
            this.service.addNewApp(this.frmAddEditApp.value);
             this.router.navigate(['']);
    }
    } else {
      this.frmAddEditApp.setErrors({ error: "form is not valid" })
    }
  }

  get title() {
    return this.frmAddEditApp.get('title')
  }

  get category() {
    return this.frmAddEditApp.get('category')
  }
  get websiteUrl() {
    return this.frmAddEditApp.get('websiteUrl')
  }
  get appStoreUrl() {
    return this.frmAddEditApp.get('appStoreUrl')
  }
  get playStoreUrl() {
    return this.frmAddEditApp.get('playStoreUrl')
  }
  get description() {
    return this.frmAddEditApp.get('description')
  }


}
