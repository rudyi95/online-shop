declare interface User {
  email: string;
  username: string;
  password: string;
  name: UserName;
  address: UserAddress;
  phone: string;
}

declare interface UserName {
  firstname: string;
  lastname: string;
}

declare interface UserAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: UserLocation;
}

declare interface UserLocation {
  lat: string;
  long: string;
}
