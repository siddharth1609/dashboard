import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Car } from './table.model';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TableService{
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('./assets/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}