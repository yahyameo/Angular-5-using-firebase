import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import * as moment from 'moment'

export interface AppList {
  title: string,
    category: string,
    websiteUrl: string,
    playStoreUrl: string,
    appStoreUrl: string,
    description: string,
    imageUrl:string,
    _id:string
}
  export interface Content {
       title: string,
    category: string,
    createdDate: string,
    appID:string,
    content:string,
    BookMarked?: {},
    isActive:boolean,
    imageUrl:string
  }
export interface ContentIds extends Content {id:string}
export interface AppIds extends AppList { id: string; }

@Injectable()
export class AppsService implements OnInit  {

  appsCol: AngularFirestoreCollection<AppList>;
  appsList: Observable<AppList[]>;
  contentCol: AngularFirestoreCollection<Content>;
  contentList: Observable<Content[]>;
  contentItemToEdit:Content[];
  contentDoc: AngularFirestoreDocument<any>;
  appDoc: AngularFirestoreDocument<any>;
  appItemToEdit:AppList[];
  constructor(private http:Http,
    private db: AngularFirestore
  ) {
  
    this.appsCol = this.db.collection('apps');
    this.appsList = this.appsCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as AppList;
        const id = a.payload.doc.id;
        return { id, ...data };
        
      });
    });
  }
ngOnInit() {
   console.log('ng on init');
  }
updateContent(id,collection){
   this.contentDoc = this.db.doc(`Content/${id}`);
 this.contentDoc.update(collection);
}
updateApp(id,collection){
   this.appDoc = this.db.doc(`apps/${id}`);
 this.appDoc.update(collection);
}
deleteContent(contentId) {
    this.db.doc('Content/'+contentId).delete();
  }
  addNewApp(data) {
    this.db.collection('apps').add(data);
    return this.http.post(environment.apiUrl + '/insertOrUpdateApp', data)
  }
 addAppContent(data) {
    this.db.collection('Content').add(data);
  }


  getContent(){
this.contentCol = this.db.collection('Content');
    
    return this.contentList = this.contentCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Content;
        const id = a.payload.doc.id;
        return { id, ...data };
        
      });
    });
  }
 formateDate(data) {
    return moment(data).format('lll')
  }
  getApp(data){
    return this.http.get(environment.apiUrl+'/app?id='+data);
  }
}