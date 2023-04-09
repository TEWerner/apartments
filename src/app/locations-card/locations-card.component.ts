import { Component } from '@angular/core';

@Component({
  selector: 'app-locations-card',
  templateUrl: './locations-card.component.html',
  styleUrls: ['./locations-card.component.css']
})

export class LocationsCardComponent {
  location: string = '';

  showLocation(location: string) {
    this.location = location;
  }

  hideLocation() {
    this.location = '';
  }
}
