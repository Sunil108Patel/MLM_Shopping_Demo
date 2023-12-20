import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   
  statesURL  ='http://localhost:8000/MLM/States?';

  constructor(private http : HttpClient) { };

  StatesDetails(){
    return this.http.get(this.statesURL)
  }
}
