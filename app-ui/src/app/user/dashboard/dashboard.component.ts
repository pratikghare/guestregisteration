import { Component, OnInit } from '@angular/core';
import { SlideMenu } from '../../common/slidemenu/SlideMenuModal';
import { DataModal } from 'src/app/common/DataModal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slideMenuToggle: boolean = true;
  selectedItem: SlideMenu = new SlideMenu('Property', 'property');
  window: any = DataModal.getInstance().window;

  constructor(){
    
  }

  ngOnInit(): void {
    if(this.window) this.slideMenuToggle = this.window.getBoundingClientRect().width > 600;
  }

  handleEmitEvent(event: SlideMenu){
    this.selectedItem = event;
    if(this.window) this.slideMenuToggle = this.window.getBoundingClientRect().width > 600;
    
  }

  toggleSlideMenu(){
    this.slideMenuToggle = !this.slideMenuToggle;
  }
}
