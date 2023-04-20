import { Component, OnInit } from '@angular/core';
import { Officer } from './home.model';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

officers: Officer[] = [];

constructor(public homeService: HomeService){
  this.homeService = homeService
}

ngOnInit(): void {
    this.homeService.getOfficers();
    console.log(this.homeService.getOfficers())
}


}
