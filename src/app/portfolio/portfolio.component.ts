import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects:Projects[]=[
    {name:'LOG CABIN',img:'../../assets/images/portfolio.png',desc:'cabin is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
    {name:'TASTY CAKE',img:'../../assets/images/cake.png',desc:'cake is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
    {name:'CIRCUS TENT',img:'../../assets/images/circus.png',desc:'circus is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
    {name:'CONTROLLER',img:'../../assets/images/game.png',desc:'controller is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
    {name:'LOCKED SAFE',img:'../../assets/images/safe.png',desc:'locked is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
    {name:'SUBMARINE',img:'../../assets/images/submarine.png',desc:'submarine is a project for Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderi'},
  ];
  
  hide(){   
   let layer:any=document.querySelector('.layer');
    layer.classList.replace('d-flex','d-none')
  };
  close(e:any){
    if(e.target.classList.contains('layer')){
      e.target.classList.replace('d-flex','d-none')
    }
  };
  name:string='';
  img:string='';
  desc:string='';

  showLayer(e:any){
    let overLay = Array.from(document.querySelectorAll('.overlay')) ;
    let overlayIcon = Array.from(document.querySelectorAll('.overlay i'));
    let imgSrc=''
    overLay.map((ele)=>{
      if(e.target==ele){
        imgSrc= e.target.previousElementSibling.getAttribute('src');
      }
    });
    overlayIcon.map((ele=>{
     if( e.target==ele){
      imgSrc=e.target.parentElement.previousElementSibling.getAttribute('src')
     }
    }))
   
    this.projects.map((ele)=>{
      if(imgSrc==ele.img  ){
        this.name=ele.name;
        this.img=ele.img;
        this.desc=ele.desc;
      }
    });
    let layer:any=document.querySelector('.layer')?.classList.replace('d-none','d-flex');
  };
  constructor() { }
  
  ngOnInit(): void {
  }

}
