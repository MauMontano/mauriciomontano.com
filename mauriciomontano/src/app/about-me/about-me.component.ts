import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public hobbies: Hobbies[];
  
  constructor() {
    this.hobbies = [
      { name: "GYM", img: "gym.webp" },
      { name: "Dancing", img: "dancing.jpeg" },
      { name: "Reading", img: "reading.webp" },
      { name: "Image consulting", img: "aboutme.JPG" },
    ];
  }

  ngOnInit(): void {
  }

}

interface Hobbies {
  name: string;
  img: string;
}
