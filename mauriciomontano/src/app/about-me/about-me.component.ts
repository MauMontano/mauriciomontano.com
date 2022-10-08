import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
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
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {
  public hobbies: Hobbies[];
  public values: Values[];
  public interests: Interests[];
  
  constructor(private cd: ChangeDetectorRef) {
    this.hobbies = [
      { name: "GYM", img: "gym.png" },
      { name: "Dancing", img: "dancing.jpeg" },
      { name: "Reading", img: "reading.webp" },
      { name: "Image consulting", img: "consulting.jpg" },
    ];
    this.values = [
      { name: "Respect", img: "respect.png" },
      { name: "Responsability", img: "responsability.png" },
      { name: "Humbleness", img: "humble.png" },
      { name: "Solidarity", img: "solidarity.png" },
    ];
    this.interests = [
      { name: "Entrepreneurship", img: "business.png" },
      { name: "Startups", img: "startups.png" },
      { name: "Artificial Intelligence", img: "ai.png" },
      { name: "Data Science", img: "dataScience.png" },
      { name: "E-Commerce", img: "e-commerce.png" },
      { name: "Social Media", img: "socialMedia.png" },
      { name: "Men's Fashion", img: "aboutme2.jpg" },
      { name: "Boxing", img: "boxing.png" }
      /*{ name: "E-Commerce", img: "e-commerce.png" },
      { name: "Social Media", img: "socialMedia.png" },
      { name: "Men's Fashion", img: "aboutme2.jpg" },
      { name: "Boxing", img: "boxing.png" },*/
    ];
    this.cd.markForCheck();
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
