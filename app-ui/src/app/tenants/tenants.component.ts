import { Component } from '@angular/core';
import { Action, Columns, TableModal } from '../common/table/TableModal';

@Component({
  selector: 'user-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  tabIndex: number = 0;
  tableData: TableModal = new TableModal([], [], [new Action('Edit', 'edit')]);

  constructor(){
    this.getTenantList();
  }

  getTenantList(){
    this.tableData = new TableModal(tenantList, columns, [new Action('Edit', 'edit')]);
  }

  changeTab(index: number){
    this.tabIndex = index;
  }

  handleTenantUpdate(event: any){
    if(event){

    }
    this.changeTab(0);
  }
}


export const tenantList = [
  {
    name: 'Pratik Ghare',
    contact: '8796789540',
    city: 'Pune',
    state: 'Maharashtra',
    aadhar: null,
    panCard: null
  },
  {
    name: 'Priyanka Ghare',
    contact: '8796789540',
    city: 'Mumbai',
    state: 'Maharashtra',
    aadhar: null,
    panCard: null
  },
  {
    name: 'Radhika Pasalkar',
    contact: '8796789540',
    city: 'Chennai',
    state: 'Tamil Nadu',
    aadhar: null,
    panCard: null
  },
  {
    name: 'Viraj Pasalkar',
    contact: '8796789540',
    city: 'Bengaluru',
    state: 'Karnataka',
    aadhar: null,
    panCard: null
  }
]

const columns: Columns[] = [
  { id: "name", value: "Name", type: "STRING"},
  { id: "contact", value: "Contact", type: "STRING"},
  { id: "city", value: "City", type: "STRING"},
  { id: "state", value: "State", type: "STRING"},
  { id: "actionColumn", value: "Action", type: "ICON"}
]