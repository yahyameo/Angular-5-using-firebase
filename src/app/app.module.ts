import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ApplistComponent } from './applist/applist.component';
import { AppNotificationComponent } from './app-notification/app-notification.component';

// Other Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AuthguardService } from './services/authguard.service';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { DataTableModule } from 'angular5-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsService } from './services/apps.service';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { ContentdetailsComponent } from './contentdetails/contentdetails.component';
import { RefferalsComponent } from './refferals/refferals.component';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import * as moment from 'moment'

export interface AppList {
  title: string,
    category: string,
    websiteUrl: string,
    playStoreUrl: string,
    appStoreUrl: string,
    description: string,
    _id:string
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddEditComponent,
    ApplistComponent,
    AppNotificationComponent,
    ContentlistComponent,
    ContentdetailsComponent,
    RefferalsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ApplistComponent, canActivate: [AuthguardService] },
      { path: 'edit/:appid', component: AddEditComponent, canActivate: [AuthguardService] },
      { path: 'add', component: AddEditComponent, canActivate: [AuthguardService] },
      { path: 'notification/:contentId', component: AppNotificationComponent, canActivate: [AuthguardService] },
      { path: 'notification', component: AppNotificationComponent, canActivate: [AuthguardService] },
      { path: 'notification/:appID', component: AppNotificationComponent, canActivate: [AuthguardService] },
      { path: 'contentList', component: ContentlistComponent, canActivate: [AuthguardService] },
      { path: 'contentDetails/:contentId', component: ContentdetailsComponent, canActivate: [AuthguardService] },
      { path: 'refferal', component: RefferalsComponent, canActivate: [AuthguardService] },
      { path: 'signin', component: LoginComponent }
    ]),
  ],
  providers: [LoginService, AuthguardService, AppsService, AuthService, AngularFireAuth,ContentlistComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
