// import prisma from "../../lib/prisma";


// import type {
//   CreateBookingInput,
// } from "./booking.validation";




// // =======================
// // CREATE BOOKING
// // =======================

// export const createBooking = async (

//   payload: CreateBookingInput,

//   tenantId: string

// ) => {



//   // Check property exists

//   const property =

//     await prisma.property.findUnique({

//       where: {

//         id:
//           payload.propertyId,

//       },

//     });





//   if (!property) {


//     throw new Error(

//       "Property not found"

//     );


//   }






//   // Prevent landlord booking own property

//   if (

//     property.landlordId === tenantId

//   ) {


//     throw new Error(

//       "You cannot book your own property"

//     );


//   }






//   // Create booking

//   const booking =

//     await prisma.booking.create({

//       data: {


//         tenantId,



//         propertyId:
//           payload.propertyId,



//         startDate:

//           new Date(

//             payload.startDate

//           ),



//         endDate:

//           new Date(

//             payload.endDate

//           ),



//         status:

//           "PENDING",


//       },



//       include: {


//         property: {


//           select: {


//             id: true,


//             title: true,


//             location: true,


//             price: true,


//           },


//         },



//         tenant: {


//           select: {


//             id: true,


//             name: true,


//             email: true,


//           },


//         },


//       },


//     });






//   return booking;


// };


import prisma from "../../lib/prisma";


import type {
  CreateBookingInput,
} from "./booking.validation";





// =======================
// CREATE BOOKING
// =======================

export const createBooking = async (

  payload: CreateBookingInput,

  tenantId: string

) => {



  const property =

    await prisma.property.findUnique({

      where: {

        id: payload.propertyId,

      },

    });





  if (!property) {

    throw new Error(

      "Property not found"

    );

  }





  if (

    property.landlordId === tenantId

  ) {

    throw new Error(

      "You cannot book your own property"

    );

  }





  const booking =

    await prisma.booking.create({

      data: {


        tenantId,


        propertyId:
          payload.propertyId,


        startDate:

          new Date(

            payload.startDate

          ),


        endDate:

          new Date(

            payload.endDate

          ),


        status:

          "PENDING",


      },



      include: {


        property: {


          select: {


            id: true,


            title: true,


            location: true,


            price: true,


          },


        },



        tenant: {


          select: {


            id: true,


            name: true,


            email: true,


          },


        },


      },


    });





  return booking;


};









// =======================
// GET TENANT BOOKINGS
// =======================

export const getMyBookings = async (

  tenantId: string

) => {



  const bookings =

    await prisma.booking.findMany({

      where: {


        tenantId,


      },


      include: {


        property: {


          select: {


            id: true,


            title: true,


            location: true,


            price: true,


          },


        },


      },


      orderBy: {


        createdAt: "desc",


      },


    });





  return bookings;


};









// =======================
// GET LANDLORD BOOKINGS
// =======================

export const getLandlordBookings = async (

  landlordId: string

) => {



  const bookings =

    await prisma.booking.findMany({

      where: {


        property: {


          landlordId,


        },


      },


      include: {


        property: {


          select: {


            id: true,


            title: true,


            location: true,


            price: true,


          },


        },



        tenant: {


          select: {


            id: true,


            name: true,


            email: true,


          },


        },


      },



      orderBy: {


        createdAt: "desc",


      },


    });





  return bookings;


};