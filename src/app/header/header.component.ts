import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { blackTheme, ThemeService, whiteTheme } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isloggedin:boolean = false;
  result:any= '';

  constructor(public router: Router,private themeService:ThemeService) { 
  if(localStorage.getItem('Loginuser')){
    this.isloggedin = true;
  }
  }
  
  lastsetTheme:any;
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('Loginuser')){
          this.isloggedin = true;
        }else{
          this.isloggedin = false;
        }
      }
    })

    this.lastsetTheme = localStorage.getItem('abc');
    console.log(this.lastsetTheme);
    if(this.lastsetTheme == 'whitetheme'){
      this.result = 'whitetheme';
      this.themeService.setTheme(whiteTheme);
    }
    else{
      this.result = 'blacktheme';
      this.themeService.setTheme(blackTheme);
    }
  }

  
  flag : any;
  onChangeTheme(event:any){
    console.log(event.target.value);
    if( event.target.value =='whitetheme'){
      this.themeService.setTheme(whiteTheme);
      localStorage.setItem('abc','whitetheme');
    }
    else if(event.target.value =='blacktheme'){
      this.themeService.setTheme(blackTheme);
      localStorage.setItem('abc','blacktheme');
    }
  }

  onLogout(){
    localStorage.removeItem('Loginuser');
    this.isloggedin = false;
    this.router.navigate(['/login']);
  }

}