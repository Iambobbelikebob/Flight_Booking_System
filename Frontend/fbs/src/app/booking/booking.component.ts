 import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']

})

export class BookingComponent implements OnInit {
 books: Book[] ;
  formValue!: FormGroup

  bookModelObject: Book = new Book;
  showAdd: boolean;
  showBtn: boolean;
  allflightData: any;;
  

  constructor(private formBuilder: FormBuilder,private bookservice:BookService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        pnr: [''],
        ticket_id: [''],
        no_of_seats: [''],
        origin: [''],
        destination: [''],
        time: ['']
      }
    )
    this.getBookingList();
  }


clickBookFlight()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showBtn=false;
}

getBookingList()
{
  this.bookservice.getAllTicket().subscribe((book: Book[])=>
  {
    console.log(book);
    this.books= book;
  });
}

getAllFlightList()
{
  this.bookservice.getAllFlight().subscribe((book: Book[])=>
  {
    console.log(book);
    this.books= book;
  });
}
//subscribe
addBooking() {
  this.bookModelObject.pnr=this.formValue.value.pnr;
  this.bookModelObject.ticket_id= this.formValue.value.ticket_id;
  this.bookModelObject.no_of_seats=this.formValue.value.no_of_seats;
  this.bookModelObject.origin = this.formValue.value.origin;
  this.bookModelObject.destination = this.formValue.value.destination;
  this.bookModelObject.time=this.formValue.value.time;

  

  this.bookservice.postBooking(this.bookModelObject).subscribe((res:any[]) => {
    console.log(res);
    alert("New record Added");
    this.formValue.reset();
    this.getBookingList();
  }
    , err => {
      alert("Error Occured");
      this.getBookingList();
    })
}




//delete
deleteBookingList(data:any)

{

  this.bookservice.deleteBooking(data.pnr).subscribe((res:any[])=>{
    console.log(res);
   /*  alert("Record Deleted");
    this.formValue.reset(); */
    Swal.fire(



      "Record deleted",
      "Successfully",
      "success"
    )
    this.getBookingList();
  })
  if(confirm("delete the record of id "+data.pnr))
  {
    Swal.fire(
      "Record deleted",
      "Successfully",
      "success"
    )
    console.log("delete");
    
    //this.getBookingList();
  }
}



//edit
onEditBook(data:any)
{
  
  this.bookModelObject.pnr = data.pnr;
  this.formValue.controls['ticket_id'].setValue(data.ticket_id);
  this.formValue.controls['no_of_seats'].setValue(data.no_of_seats);
  this.formValue.controls['origin'].setValue(data.origin);
  this.formValue.controls['destination'].setValue(data.destination);
  this.formValue.controls['time'].setValue(data.time);

}

updateBookingList()
{
 this.bookModelObject.pnr=this.formValue.value.pnr;
  this.bookModelObject.ticket_id=this.formValue.value.ticket_id;
  this.bookModelObject.no_of_seats=this.formValue.value.no_of_seats;
  this.bookModelObject.origin = this.formValue.value.origin;
  this.bookModelObject.destination = this.formValue.value.destination;
  this.bookModelObject.time=this.formValue.value.time;
  console.log(this.bookModelObject)
  this.bookservice.updateBooking(this.bookModelObject, this.bookModelObject.pnr)
  .subscribe((res:any[])=>{
    alert("Record Updated");
    this.getBookingList();
  });
}
}