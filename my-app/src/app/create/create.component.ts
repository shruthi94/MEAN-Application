import { Component } from '@angular/core';
import { TicketService } from "../display/ticket.service";
import { Ticket } from "../ticket";

@Component({
  selector: 'create-tt',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title = 'Create Trouble Tickets';
tickets: Ticket[];
ticket: Ticket;
description : String;
offerings: string;
contact: string;

constructor(private _httpService: TicketService){}
  addTicket(){
        event.preventDefault();
       var newTicket = {
         "description": this.description,
        "offerings":this.offerings,
        "contact": this.contact
       }
       console.log( newTicket+"description"+ this.description,
        "offerings"+this.offerings,
        "contact"+this.contact);

       this._httpService.
       createTicket(newTicket).subscribe(ticket =>
       {
         this.tickets.push(ticket);
       })
        
    }


}
