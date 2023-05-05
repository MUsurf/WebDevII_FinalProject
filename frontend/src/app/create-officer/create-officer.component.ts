import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-create-officer',
  templateUrl: './create-officer.component.html',
  styleUrls: ['./create-officer.component.css']
})



export class CreateOfficerComponent {


  constructor(public homeService: HomeService){}

  onCreateOfficer(form: NgForm){
    if(form.invalid){
      return;
    }

    this.homeService.createOfficer(form.value.name, form.value.title, form.value.picture, form.value.email, form.value.description);
    form.resetForm();

  }


}
