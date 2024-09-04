import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  private baseUrl1="http://localhost:8003/AllFlights";
  getAllFlight(): Observable<Book[]> {

    return this.http.get<Book[]>(`${this.baseUrl1}`);

  }
  postBooking(books:Book): Observable<Book[]>
  {
    return this.http.post<Book[]>("http://localhost:8003/addTicket",books)
  }
  //get

  getAllTicket()
  {
    return this.http.get<any>("http://localhost:8003/AllTickets").pipe(map((res:any)=>{
      return res;
    }))
  }
  //update
  updateBooking(books:any, pnr:string)
  {
    return this.http.put<any>("http://localhost:8003/update/"+pnr,books).pipe(map((res:any)=>{
      return res;
    }))
  }
  //delete
  deleteBooking(pnr:string)
  {
    return this.http.delete<any>("http://localhost:8003/delete/"+pnr).pipe(map((res:any)=>{
      return res;
    }))
  }
}