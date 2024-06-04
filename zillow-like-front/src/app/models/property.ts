export interface Image{
    fileName: string;
    url: string;
}

export interface ManagingBroker{
    phoneNumber: string;
    name: string;
}

export interface Location{
    latitude: number
    longitude: number
}

export class Property{
    id: number
    name: string
    description: string
    slug: string
    rentalPrice: number
    location: Location
    images: Image[]
    beds: number
    managingBroker?: ManagingBroker
    inUnitDryer?: boolean
    petFriendly?: boolean
    pool?: boolean
    elevator?: boolean
    parking?:boolean

    
    constructor(d:any){
        this.id = d.id
        this.name = d.name
        this.description = d.description
        this.slug = d.slug
        this.rentalPrice = d.rentalPrice
        this.location = d.location
        this.images = d.images
        this.beds = d.beds
    }

    obtenerLocation(){
        return this.location
    }
}