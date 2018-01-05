import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthentificationService {

    constructor(private http: Http, private router: Router) { }
    static id: any;
    private baseUrl:string="http://localhost:50000/";
    SignIn(username:string, password:string) {
        var object = { "username":username,"password":password};
        return this.http.post(this.baseUrl+"api/user/login",object,
                       { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) });
    }

    checkCredentials() {
        if (localStorage.getItem("currentUser") != null) {
            this.router.navigate(['/friends']);
        } 
        else this.router.navigate(['login']);
    }
    getUserData(id:number) {
        return this.http.get(this.baseUrl+"api/user/getData/"+id)
            .map(res => res.json());
    }
    getId() { return AuthentificationService.id; }

    setId(v: any) { AuthentificationService.id = v; }

}
