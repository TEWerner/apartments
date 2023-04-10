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

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = document.querySelector('.header')?.getBoundingClientRect().height ?? 0;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
  

  smoothScroll(link:any, event:any) {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const originalTop = window.pageYOffset;
      const targetTop = Math.floor(targetElement.getBoundingClientRect().top) + window.pageYOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
  
  

}
