import { gql } from 'apollo-server-express';

export default gql`
  type Station {
    id: ID
    Title: String
    AddressLine1: String
    Town: String
    StateOrProvince: String
    Postcode: String
    Location: Location
    Connections: [Connections]
  }
  type Location {
    type: String
    coordinates: [Float]
  }
  input Bounds {
    topRight: LatLng
    bottomLeft: LatLng
  }
  input LatLng {
    lat: Float
    lng: Float
  }
  input NewConnections {
    id: ID
    ConnectionTypeID: String
    CurrentTypeID: String
    LevelID: String
    Quantity: Int
  }
  input NewLocation {
    coordinates: [Float]
  }
  extend type Query {
    stations(start: Int = 0, limit: Int = 3, bounds: Bounds): [Station]
    station(id: ID!): Station
  }
  extend type Mutation {
    addStation(
      Title: String
      AddressLine1: String
      Town: String
      StateOrProvince: String
      Postcode: String
      Location: NewLocation
      Connections: [NewConnections]
    ): Station
    modifyStation(
      id: ID!
      Title: String
      AddressLine1: String
      Town: String
      StateOrProvince: String
      Postcode: String
      Connections: [NewConnections]
    ): Station
    deleteStation(id: ID!): ID
  }
`;
