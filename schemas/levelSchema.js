import { gql } from 'apollo-server-express';

export default gql`
  type Level {
    id: ID
    Title: String
    Comments: String
    IsFastChargeCapable: Boolean
  }
  extend type Query {
    leveltypes: [Level]
  }
`;
