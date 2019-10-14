import faker from 'faker';
import { Mappable, CustomMap } from './CustomMap';

export class Company extends CustomMap {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    super();
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
      <div> ${this.companyName} </div>
      <div> ${this.catchPhrase} </div>
    `;
  }
}
