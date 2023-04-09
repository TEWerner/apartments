import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  state = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonEnter() {
    this.state = 'enlarged';
  }

  onButtonLeave() {
    this.state = 'normal';
  }
}
