import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slides = [
    { src: 'https://via.placeholder.com/800x400/007bff/ffffff', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x400/28a745/ffffff', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x400/dc3545/ffffff', alt: 'Slide 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
