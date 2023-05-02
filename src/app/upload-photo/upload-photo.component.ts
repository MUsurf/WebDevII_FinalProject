import { Component } from '@angular/core';
import { MediaService } from '../media/media.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {

  constructor(public mediaService: MediaService){}


  onUploadPhoto(form: NgForm){
    if(form.invalid){
      return;
    }

    form.value.picture = '../../assets/media/' + form.value.picture;
    form.value.tags = form.value.tags.split(' ');
    this.mediaService.uploadPhoto(form.value.picture, form.value.date, form.value.description, form.value.tags);
    form.resetForm();

  }

}
