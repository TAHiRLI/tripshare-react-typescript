export interface SearchTermType {
  to?: string;
  from?: string;
  count?: number;
  when?: string;
}

export interface TripType {
  from: string;
  to: string;
  when: string;
  totalSeats: number;
  availableSeats: number;
  pickupLocations: Array<PickupLocationType>
  driver: DriverType;
  smoking:boolean,
  pets:boolean,
  luggage:boolean,
  [key:string]:any;
}


interface PickupLocationType {
    name:string,
    link:string
}

export interface DriverType{
  id:number;
  fullname:string;
  rating: number;
  numOfReviews: number;
  img:string;
  carImg: string;
  [key:string]:any
}