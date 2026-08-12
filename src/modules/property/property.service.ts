// // import prisma from "../../lib/prisma";

// // import type {
// //   CreatePropertyInput,
// // } from "./property.validation";



// // export const createProperty = async (

// //   payload: CreatePropertyInput,

// //   landlordId: string

// // ) => {


// //   const property =

// //     await prisma.property.create({

// //       data: {

// //         title:
// //           payload.title,


// //         description:
// //           payload.description,


// //         location:
// //           payload.location,


// //         price:
// //           payload.price,


// //         bedrooms:
// //           payload.bedrooms,


// //         bathrooms:
// //           payload.bathrooms,


// //         landlordId,

// //       },


// //     });



// //   return property;


// // };


// import prisma from "../../lib/prisma";

// import type {
//   CreatePropertyInput,
// } from "./property.validation";



// // =======================
// // CREATE PROPERTY
// // =======================

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





// // =======================
// // GET ALL PROPERTIES
// // =======================

// export const getAllProperties = async () => {


//   const properties =

//     await prisma.property.findMany({

//       include: {

//         landlord: {

//           select: {

//             id: true,

//             name: true,

//             email: true,

//           },

//         },

//       },

//     });



//   return properties;


// };






// // =======================
// // GET SINGLE PROPERTY
// // =======================

// export const getSingleProperty = async (

//   propertyId: string

// ) => {


//   const property =

//     await prisma.property.findUnique({

//       where: {

//         id: propertyId,

//       },


//       include: {

//         landlord: {

//           select: {

//             id: true,

//             name: true,

//             email: true,

//           },

//         },

//       },

//     });



//   return property;


// };


import prisma from "../../lib/prisma";


import type {
  CreatePropertyInput,
  UpdatePropertyInput,
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








// =======================
// UPDATE PROPERTY
// =======================

export const updateProperty = async (

  propertyId: string,

  landlordId: string,

  payload: UpdatePropertyInput

) => {



  const property =

    await prisma.property.findUnique({

      where: {

        id: propertyId,

      },

    });





  if (!property) {

    throw new Error(
      "Property not found"
    );

  }






  if (

    property.landlordId !== landlordId

  ) {


    throw new Error(
      "You are not allowed to update this property"
    );


  }






  const updatedProperty =

    await prisma.property.update({

      where: {

        id: propertyId,

      },


      data: payload,

    });





  return updatedProperty;


};









// =======================
// DELETE PROPERTY
// =======================

export const deleteProperty = async (

  propertyId: string,

  landlordId: string

) => {



  const property =

    await prisma.property.findUnique({

      where: {

        id: propertyId,

      },

    });





  if (!property) {

    throw new Error(
      "Property not found"
    );

  }





  if (

    property.landlordId !== landlordId

  ) {


    throw new Error(
      "You are not allowed to delete this property"
    );


  }






  await prisma.property.delete({

    where: {

      id: propertyId,

    },

  });





  return null;


};