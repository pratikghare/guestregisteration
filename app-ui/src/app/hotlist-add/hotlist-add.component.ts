import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'hotlist-add',
  templateUrl: './hotlist-add.component.html',
  styleUrls: ['./hotlist-add.component.scss']
})
export class HotlistAddComponent {
  @Output() addEvent: EventEmitter<any> = new EventEmitter();

  constructor(){

  }

  cancelChanges(){
    this.addEvent.emit();
  }

  saveChanges(){

  }
}
