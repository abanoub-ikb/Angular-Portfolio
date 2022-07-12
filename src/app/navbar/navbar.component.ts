import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
// show and hide navbar menu on small screens
show(){
  let nav:any=document.querySelector('.nav-links');
  if(nav.style.top ==='-300%'){
    nav.style.top='100%'
  }else{
    nav.style.top ='-300%'
  }
};
  ngOnInit(): void {
  }
  

  
}
