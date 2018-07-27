import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { signUpModel } from '../user/signUpModel';
import { environment } from '../../environments/environment';
@Injectable()
export class UserService {

    appUrl = environment.appUrl;
    constructor(private http: HttpClient) { 
        
    }
  
    getAll() {
        console.log(this.appUrl);
        return this.http.get<signUpModel[]>(this.appUrl+'getuser');
    }

    getById(id: number) {
        return this.http.get('users/' + id);
    }

    create(user: signUpModel) {
        return this.http.post(this.appUrl+'user', user);
    }

    update(user: signUpModel) {
        return this.http.put('/api/users/' + user.username, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}