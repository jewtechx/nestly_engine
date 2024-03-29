import { gql } from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    getApartmentBooking(GetApartmentBookingInput: GetApartmentBookingInput!): ApartmentBooking  
  }

  enum BookingStatus {
    CONFIRMED
    PENDING
    CANCELED
  }

  type ApartmentBooking {
    _id:ID
    apartment: ID
    startDate: Date
    transactionId: String
    amount: String
    reference:String
    endDate: Date
    status: BookingStatus
    notes: String
  }

  input BookingPaginationInput {
    limit: Int!
    offset: Int!
  }

  input GetApartmentBookingInput {
    apartment: ID!
  }

  input CreateApartmentBookingInput {
    apartment: ID!
    transactionId: String
    amount: String
    reference:String
    startDate: Date
    endDate: Date
    status: BookingStatus
    notes: String
  }

  input UpdateApartmentBookingInput {
    bookingId: ID!
    transactionId: String
    amount: String
    reference:String
    startDate: Date
    endDate: Date
    status: BookingStatus
    notes: String
  }

  input DeleteApartmentBookingInput {
    bookingId: ID!
  }

  extend type Mutation {
    createApartmentBooking(CreateApartmentBookingInput: CreateApartmentBookingInput!): ApartmentBooking
    updateApartmentBooking(UpdateApartmentBookingInput: UpdateApartmentBookingInput!): ApartmentBooking
    deleteApartmentBooking(DeleteApartmentBookingInput: DeleteApartmentBookingInput!): String
  }
`;

export default typeDefs;
