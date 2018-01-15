import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import 'rxjs/Rx';




@Injectable()
export class TicketService{

 constructor(private _http: Http){}

    getTickets(){
        console.log("http://localhost:3000/api/gettickets api is being rendered" );
        return this._http
        .get("http://localhost:3000/api/gettickets")
                    .map(resp => resp.json());
    };  




}