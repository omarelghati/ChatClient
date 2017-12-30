import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
@Injectable()
export class UserService {
    private baseUrl:string="http://localhost:50000/";
    constructor(private http:Http) { }

    SendRequest(idSender: number, idReceiver: number) {
        return this.http.post(this.baseUrl+"api/user/sendRequest/"+idSender+ "/" + idReceiver, {})
            .map(res => res);
    }

    getUsers(id:number) {
        return this.http.post(this.baseUrl+"api/user/getUsers/" + id, {})
            .map(response => response.json());
    }
    getFriends(id:number) {
        return this.http.get(this.baseUrl+'api/user/friends/' + id)
                   .map(res => res.json());
    }
}
