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
      { name: "Business Model Creation", icon: "savings", description: "It is refers to a company's plan for making a profit. It identifies the products or services the business plans to sell, its identified target market, and any anticipated expenses." },
      { name: "Lean Startup", icon: "emoji_objects", description: "This methodology allows you to develop the product or service that your startup plans to offer, doing it in the most efficient way possible." },
      { name: "Finance for Startups", icon: "monetization_on", description: "Startup financing is the capital that's used to fund a business venture." },
      { name: "Traditional Project Management", icon: "waterfall_chart", description: "It is a linear approach where processes occur in a predictable sequence." },
      { name: "Agile Project Management", icon: "restart_alt", description: "Individuals and interactions over processes and tools, working software over comprehensive documentation..." }
    ];
    this.techSkills  = [
        { name: "Jira", icon: "jira.png", description: "It is a platform to track projects", url: "https://www.atlassian.com/es/software/jira" },
        { name: "Confluence", icon: "confluence.png", description: "It is a team workspace where knowledge and collaboration meet", url: "https://www.atlassian.com/es/software/confluence" },
        { name: "Slack", icon: "slack.png", description: "It is a team communication tool", url: "https://slack.com/" },
        { name: "YouTrack", icon: "youTrack.png", description: "It is a platform to track projects", url: "https://www.jetbrains.com/es-es/youtrack/" },
        { name: "Monday", icon: "monday.png", description: "It is a platform to track projects", url: "https://monday.com/lang/es" },
        { name: "Git", icon: "git.png", description: "It is platform to control the version of a project", url: "https://git-scm.com/" },
        { name: "Java", icon: "java.png", description: "It is a widely used object-oriented programming language", url: "https://www.java.com/es/" },
        { name: "Javascript", icon: "javascript.png", description: "It is a text-based programming language used both on the client-side and server-side that allows you to make web pages", url: "https://devdocs.io/javascript/" },
        { name: "NodeJS", icon: "nodejs.png", description: "It is a JavaScript runtime built on Chrome's V8 JavaScript engine.", url: "https://nodejs.org/es/" },
        { name: "Express", icon: "express.png", description: "It is a node js web application framework that provides broad features for building web and mobile applications.", url: "https://www.npmjs.com/package/express" },
        { name: "Angular", icon: "angular.png", description: "It is a platform and framework for building single-page client applications using HTML and TypeScript.", url: "https://angular.io/" },
        { name: "MySQL", icon: "mysql.png", description: "It is a database management system.", url: "https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html" },
        { name: "HTML5", icon: "html.png", description: "It is the most basic building block of the Web. It defines the meaning and structure of web content.", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", icon: "css.png", description: " It is the language for describing the presentation of Web pages, including colors, layout, and fonts.", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
        { name: "Algorithm Analysis", icon: "algorithm.svg", description: "I am former member at Algorithm's club in ESCOM", url: "https://www.facebook.com/algoritmiaescom" },
    ];
    this.softSkills = [
      { name: "Leadership", icon: "diversity_3", description: "I am a proactive person who seeks to motivate others to collaborate for getting the expected results." },
      { name: "Proactivity", icon: "manage_accounts", description: "I never let the things happen, I make the things happen." },
      { name: "Strong communication", icon: "record_voice_over", description: "For me, part of the success consists of communicate your ideas in an effective way." },
      { name: "Willingness to learn", icon: "local_library", description: "I am a lifelon learner because I'm convinced it is the better way to grow as a person" },
      { name: "Competitive attitude", icon: "emoji_flags", description: "I am a lover of the challenges and I never give up." },
      { name: "Teamwork", icon: "groups", description: "I love collaborating with different people to create awesome things." },
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
