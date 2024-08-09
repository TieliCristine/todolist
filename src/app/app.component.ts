import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from "./@core/services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  isDarkTheme?: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(theme => {
      this.isDarkTheme = theme;
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
      document.body.classList.toggle('light-theme', !this.isDarkTheme);
    });
  }

}
