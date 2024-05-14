import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/nav/search-bar/search-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, SearchBarComponent]
})
export class AppComponent {
  title = 'zillow-like-front';
}
