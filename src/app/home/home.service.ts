import { Officer } from "./home.model";
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
  private officers: Officer[] = [];

  constructor(private http: HttpClient){}

  getOfficers(){
    console.log("getOfficers called")
    this.http.get<{message: String, Officers: Officer[]}>('http://localhost:3000/api/officers')
    .subscribe((officerData) => {
      this.officers = officerData.Officers;
      console.log(this.officers);
    })

    return this.officers;
  }
}
