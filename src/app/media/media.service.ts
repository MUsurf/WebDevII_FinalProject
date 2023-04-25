import { Injectable } from "@angular/core";
import { Photo } from "./media.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MediaService {
  constructor(private http: HttpClient){}

  media: Photo[] = []

  getMedia(){
    this.http.get<{message: String, photos: Photo[]}>('http://localhost:3000/api/photos')
    .subscribe((MediaData)=>{
      this.media = MediaData.photos
    })

    return this.media
  }

}
