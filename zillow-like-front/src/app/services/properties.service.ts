import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Property } from '../models/property'

const HYGRAPH_ENDPOINT = "endpoint for properties goes in here"

@Injectable({
  providedIn: 'root'  
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  getProperties():Observable<Property[]>{

    let body = {
      query:`
    query Properties {
      properties {
        description
        images {
          fileName
          url
        }
        location {
          latitude
          longitude
        }
        name
        rentalPrice
        slug
        id
        beds
      }
    }
    
    `
    }
       
    return this.http.post<Property[]>(HYGRAPH_ENDPOINT, body).pipe(map ((response:any)=>{
      return response.data.properties.map((property:any)=> new Property(property))
    }))
  }

  getProperty(slug:string){

    let body = {
      query:`
      query Property {
        property(where: {slug: "${slug}"}) {
          description
          images {
            fileName
            url
          }
          location {
            latitude
            longitude
          }
          name
          rentalPrice
          slug
          id
          beds
          pool
          petFriendly
          inUnitDryer
          elevator
          managingBroker{
            name
            phoneNumber
          }
          parking
        }
      }    
    `
    }
    console.log(body)

    return this.http.post<Property>(HYGRAPH_ENDPOINT, body).pipe(map((response:any)=>{
      return response.data.property
    }))
  }
}
