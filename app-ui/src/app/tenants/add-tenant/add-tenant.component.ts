import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent {
    tenantAddFormList: any[] = [null];
    @Output() updateEvent: EventEmitter<any> = new EventEmitter();
 
    constructor(){

    }

    
  cancelChanges(){
    this.updateEvent.emit();
  }

  saveChanges(){
    this.updateEvent.emit();
  }

    addNewForm(){
      this.tenantAddFormList.push(null)
    }
}
