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

  getOfficers() {
    console.log("getOfficers called")
    return this.http.get<{message: String, Officers: Officer[]}>('http://localhost:3000/api/officers')
      .pipe(
        map(officerData => {
          this.officers = officerData.Officers;
          console.log(this.officers);
          return this.officers;
        })
      );
  }


  createOfficer(name: string, title: string, picture: string, email: string, description: string){
    const officer: Officer = {id:"", name: name, picture: picture, title: title, email: email, description: description};
    this.http.post<{message:string, postId:string}>("http://localhost:3000/api/officers",officer)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.officers.push(officer);
    })
  }

}
