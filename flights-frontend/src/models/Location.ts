export interface Address {
    cityName: string,
    countryName: string
}

export interface Location {
    name: string,
    id: string,
    iataCode: string,
    address: Address
}