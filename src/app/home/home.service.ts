import { Officer } from "./home.model";
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export class HomeService {
  private officers: Officer[] = [];

  constructor(private http: HttpClient){}

  getOfficers(){
    this.http.get<{message: String, officers: Officer[]}>('http://localhost:3001/api/officers')
    .pipe(map((officerData)=>{
      return officerData.officers.map(officer=>{
        return{
          id: officer.id,
          name: officer.name,
          title: officer.title,
          picture: officer.picture,
          email: officer.email,
          description: officer.description
        }
      })
    }))
  }
}
