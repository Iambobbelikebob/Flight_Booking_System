import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-formbook',
  templateUrl: './formbook.component.html',
  styleUrls: ['./formbook.component.css']
})
export class FormbookComponent implements OnInit {
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
  
  }

  clickBookFlight()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }

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
    
    }
    ,err => {

      //alert("recored added");

      Swal.fire(

       "Record Added",
       "Successfully",
       "success"

     )

     })
  }
  
  
  
}