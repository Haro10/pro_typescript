import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  // markerContent(): string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    // this.location.lat = parseFloat(faker.address.latitude()); // get error because location is not be intial
  }

  markerContent(): string {
    return `
      User Name:  ${this.name} 
    `;
  }
}
