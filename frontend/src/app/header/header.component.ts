import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isToggled = false;

  setToggle(){
    if(this.isToggled){
      this.isToggled = false;
      // console.log(this.isToggled);
    }
    else if(!this.isToggled){
      this.isToggled = true;
      // console.log(this.isToggled);
    }
  }
}
