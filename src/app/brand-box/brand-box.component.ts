import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-box',
  template: `<div class="brands-box">
  <div class="brand-title">OUR BRANDS</div>
  <div class="brand-logos">
    <div class="brand-logo">
      <img src="brand1-logo.png" alt="Brand 1">
    </div>
    <div class="brand-logo">
      <img src="brand2-logo.png" alt="Brand 2">
    </div>
    <div class="brand-logo">
      <img src="brand3-logo.png" alt="Brand 3">
    </div>
  </div>
</div>`,
  styles: [`
    .brands-box {
  background-color: #222;
  border: 3px solid #444;
  border-top: none;
  border-radius: 10px 10px 0 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand-title {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.brand-logos {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.brand-logo {
  width: 30%;
  padding: 10px;
}

.brand-logo img {
  max-width: 100%;
}
  `]
})
export class BrandBoxComponent {}
