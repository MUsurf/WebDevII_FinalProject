import { Component } from '@angular/core';
import { MediaService } from './media.service';
import { Photo } from './media.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})


export class MediaComponent {

  originalPhotos: Photo[] = [];
  photos: Photo[] = [];

  constructor(public mediaService: MediaService){}

  ngOnInit() {
    console.log("ngOnInit called")
    this.mediaService.getPhotos()
      .subscribe(photos => {
        this.photos = photos;
        this.originalPhotos = photos
        console.log("Photos: " + this.photos);
        console.log("original photos: " + this.originalPhotos)

      });
  }

  onFilteredPhotos(filteredPhotos: Photo[]) {
    this.photos = filteredPhotos;
  }

}
