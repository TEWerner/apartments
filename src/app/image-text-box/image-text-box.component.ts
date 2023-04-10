import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-image-text-box',
  template: `
    <div class="container" [ngClass]="position === 'left' ? 'image-left' : 'image-right'">
      <div class="image-box">
        <img [src]="imagePath" />
      </div>
      <div class="text-box" [@slideIn]="position">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <a href="#" class="read-more">Read More ></a>
      </div>
    </div>
  `,
  styleUrls: ['./image-text-box.component.css'],
  animations: [
    trigger('slideIn', [
      state('left', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('right', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => right', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }),
        animate('500ms ease-out')
      ]),
      transition('void => left', [
        style({
          opacity: 0,
          transform: 'translateX(50%)'
        }),
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class ImageTextBoxComponent {
  @Input() imagePath?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() position?: string;
}
