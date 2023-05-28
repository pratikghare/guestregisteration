import { Component, OnInit } from '@angular/core';
import { SlideMenu } from '../../common/slidemenu/SlideMenuModal';
import { DataModal } from 'src/app/common/DataModal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  policeRole: string = 'police';
  slideMenuToggle: boolean = true;
  slideMenuData: Array<SlideMenu> = [
    {
      label: "Profile",
      // icon: "person",
      icon: 'manage_accounts',
      componentSelector: `profile`
    },
    {
      icon: 'real_estate_agent',
      label: "Property",
      componentSelector: `property`
    },
    {
      label: "Tenants",
      icon: 'groups',
      componentSelector: `tenants`
    },
    // {
    //   label: "Activity",
    //   icon: 'history'
    // },
    {
      icon: 'logout',
      label: 'Logout',
      func: this.logout.bind(this)
    }
  ];

  selectedItem: SlideMenu = this.slideMenuData[0];
  window: any = DataModal.getInstance().window;
  currentUser: any = null;

  constructor(private router: Router){
    const str: string | null = localStorage.getItem("key") ? localStorage.getItem("key") : null;
    if(str) this.currentUser = JSON.parse(str);
    // console.log(this.currentUser)
    if(!this.currentUser) this.logout();
  }

  ngOnInit(): void {
    if(this.window) this.slideMenuToggle = this.window.getBoundingClientRect().width > 600;
  }

  handleEmitEvent(event: SlideMenu){
    this.selectedItem = event;
    if(!this.window) this.window = DataModal.getInstance().window;
    if(this.window) this.slideMenuToggle = this.window.getBoundingClientRect().width > 600;
    
  }

  toggleSlideMenu(){
    this.slideMenuToggle = !this.slideMenuToggle;
  }

  
  logout(self: any = this){
    localStorage.removeItem("key");
    self.router.navigate(['/', 'login']);
  }
}
