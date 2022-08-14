import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public certifications: Certifications[];
  constructor() { 
    this.certifications = [
      { name: "Scrum Fundamentals Certified (SFC™)", icon: "scrumStudy.svg", year: 2022, url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=923708", companyUrl: "https://www.scrumstudy.com/" },
      { name: "Curso de Finanzas para Startups", icon: "platzi.webp", year: 2022, url: "https://platzi.com/p/licantroposkate/curso/1325-financiera-startups/diploma/detalle/", companyUrl: "https://platzi.com/" },
      { name: "Diplomado de Formación emprendedora", icon: "trepCamp.png", year: 2022, url: "https://alumni.trepcamp.net/html/treps/TC-03541/pub-TC-03541.php", companyUrl: "https://digital.trepcamp.org/" },
    ];

  }

  ngOnInit(): void {
  }

}

interface Certifications {
  name: string;
  icon: string;
  year: number;
  url?: string;
  companyUrl?: string;
}