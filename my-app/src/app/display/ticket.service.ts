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
        .get("/api/gettickets")
                    .map(resp => resp.json());
    };  


    createTicket(newTicket){   
         console.log("http://localhost:3000/api/createticket api is being rendered" );
        return this._http
        .post("/api/createticket", newTicket)
                    .map(resp => resp.json());
    }
}