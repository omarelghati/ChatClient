import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AuthentificationService } from '../services/autentification.service';
import { UserService } from '../services/user.service';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MychatsComponent } from './mychats/mychats.component';
import { FriendsComponent } from './friends/friends.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MyprofileComponent,
    MychatsComponent,
    FriendsComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            { path: 'profile', component: MyprofileComponent },
            { path: 'chats', component: MychatsComponent },
            { path: 'friends', component: FriendsComponent },

            { path: '**', redirectTo: 'login' }
        ])
  ],
  providers: [AuthentificationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
