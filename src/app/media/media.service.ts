import { Photo } from './media.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MediaService {
  private photos: Photo[] = [];

  constructor(private http: HttpClient){}

  getPhotos() {
    console.log("getPhotos called")
    return this.http.get<{message: String, photos: Photo[]}>('http://localhost:3000/api/photos')
      .pipe(
        map(photoData => {
          this.photos = photoData.photos;
          console.log(photoData.photos);
          return this.photos;
        })
      );
  }


  uploadPhoto(picture: string, date: Date, description: string, tags: Array<string>){
    const photo: Photo = {id:"", picture: picture, date: date, description: description, tags: tags};
    this.http.post<{message:string, postId:string}>("http://localhost:3000/api/photos",photo)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.photos.push(photo);
    })
  }

}
