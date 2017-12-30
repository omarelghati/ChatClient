import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/autentification.service';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../../services/user.service';
import 'rxjs';
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    logoutConfirm: boolean = false;
    currentUser: any;
    friends: any[];
    sent: any[];
    received: any[];
    constructor(private auth: AuthentificationService,private user:UserService) {
    }
    ngOnInit() {
        this.auth.checkCredentials();
        var local = localStorage.getItem('currentUser');
        if (local != null)
        {
            this.currentUser = JSON.parse(local);
            this.user.getFriends(this.currentUser.id).subscribe((r) => { this.received = r.received; this.sent = r.sent; this.friends = r.friends; console.log(r); });
        }
    }
}