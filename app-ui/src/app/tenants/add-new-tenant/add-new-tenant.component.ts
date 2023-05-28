import { Component, EventEmitter, Output } from '@angular/core';
import { propertyList } from '../../property/property.component';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'add-new-tenant',
  templateUrl: './add-new-tenant.component.html',
  styleUrls: ['./add-new-tenant.component.scss']
})
export class AddNewTenantComponent {
  propertyList: any[] = propertyList;
  guardianRequired: boolean = false;
  panCardInputUpload: FormControl = new FormControl();
  listener: Subscription[] = [];

  constructor(private _bottomSheet: MatBottomSheet){
    
  }

  ngOnInit(): void {
    let panSub = this.panCardInputUpload.valueChanges.subscribe(value => {
      console.log(value);
    })

    this.listener.push(panSub);
  }

  ngOnDestroy(): void {
    this.listener.forEach((sub: Subscription) => sub.unsubscribe());
  }


  openBottomSheet(event: any): void {
    event.preventDefault();
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  updateProperty(event: any){
    console.log(event.value)
    if(event.value.type == 'PG' || event.value.type == 'Hostel')
      this.guardianRequired = true;
    else this.guardianRequired = false;
  }
}





@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
      <mat-nav-list>
        <a href="https://plus.google.com/" mat-list-item (click)="openLink($event, 'file')">
          <span matListItemTitle>Select a File</span>
          <span matLine>Choose a file from Computer</span>
          <input type="file" style="display: none;" name="Select a File" id="uploadFile">
        </a>

        <a href="https://keep.google.com/" mat-list-item (click)="openLink($event, 'drive')">
          <span matListItemTitle>Google Drive</span>
          <span matLine>Choose a file from Google Drive</span>
        </a>
      </mat-nav-list>
  `,
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent, type: string): void {
    event.preventDefault();
    if(type == 'file') console.log(document.getElementById('uploadFile')?.click());
    // document.getElementById('uploadFile')?.click();
    // this._bottomSheetRef.dismiss();
  }
}