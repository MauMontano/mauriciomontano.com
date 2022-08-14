import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { SwiperOptions } from 'swiper';
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
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortafolioComponent implements OnInit {
  swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      620: {
      slidesPerView: 1,
      spaceBetween: 20,
      },
      680: {
      slidesPerView: 1,
      spaceBetween: 40,
      },
      920: {
      slidesPerView: 1,
      spaceBetween: 40,
      },
      1240: {
      slidesPerView: 1,
      spaceBetween: 50,
      },
    } 
  });
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.changeDetectorRef.markForCheck();
  }

}


