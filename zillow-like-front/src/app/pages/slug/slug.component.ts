import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../services/properties.service';
import { Property } from '../../models/property';
import { ImageCardComponent } from "../../components/image-card/image-card.component";

@Component({
    selector: 'app-slug',
    standalone: true,
    templateUrl: './slug.component.html',
    styleUrl: './slug.component.css',
    imports: [ImageCardComponent]
})
export class SlugComponent implements OnInit{
  constructor(private route: ActivatedRoute, private propertyService: PropertiesService) {
    
  }

  property!: Property
  ngOnInit(): void {
    //Aqui obtenemos el slug o de la propiedad
    this.route.params.subscribe(params => {      
      this.obtenerProperty(params['slug-name'])      
    });
  }

  obtenerProperty(slug:string){
    this.propertyService.getProperty(slug).subscribe((response:Property) =>{
      console.log(response)
      this.property = response
    })
  }

}
