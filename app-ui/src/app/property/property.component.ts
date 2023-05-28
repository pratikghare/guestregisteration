import { Component } from '@angular/core';
import { Action, Columns, TableModal } from '../common/table/TableModal';

@Component({
  selector: 'user-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  tabIndex: number = 0;
  tableData: TableModal = new TableModal([], [], [new Action('Edit', 'edit')]);

  constructor(){
    this.getPropertyDetails();
  }

  changeTab(index: number){
    this.tabIndex = index;
  }

  getPropertyDetails(){
    this.tableData = new TableModal(propertyList, columns, [new Action('Edit', 'edit'), new Action('Delete', 'delete')]);
  }

  handlePropertyUpdate(event: any){
    if(event){

    }
    this.changeTab(0);
  }
}


export const propertyList = [
  {
    addLine1: 'Lane 2, Madhuban Society',
    addLine2: 'Old Sangvi',
    address: 'Lane 2, Madhuban Society, Old Sangvi',
    pincode: '411027',
    city: 'Pimpri-Chinchwad',
    state: 'Maharashtra',
    country: 'India',
    type: "PG",
    nearestPoliceStation: 'New Sangvi Police Station, Sai Chowk'
  },
  {
    addLine1: 'Ashok Society, Durga Nagar, Laxmi Society',
    addLine2: 'Model Colony, Shivajinagar',
    address: 'Ashok Society, Durga Nagar, Laxmi Society, Model Colony, Shivajinagar',
    pincode: '411016',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    type: "Hostel",
    nearestPoliceStation: '45, Jethiram Bhima Shelar Path, Janwadi, Gokhalenagar, Pune, Maharashtra 411016'
  },
  {
    addLine1: 'National School Road, Sangam Nagar',
    addLine2: 'Old Sangvi',
    address: 'National School Road, Sangam Nagar, Old Sangvi',
    pincode: '411027',
    city: 'Pimpri-Chinchwad',
    state: 'Maharashtra',
    country: 'India',
    type: "Flat",
    nearestPoliceStation: 'New Sangvi Police Station, Sai Chowk'
  }
];

const columns: Columns[] = [
  { id: "address", value: "Address", type: "LONG_STRING" },
  { id: "pincode", value: "Pincode", type: "STRING" },
  { id: "city", value: "City", type: "STRING" },
  { id: "state", value: "State", type: "STRING" },
  { id: "country", value: "Country", type: "STRING" },
  { id: "actionColumn", value: "Action", type: "ICON" }
]