import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationsCardComponent } from './locations-card/locations-card.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ImageTextBoxComponent } from './image-text-box/image-text-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BrandBoxComponent } from './brand-box/brand-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationsCardComponent,
    SlideshowComponent,
    ImageTextBoxComponent,
    NewsletterComponent,
    BrandBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
