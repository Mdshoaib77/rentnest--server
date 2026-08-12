// import prisma from "../../lib/prisma";

// import type {
//   CreatePropertyInput,
// } from "./property.validation";



// export const createProperty = async (

//   payload: CreatePropertyInput,

//   landlordId: string

// ) => {


//   const property =

//     await prisma.property.create({

//       data: {

//         title:
//           payload.title,


//         description:
//           payload.description,


//         location:
//           payload.location,


//         price:
//           payload.price,


//         bedrooms:
//           payload.bedrooms,


//         bathrooms:
//           payload.bathrooms,


//         landlordId,

//       },


//     });



//   return property;


// };


import prisma from "../../lib/prisma";

import type {
  CreatePropertyInput,
} from "./property.validation";



// =======================
// CREATE PROPERTY
// =======================

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





// =======================
// GET ALL PROPERTIES
// =======================

export const getAllProperties = async () => {


  const properties =

    await prisma.property.findMany({

      include: {

        landlord: {

          select: {

            id: true,

            name: true,

            email: true,

          },

        },

      },

    });



  return properties;


};






// =======================
// GET SINGLE PROPERTY
// =======================

export const getSingleProperty = async (

  propertyId: string

) => {


  const property =

    await prisma.property.findUnique({

      where: {

        id: propertyId,

      },


      include: {

        landlord: {

          select: {

            id: true,

            name: true,

            email: true,

          },

        },

      },

    });



  return property;


};