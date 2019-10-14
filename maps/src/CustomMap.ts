export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export abstract class CustomMap {
  private googleMap: google.maps.Map;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMaker(): void {
    var marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    });
    marker.addListener('click', function() {
      const infowindow = new google.maps.InfoWindow({
        content: this.markerContent()
      });
      infowindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMaker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // }
}
