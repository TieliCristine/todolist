import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme = this._isDarkTheme.asObservable();

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDarkTheme(prefersDark);
  }

  setDarkTheme(isDarkTheme: boolean): void {
    this._isDarkTheme.next(isDarkTheme);
  }

}
