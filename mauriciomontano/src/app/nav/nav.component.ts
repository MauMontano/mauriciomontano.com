import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  @Input()
  navColor: number = 0;
  responsiveNav: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.changeNavColor(this.navColor);
  }

  public changeNavColor(colorCode: number): void{
    this.navColor = colorCode;
  }

  public openResponsiveNav(): void {
    this.responsiveNav = !this.responsiveNav;
  }

}
