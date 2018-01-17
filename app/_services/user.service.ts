import { Injectable, Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { SptoolUser,User } from '../_models/index';

import {IUser } from '../home/user';
import { Observable, Subscribable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Subscription } from 'rxjs/Subscription';

import * as _ from 'underscore';
// import {decode} from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class UserService {
    constructor(private http: Http) { }
    // constructor(private http: HttpClient) { }
    private apiUserUrl = 'app/users.json';
    private result:any;
    private sptoolsUserUrl = 'http://localhost:7000/api/users/userNames';
    getAll() {
        return this.http.get('/api/users', this.jwt())
        .map((response: Response) => response.json());
        // .subscribe(
        //     function(response) { console.log("sucess response" + response)},
        //     function(error) { console.log("Error happened"+ error)},
        //     function() { console.log(" the subscription- getAll() - is completed")}
        // );
    }

    public getToken(): string {
         let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         var token = currentUser.token;
         return token;
    }

    public isAuthenticated():boolean {
        const token = this.getToken();
        return tokenNotExpired(null, token);
    }
    getAllSptoolUsers(){
        
       
        let values = [1,2,3];
        let transformed = values.map( value => value*10 );
        // return this.http.get('http://localhost:7000/api/users/userNames',this.jwt() )
        return this.http.get('http://localhost:7000/api/users/userNames' )
        .map((response: Response) => response.json());
        // .subscribe(
        //     function(response) { console.log("sucess response" + response)},
        //     function(error) { console.log("Error happened"+ error)},
        //     function() { console.log(" the subscription- getAll() - is completed")}
        // );
        // .do( data=>console.log( JSON.stringify(data)));
    }

    getUsers(){
        return this.http.get(this.apiUserUrl)
        .map((response :Response) => <IUser[]> response.json())
        .do(data => console.log(JSON.stringify(data)));
    }

    getSptoolsUsers():Observable<IUser[]>{
        return this.http.get(this.sptoolsUserUrl)
        .map((response :Response) => <IUser[]> response.json())
        .do(data => console.log(JSON.stringify(data)));
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}