import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public pmSkills: Skills[];
  public techSkills: Skills[];
  public softSkills: Skills[];
  
  constructor() {
    this.pmSkills = [
      { name: "Design Thinking", icon: "psychology", description: "It is a methodology for designing customer-focused solutions that serves to have PRODUCT MARKET FIT." },
      { name: "Business Model Creation", icon: "savings", description: "It is a methodology for designing customer-focused solutions that serves to have PRODUCT MARKET FIT." },
      { name: "Lean Startup", icon: "emoji_objects", description: "This methodology allows you to develop the product or service that your startup plans to offer, doing it in the most efficient way possible." },
      { name: "Finance for Startups", icon: "monetization_on", description: "Startup financing is the capital that's used to fund a business venture." },
      { name: "Traditional Project Management", icon: "waterfall_chart", description: "It is a linear approach where processes occur in a predictable sequence." },
      { name: "Agile Project Management", icon: "restart_alt", description: "Individuals and interactions over processes and tools, working software over comprehensive documentation..." }
    ];
    this.techSkills  = [
        { name: "YouTrack", icon: "youTrack.png", description: "A platform to track projects", url: "https://www.jetbrains.com/es-es/youtrack/" },
        { name: "Monday", icon: "monday.png", description: "A platform to track projects", url: "https://monday.com/lang/es" },
        { name: "Git", icon: "git.png", description: "A platform to control the version of a project", url: "https://git-scm.com/" },
        { name: "Java", icon: "java.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "Javascript", icon: "javascript.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "NodeJS", icon: "nodejs.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "Express", icon: "express.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "Angular", icon: "angular.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "MySQL", icon: "mysql.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "HTML5", icon: "html.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "CSS3", icon: "css.png", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
        { name: "Algorithm Analysis", icon: "algorithm.svg", description: "Object Oriented Programming", url: "https://www.java.com/es/" },
    ];
    this.softSkills = [
      { name: "Leadership", icon: "diversity_3", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
      { name: "Proactivity", icon: "manage_accounts", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
      { name: "Strong communication", icon: "record_voice_over", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
      { name: "Willingness to learn", icon: "local_library", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
      { name: "Competitive attitude", icon: "emoji_flags", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
      { name: "Teamwork", icon: "groups", description: "I am a proactive person who seeks to solve things, and I like to motivate others to do the same" },
    ];
  }

  ngOnInit(): void {
  }

}

interface Skills {
  name: string;
  icon: string;
  description: string;
  url?: string;
}
