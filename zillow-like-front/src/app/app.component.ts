import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/nav/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { CardComponent } from "./components/card/card.component";

//Services
import { PropertiesService } from './services/properties.service';

//Models
import { Property } from './models/property';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, SearchBarComponent, MapComponent, CardComponent],
    providers: [PropertiesService]
})
export class AppComponent{
  title = 'zillow-like-front';
  properties: Property[] = [];
  property: any;

  constructor(private propertiesService: PropertiesService){
  }
  /* ngOnInit(): void {
    this.obtenerPropiedades()
  }

  obtenerPropiedades(){
    this.propertiesService.getProperties().subscribe((res:Property[])=>{
      this.properties = res
      console.log(this.properties)
      console.log(typeof(this.properties))
    })
  } */
}
