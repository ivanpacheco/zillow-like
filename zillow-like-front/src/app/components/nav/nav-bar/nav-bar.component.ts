import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [SearchBarComponent]
})
export class NavBarComponent {

}
