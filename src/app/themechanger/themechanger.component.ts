import { Component, OnInit } from '@angular/core';
import { blackTheme, blueTheme, greenTheme, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-themechanger',
  templateUrl: './themechanger.component.html',
  styleUrls: ['./themechanger.component.css']
})
export class ThemechangerComponent implements OnInit {

  result:any= '';
  constructor(private themeService:ThemeService) { 
    this.lastsetTheme = localStorage.getItem('abc');
    console.log(this.lastsetTheme);
    if(this.lastsetTheme == 'greentheme'){
      this.result = 'greentheme';
      this.themeService.setTheme(greenTheme);
    }
    else{
      this.result = 'bluetheme';
      this.themeService.setTheme(blueTheme);
    }
  }
  
  lastsetTheme:any;
  ngOnInit(): void {
    this.lastsetTheme = localStorage.getItem('abc');
    console.log(this.lastsetTheme);
    if(this.lastsetTheme == 'greentheme'){
      this.result = 'greentheme';
      this.themeService.setTheme(greenTheme);
    }
    else{
      this.result = 'bluetheme';
      this.themeService.setTheme(blueTheme);
    }
  }

  
  flag : any;
  onChangeTheme(event:any){
    console.log(event.target.value);
    if( event.target.value =='greentheme'){
      this.themeService.setTheme(greenTheme);
      localStorage.setItem('abc','greentheme');
    }
    else if(event.target.value =='bluetheme'){
      this.themeService.setTheme(blueTheme);
      localStorage.setItem('abc','bluetheme');
    }
  }

}
