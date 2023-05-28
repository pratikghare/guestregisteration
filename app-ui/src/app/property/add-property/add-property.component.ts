import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit, AfterViewInit {
  @Output() updateEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  propertyType: any[] = [
    "PG", "Hostel", "Commercial", "Residential"
  ];
  
  constructor(){
    
  }
  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  ngOnInit(): void {
  }

  cancelChanges(){
    this.updateEvent.emit();
  }

  saveChanges(){

  }
}