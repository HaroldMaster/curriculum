import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private skills : Array<object>;
  private experience : Array<object>;
  constructor() { 
    this.skills = [
      {
        name : "Programming Languages",
        icono: environment.url+"/assets/img/algoritmo.png",
        img: environment.url+ "/assets/img/programming.png",
        content: "Knowledge of Java, C #, JavaScript (Node, React, React Native with Expo, Angular, Typescript), HTML, CSS, Sass (BEM)"
      },
      {
        name : "Databases",
        icono: environment.url+ "/assets/img/db-icon.png",
        img: environment.url+ "/assets/img/db-img.png",
        content: "Knowledge of SQL Server, PostgreSQL, Oracle (PL/SQL), MongoDB, Business Intelligence (Pentaho)."
      },
      {
        name : "Repositories",
        icono: environment.url+ "/assets/img/repo-icon.png",
        img: environment.url+ "/assets/img/repo-img.png",
        content: "Knowledge of Git, Github, Bitbucket. Link: https://github.com/HaroldMaster"
      },
      {
        name : "Courses and Other Skills",
        icono: environment.url+"/assets/img/other-icon.png",
        img: environment.url+"/assets/img/other-img.png",
        content: "I have had the oportunity to study Udemy courses as Advanced Sass and Css, Typescript, Angular, JQuery, Javascript, React. Also, because of my work experience, I have managed to obtain knowledge of computer manteinance, Wordpress, SEO, Digital Marketing, Networks, Linux, BPMN, etc."
      }
    ];
    this.experience = [
      {
        enterprise: "Grupo TVCable",
        img: environment.url+ "/assets/img/tvcable.jfif",
        content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL."
      },
      {
        enterprise: "Imprenta Mariscal",
        img: environment.url+ "/assets/img/imprenta.png",
        content: "Intern at Imprenta Mariscal industry, in the area of Systems and Databases. I carried out activities such as network management, computer and printer maintenance, user support, backup management, database management, among others."
      },
      {
        enterprise: "PACO",
        img: environment.url+"/assets/img/paco.png",
        content: "Developer analyst at PACO comercial company. I managed the billing system developed in Java with PostgreSQL database, also handling stored procedures in the SQL Server database."
      },
      {
        enterprise: "CLEARMINDS",
        img: environment.url+"/assets/img/clearminds.jfif",
        content: "Software Developer at Clearminds company. I worked in banking software consulting services where I used tools such as Angular, Javascript, Java, Sql Server as well as the company's own tools."
      }
    ]
  }
}