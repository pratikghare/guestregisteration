import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { tenantList } from '../tenants/tenants.component';
import { users } from '../login/login.component';
import { Columns, TableModal } from '../common/table/TableModal';

@Component({
  selector: 'police-search',
  templateUrl: './police-search.component.html',
  styleUrls: ['./police-search.component.scss']
})
export class PoliceSearchComponent implements OnInit, OnDestroy {
  tabIndex: number = 0;
  selectedChips: string[] = ["Age 15-20", "HotList", "Pune"];
  filterItems: any[] = [
    "HotList", "Age 15-20", "City"
  ]
  searchLoader: boolean = false;
  searchForm: FormControl = new FormControl();
  policeRole: string = 'admin';

  listener: Array<Subscription> =[];
  userData: Array<any> = [];
  filterData: Array<any> = [];
  tableData: TableModal = new TableModal([], []);

  columns: Array<Columns> = columns;
  
  constructor(){
    this.getUsersList();
  }

  ngOnInit(): void {
    let searchListener = this.searchForm.valueChanges.subscribe((term: string) => {
      const str: string = term ? term.toLocaleLowerCase() : '';
      this.searchLoader = true;
      setTimeout(() => {
        this.filterData = this.userData.filter(user => (
          this.columns.find(col => user[col.id]?.toLocaleLowerCase()?.includes(str)) ||
          user?.aadhar?.toLocaleLowerCase()?.includes(str) ||
          user?.panCard?.toLocaleLowerCase()?.includes(str)
        ))
        
        this.createTableData(this.filterData, this.columns);
        this.searchLoader = false;
      }, 500)
    })

    this.listener.push(searchListener);
  }

  createTableData(data: Array<any>, columns: Array<Columns> = this.columns){
    this.tableData = new TableModal(data, columns);
  }

  changeTab(index: number){
    this.tabIndex = index;
  }

  handleHotListAdd(event: any){
    if(event){

    }
    this.changeTab(0);
  }

  getUsersList(){
    this.userData = [...tenantList];
    this.filterData = JSON.parse(JSON.stringify(this.userData));
    this.createTableData(this.filterData, this.columns);
  }

  ngOnDestroy(): void {
    this.listener.forEach((sub: Subscription) => sub.unsubscribe());
  }

  handleRowClick(event: any){
    // console.log("handleRowClick", event);
  }




  removeChip(chip: any){
    console.log(chip)
    setTimeout(() => {
      this.selectedChips = this.selectedChips.filter(sel => sel != chip);
    }, 100);
  }

  appendToFilterList(item: string){
    !this.selectedChips.find(chip => chip == item) ? this.selectedChips.push(item) : null;
  }
}


const columns: Columns[] = [
  { id: "name", value: "Name", type: "STRING"},
  { id: "contact", value: "Contact", type: "STRING"},
  { id: "aadhar", value: "Aadhar", type: "STRING"},
  { id: "panCard", value: "PAN", type: "STRING"},
  { id: "city", value: "City", type: "STRING"},
  { id: "state", value: "State", type: "STRING"},
]
