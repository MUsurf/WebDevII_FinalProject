import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';
import { Photo } from './media.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit{
  public photos: Photo[] = []

  constructor(public mediaService: MediaService){}

  ngOnInit(){
    console.log("ngOnInit called")
    this.mediaService.getMedia()
      .subscribe(photos => {
        this.photos = photos;
        console.log(this.photos);
      });
  }

}
