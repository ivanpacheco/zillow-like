import { Component, OnInit } from '@angular/core';
import { MapComponent } from "../../components/map/map.component";
import { CardComponent } from "../../components/card/card.component";

//Services
import { PropertiesService } from '../../services/properties.service';
import { SearchService } from '../../services/search.service';

//Models
import { Property } from '../../models/property';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MapComponent, CardComponent]
})
export class HomeComponent implements OnInit {

  properties: Property[] = [];
  propertiesResult: Property[] = []
  property: any;
  locations:any

  constructor(private propertiesService: PropertiesService, private searchService: SearchService){

  }
  ngOnInit(): void {
    this.obtenerPropiedades()
    this.subscribeSearch()
  }


  obtenerPropiedades(){
    this.propertiesService.getProperties().subscribe((res:Property[])=>{
      this.properties = res           
      this.locations = this.properties.map((property: Property)=>{
        return property.location
      })
    })
  }

  subscribeSearch(){
    this.searchService.getSearch$().subscribe((search:string)=>{
      this.searchProperty(search)
    })
  }

  searchProperty(search:string){
    this. propertiesResult =this.properties.filter((property:Property)=>{
      return property.name.toLowerCase().includes(search.toLowerCase())
    })

    this.locations = this.propertiesResult.map((property: Property)=>{
      return property.location
    })
  }

}
