import faker from 'faker';
import { Mappable, CustomMap } from './CustomMap';

export class User extends CustomMap {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  // markerContent(): string;

  constructor() {
    super();
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
