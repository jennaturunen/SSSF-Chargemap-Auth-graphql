import { gql } from 'apollo-server-express';

export default gql`
  type CurrentType {
    id: ID
    Description: String
    Title: String
  }
  extend type Query {
    currenttypes: [CurrentType]
  }
`;
