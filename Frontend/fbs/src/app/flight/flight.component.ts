import { Component, OnInit } from '@angular/core';
import { flight } from '../flight';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight:flight[] ;
  
  //flightService: any;
  constructor( private flightService:FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((data: flight[])=>{
      console.log(data);
     this.flight=data;
    });
  }

}
