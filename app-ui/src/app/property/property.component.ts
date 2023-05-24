import { Component } from '@angular/core';

@Component({
  selector: 'user-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  tabIndex: number = 1;

  constructor(){

  }

  changeTab(index: number){
    this.tabIndex = index;
  }

  handlePropertyUpdate(event: any){
    if(event){

    }
    this.changeTab(0);
  }
}
