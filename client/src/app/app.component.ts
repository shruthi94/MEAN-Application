import { Component } from '@angular/core';
import { TicketService } from "./ticket/ticket.service";
import { Ticket } from "./ticket/ticket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
tickets: Ticket[];

constructor(private _httpService: TicketService){}
ngOnInit(){
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



}
