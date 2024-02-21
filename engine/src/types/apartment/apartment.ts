import { Document, Model, Types } from "mongoose";
import { IUserDocument } from "../user/user";

export interface IApartmentReview {
  user: Types.ObjectId;
  apartment: Types.ObjectId;
  rating: number;
  comment: string;
}

export interface IApartmentImage {
  url: string
  apartment: Types.ObjectId
}



export interface IApartment {
  owner: Types.ObjectId;
  name: string;
  description: string;
  location: string
  bedrooms: number
  bathrooms: number
  amenities: string[]
  price: number
  available: boolean
  images?: IApartmentImage[]
  reviews?: IApartmentReview
}

export interface IApartmentDocument extends IApartment,Document{
    _id:Types.ObjectId
    createdAt:Date
    updatedAt:Date
}

export interface IApartmentModel extends Model<IUserDocument,IApartment>{}