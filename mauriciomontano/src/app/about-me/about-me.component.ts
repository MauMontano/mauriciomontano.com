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
  public values: Values[];
  public interests: Interests[];
  
  constructor() {
    this.hobbies = [
      { name: "GYM", img: "gym.png" },
      { name: "Dancing", img: "dancing.jpeg" },
      { name: "Reading", img: "reading.webp" },
      { name: "Image consulting", img: "consulting.jpg" },
    ];
    this.values = [
      { name: "Respect", img: "respect.jpg" },
      { name: "Responsability", img: "responsability.webp" },
      { name: "Humbleness", img: "humble.jpeg" },
      { name: "Solidarity", img: "solidarity.jpg" },
    ];
    this.interests = [
      { name: "entrepreneurship", img: "business.jpg" },
      { name: "Startups", img: "startups.jpg" },
      { name: "Artificial Intelligence", img: "ai.jpg" },
      { name: "Data Science", img: "dataScience.jpg" },
      { name: "E-Commerce", img: "e-commerce.jpg" },
      { name: "Social Media", img: "socialMedia.jpg" },
      { name: "Men's Fashion", img: "aboutme2.jpg" },
      { name: "Boxing", img: "boxing.png" },
    ];
  }

  ngOnInit(): void {
  }

}

interface Hobbies {
  name: string;
  img: string;
}

interface Values {
  name: string;
  img: string;
}

interface Interests {
  name: string;
  img: string;
}
