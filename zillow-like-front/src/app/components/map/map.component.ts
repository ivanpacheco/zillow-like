import { Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})


export class MapComponent {

  @ViewChild(GoogleMap) map!: GoogleMap;

  image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  @Input() set locations(locations:any){    
    
    if(locations){      
      let bounds = new google.maps.LatLngBounds()
      this.markers = locations.map((location:any, index:number)=>{
        return {
          key: index, 
          position: { lat: location.latitude, lng: location.longitude},
          icon:{
            url: this.image,
            anchor: new google.maps.Point(5, 58)
          }}
      })
      this.markers.forEach((marker:any)=>{
        bounds.extend(marker.position)
      })
      this.map.fitBounds(bounds)
    }

    


    console.log(this.markers)

  }
  markers:any
  

  mapOptions: google.maps.MapOptions = {
    zoom: 10,
    
  }

}
