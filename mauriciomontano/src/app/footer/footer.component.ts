import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  @Input()
  footerColor: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.changeNavColor(this.footerColor);
  }

  public changeNavColor(colorCode: number): void{
    this.footerColor = colorCode;
  }
}
