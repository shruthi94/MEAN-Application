import { Component ,OnInit} from '@angular/core';
import {Ticket } from '../ticket';
import { TicketService } from './ticket.service';
//import {TICKETS } from '../mock-tickets';

@Component({
  selector: 'tt',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

title = 'Create My Ticket';
tickets : Ticket[];
getData : string;




ticket: Ticket;
description : String;
offering: string;
contact: string;
customer: string;

constructor(private _httpService: TicketService){}
ngOnInit()  {
  this.getAllTickets();
  console.log("tickets are:"+this.tickets);
 
}
getAllTickets(){
  console.log("GET TICKET SAPI CALLED");
  this._httpService.getTickets().subscribe(
  
   data => this.tickets = data,
   error => console.log(error)
  );
}

reset(){
console.log("reset button clicked");
};

  addTicket(){
    console.log("inside addticket");
        event.preventDefault();
       var newTicket = {
        "description": this.description,
        "offering":this.offering,
        "contact": this.contact,
        "customer": this.customer
       }
       console.log( newTicket+"description"+ this.description,
        "offerings"+this.offering,
        "contact"+this.contact,"customer"+this.customer);




      if(newTicket.description == "undefined" ){
        console.log("empty object");
      }else{
           this._httpService.
       createTicket(newTicket).subscribe(ticket =>
       {
         console.log(ticket),
         this.tickets.push(ticket);


  this._httpService.getTickets().subscribe(
  
   data => this.tickets = data,
   error => console.log(error)
  );



       })
      }
  
      
    
        
    }










}
