import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl ="http://localhost:8002/searchflights";

  constructor(private http: HttpClient) { }

  getFlight(): Observable<flight[]>{
    return this.http.get<flight[]>(`${this.baseUrl}`);
  }

  private baseUrl1="http://localhost:8001/flight/getall";
  getAllFlight(): Observable<flight[]> {
    return this.http.get<flight[]>(`${this.baseUrl1}`);
  }
  postFlight(flights:flight): Observable<flight[]>
  {
    return this.http.post<flight[]>("http://localhost:8001/flight/addflight",flights)
    
  }
  
  //get
 
  getFlights()
  {
    return this.http.get<any>("http://localhost:8001/flight/getall").pipe(map((res:any)=>{
      return res;
    }))
  }

  //update
  updateFlight(flight:any, t_id:string)
  {
    return this.http.put<any>("http://localhost:8001/flight/update/"+t_id,flight).pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete
  deleteFlight(t_id:string)
  {
    return this.http.delete<any>("http://localhost:8001/flight/delete/"+t_id).pipe(map((res:any)=>{
      return res;
    }))
  } 
}