import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from '../flight.service';
import { flight } from '../flight';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights: flight[] ;
  formValue!: FormGroup

  flightModelObject: flight = new flight;
  showAdd: boolean;
  showBtn: boolean;
  allflightData: any;;
  constructor(private formBuilder: FormBuilder,private flightService:FlightService) { }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        f_id: [''],
        f_name: [''],
        origin: [''],
        destination: ['']
      }
    )
    this.getFlights();
  }
clickAddFlight()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showBtn=false;
}

getFlights()
{
  this.flightService.getAllFlight().subscribe((flight: flight[])=>
  {
    console.log(flight);
    this.flights= flight;
  });
}

//subscribe
addFlight() {
  this.flightModelObject.f_id=this.formValue.value.f_id;
  this.flightModelObject.f_name= this.formValue.value.f_name;
  this.flightModelObject.origin = this.formValue.value.origin;
  this.flightModelObject.destination = this.formValue.value.destination;

  this.flightService.postFlight(this.flightModelObject).subscribe((res:any[]) => {
    console.log(res);
    //alert("New record Added");
    Swal.fire(
      "Record Added",
      "Successfully",
      "success"
    )
    this.formValue.reset();
  }
    , err => {
     //alert("Error Occured");
     Swal.fire(
      "Error",
      "Occurred",
      "error"
    )
      this.getFlights();
    })
}
//delete
deleteFlight(data:any)
{
this.flightService.deleteFlight(data.f_id).subscribe((res:any[])=>{
    console.log(res);
}, err =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })  
    this.getFlights();
  }

  /* if(confirm("delete the record of id "+data.f_id))
  {
    console.log("delete");
    this.getFlights();
  } */
)
}

//edit
onEditFlight(data:any)
{
  this.flightModelObject.f_id = data.f_id;
  this.formValue.controls['f_name'].setValue(data.f_name);
  this.formValue.controls['origin'].setValue(data.origin);
  this.formValue.controls['destination'].setValue(data.destination);

}

updateFlight()
{
  this.flightModelObject.f_id=this.formValue.value.f_id;
  this.flightModelObject.f_name= this.formValue.value.f_name;
  this.flightModelObject.origin = this.formValue.value.origin;
  this.flightModelObject.destination = this.formValue.value.destination;
 

  this.flightService.updateFlight(this.flightModelObject, this.flightModelObject.f_id)
  .subscribe((res:any[])=>{
    //alert("Record Updated");
    Swal.fire(
      "Record Updated",
      "Successfully",
      "success"
    )
    this.formValue.reset();
  }
    , err => {
     //alert("Error Occured");
     Swal.fire(
      "Error",
      "Occurred",
      "error"
    )
    this.getFlights();
  });
}
}