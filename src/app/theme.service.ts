import { Injectable } from '@angular/core';

export const whiteTheme = {
  'primary-color': '#00ac31',   
  'secondary-color': '#b4b4b8',   
  'background-color': '#ffffff',    
  'text-color': '#76767a',      
  'hover-color': '#e3f7e8',      
  'scrollbar-color' : '#94949a',  // 
  'input-color' : '#323234',    
  'warning-background-color': '#fef1e6' ,
  'slider-text-color': '#000000',
  'text-heading-color':'#007713',
};

export const blackTheme = {
  'primary-color': '#154b88',
  'secondary-color': '#b4b4b8',
  'background-color': '#ffffff',
  'text-color': '#76767a',
  'hover-color': '#cbe0f8',
  'scrollbar-color' : '#94949a',
  'input-color' : '#323234',
  'warning-background-color': '#fef1e6',
  'slider-text-color': '#5A5A5A',
  'text-heading-color':'#0000FF',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public setTheme(theme: any) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
