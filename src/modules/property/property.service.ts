import prisma from "../../lib/prisma";

import type {
  CreatePropertyInput,
} from "./property.validation";



export const createProperty = async (

  payload: CreatePropertyInput,

  landlordId: string

) => {


  const property =

    await prisma.property.create({

      data: {

        title:
          payload.title,


        description:
          payload.description,


        location:
          payload.location,


        price:
          payload.price,


        bedrooms:
          payload.bedrooms,


        bathrooms:
          payload.bathrooms,


        landlordId,

      },


    });



  return property;


};