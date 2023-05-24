import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  tabIndex: number = 0;

  tabChange(index: number){
    this.tabIndex = index;
  }
}
