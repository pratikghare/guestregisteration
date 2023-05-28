import { Component, Output, Pipe, PipeTransform, EventEmitter, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { SlideMenu } from './SlideMenuModal';
import { Router } from '@angular/router';


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: any) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'slide-menu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.scss']
})
export class SlidemenuComponent {
  @Input() selectedItem: SlideMenu = {
    label: "Profile",
    componentSelector: "profile"
  };

  @Input() data: Array<SlideMenu> = [];
  @Output() selectedMenuItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router){

  }

  handleClick(item: SlideMenu){
    if(item?.children?.length) return;
    if(item.label == 'Logout' && item.func) item.func();
    if(item.hasOwnProperty('componentSelector') && item?.componentSelector) this.selectedMenuItem.emit(item);
  }

  logout(self: any = this){
    localStorage.removeItem("key");
    self.router.navigate(['/', 'login']);
  }
}

