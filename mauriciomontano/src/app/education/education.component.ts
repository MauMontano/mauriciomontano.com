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
      { name: "Brainnest Project Management Industry Training", icon: "brainnest.png", year: 2022, url: "https://www.linkedin.com/feed/update/urn:li:activity:6980697108840402944/", companyUrl: "https://www.brainnest.consulting/" },
      { name: "Project Management Basics", icon: "google.png", year: 2022, url: "https://www.coursera.org/account/accomplishments/certificate/G89BTTSKFGPE", companyUrl: "https://www.google.com" },
      { name: "Scrum Fundamentals Certified (SFC™)", icon: "scrumStudy.svg", year: 2022, url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=923708", companyUrl: "https://www.scrumstudy.com/" },
      { name: "Startups Finance Course", icon: "platzi.webp", year: 2022, url: "https://platzi.com/p/licantroposkate/curso/1325-financiera-startups/diploma/detalle/", companyUrl: "https://platzi.com/" },
      { name: "Diplomat in Entrepreneurial Training", icon: "trepCamp.png", year: 2021, url: "https://alumni.trepcamp.net/html/treps/TC-03541/pub-TC-03541.php", companyUrl: "https://digital.trepcamp.org/" },
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