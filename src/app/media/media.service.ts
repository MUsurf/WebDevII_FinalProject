import { Photo } from "./media.model";
import { map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MediaService {
  private media: Photo[] = []

  constructor(private http: HttpClient){}

  getMedia(){
    console.log("getMedia called")
    return this.http.get<{message: String, Photos: Photo[]}>('http://localhost:3000/api/photos')
      .pipe(
        map( mediaData => {
          this.media = mediaData.Photos;
          console.log(this.media);
          return this.media;
        })
      );

  }

}
