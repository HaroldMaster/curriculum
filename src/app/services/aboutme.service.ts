import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {
  private aboutMe: any;
  constructor() {
     this.aboutMe = {
       parragraph1 : 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, I have estudied to develop Angular apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
       parragraph2 : 'I am a person who likes learn new tecnologies and that is why i have been studied some courses in udemy like Typescript, Sass and Css, Angular, Javascript and more. Also I like help other people and that is why I have been doing tutorials about several things in github using github pages.',
       parragraph3 : 'My professional life started building websites for small businesses with Wordpress where I learned several complementary skills such as Digital Marketing, SEO and others, also I have worked with Databases, Infraestructure and recently I was working doing banking software using Javascript, Java and SQL Databases.',
       parragraph4 : ' Right now, I’m excited about front end web development and I hope becoming better each day with new challenges and goals to meet.'
     }
   }

}
