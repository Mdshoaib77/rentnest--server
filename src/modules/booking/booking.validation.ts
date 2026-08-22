// // // import { z } from "zod";




// // // // =======================
// // // // CREATE BOOKING VALIDATION
// // // // =======================

// // // export const createBookingValidationSchema =

// // //   z.object({

// // //     propertyId:

// // //       z
// // //         .string()
// // //         .uuid(
// // //           "Invalid property id"
// // //         ),



// // //     startDate:

// // //       z
// // //         .string()
// // //         .datetime(
// // //           "Invalid start date"
// // //         ),



// // //     endDate:

// // //       z
// // //         .string()
// // //         .datetime(
// // //           "Invalid end date"
// // //         ),


// // //   })

// // //   .refine(

// // //     (data) => {

// // //       return (

// // //         new Date(data.endDate)

// // //         >

// // //         new Date(data.startDate)

// // //       );

// // //     },

// // //     {

// // //       message:
// // //         "End date must be after start date",

// // //       path:
// // //         [
// // //           "endDate"
// // //         ],

// // //     }

// // //   );






// // // // =======================
// // // // TYPE EXPORT
// // // // =======================

// // // export type CreateBookingInput =

// // //   z.infer<

// // //     typeof createBookingValidationSchema

// // //   >;



// // import { z } from "zod";




// // // =======================
// // // CREATE BOOKING VALIDATION
// // // =======================

// // export const createBookingValidationSchema =

// //   z.object({

// //     propertyId:

// //       z
// //         .string()
// //         .uuid(
// //           "Invalid property id"
// //         ),



// //     startDate:

// //       z
// //         .string()
// //         .datetime(
// //           "Invalid start date"
// //         ),



// //     endDate:

// //       z
// //         .string()
// //         .datetime(
// //           "Invalid end date"
// //         ),


// //   })

// //   .refine(

// //     (data) => {

// //       return (

// //         new Date(data.endDate)

// //         >

// //         new Date(data.startDate)

// //       );

// //     },

// //     {

// //       message:

// //         "End date must be after start date",

// //       path:

// //         [

// //           "endDate"

// //         ],

// //     }

// //   );








// // // =======================
// // // CREATE BOOKING TYPE
// // // =======================

// // export type CreateBookingInput =

// //   z.infer<

// //     typeof createBookingValidationSchema

// //   >;









// // // =======================
// // // UPDATE BOOKING STATUS VALIDATION
// // // =======================

// // export const updateBookingStatusValidationSchema =

// //   z.object({

// //     status:

// //       z.enum([

// //         "ACCEPTED",

// //         "REJECTED",

// //       ]),


// //   });









// // // =======================
// // // UPDATE BOOKING STATUS TYPE
// // // =======================

// // export type UpdateBookingStatusInput =

// //   z.infer<

// //     typeof updateBookingStatusValidationSchema

// //   >;


// import {
//   z,
// } from "zod";




// // =======================
// // CREATE BOOKING VALIDATION
// // =======================

// export const createBookingSchema = z.object({

//   body: z.object({


//     propertyId: z
//       .string()
//       .uuid(
//         "Invalid property id"
//       ),



//     startDate: z
//       .string()
//       .datetime(
//         "Invalid start date"
//       ),



//     endDate: z
//       .string()
//       .datetime(
//         "Invalid end date"
//       ),



//   })
//   .refine(

//     (data) =>

//       new Date(data.startDate)

//       <

//       new Date(data.endDate),


//     {
//       message:
//         "Start date must be before end date",

//       path:[
//         "endDate"
//       ],

//     }

//   ),


// });









// // =======================
// // UPDATE BOOKING STATUS
// // =======================

// export const updateBookingStatusSchema = z.object({

//   body: z.object({


//     status: z.enum([

//       "PENDING",

//       "ACCEPTED",

//       "REJECTED",

//       "PAID",

//       "CANCELLED",

//     ]),


//   }),


// });









// // =======================
// // BOOKING ID VALIDATION
// // =======================

// export const bookingIdSchema = z.object({

//   params: z.object({


//     id: z
//       .string()
//       .uuid(
//         "Invalid booking id"
//       ),


//   }),


// });


// import {
//   z,
// } from "zod";




// // =======================
// // CREATE BOOKING VALIDATION
// // =======================

// export const createBookingSchema = z.object({

//   body: z.object({


//     propertyId: z
//       .string()
//       .uuid(
//         "Invalid property id"
//       ),



//     startDate: z
//       .string()
//       .datetime(
//         "Invalid start date"
//       ),



//     endDate: z
//       .string()
//       .datetime(
//         "Invalid end date"
//       ),



//   })
//   .refine(


//     (data) =>


//       new Date(data.startDate)

//       <

//       new Date(data.endDate),



//     {

//       message:

//         "Start date must be before end date",


//       path:[

//         "endDate"

//       ],


//     }


//   ),


// });











// // =======================
// // UPDATE BOOKING STATUS
// // =======================

// export const updateBookingStatusSchema = z.object({

//   body: z.object({


//     status: z.enum([

//       "PENDING",

//       "ACCEPTED",

//       "REJECTED",

//       "PAID",

//       "CANCELLED",

//     ]),


//   }),


// });











// // =======================
// // BOOKING ID VALIDATION
// // =======================

// export const bookingIdSchema = z.object({

//   params: z.object({


//     id: z
//       .string()
//       .uuid(

//         "Invalid booking id"

//       ),


//   }),


// });











// // =======================
// // TYPES
// // =======================


// export type CreateBookingInput =

//   z.infer<

//     typeof createBookingSchema

//   >["body"];





// export type UpdateBookingStatusInput =

//   z.infer<

//     typeof updateBookingStatusSchema

//   >["body"];

import {
  z,
} from "zod";









// =======================
// CREATE BOOKING VALIDATION
// =======================

export const createBookingSchema = z.object({


  body: z.object({



    propertyId:

      z
        .string()
        .uuid(
          "Invalid property id"
        ),





    startDate:

      z
        .string()
        .datetime(
          "Invalid start date"
        ),





    endDate:

      z
        .string()
        .datetime(
          "Invalid end date"
        ),




  })



  // =======================
  // DATE BUSINESS LOGIC
  // =======================

  .refine(


    (data)=>{


      const start =

        new Date(

          data.startDate

        );



      const end =

        new Date(

          data.endDate

        );



      return start < end;



    },


    {


      message:

        "Start date must be before end date",



      path:[

        "endDate"

      ],


    }


  )




  // =======================
  // PREVENT PAST BOOKING
  // =======================

  .refine(


    (data)=>{


      const start =

        new Date(

          data.startDate

        );



      const today =

        new Date();



      today.setHours(

        0,

        0,

        0,

        0

      );



      return start >= today;



    },


    {


      message:

        "Booking date cannot be in the past",



      path:[

        "startDate"

      ],


    }


  )





  // =======================
  // MINIMUM DURATION
  // =======================

  .refine(


    (data)=>{


      const start =

        new Date(

          data.startDate

        );



      const end =

        new Date(

          data.endDate

        );



      const difference =


        end.getTime()

        -

        start.getTime();



      const days =


        difference /

        (

          1000 *

          60 *

          60 *

          24

        );



      return days >= 1;



    },


    {


      message:

        "Booking duration must be at least 1 day",



      path:[

        "endDate"

      ],


    }


  ),



});













// =======================
// UPDATE BOOKING STATUS
// =======================

export const updateBookingStatusSchema = z.object({


  body:z.object({



    status:z.enum([


      "PENDING",


      "ACCEPTED",


      "REJECTED",


      "PAID",


      "CANCELLED",



    ]),



  }),



});












// =======================
// BOOKING ID VALIDATION
// =======================

export const bookingIdSchema = z.object({


  params:z.object({



    id:

      z
        .string()
        .uuid(

          "Invalid booking id"

        ),



  }),



});












// =======================
// TYPES
// =======================


export type CreateBookingInput =


  z.infer<

    typeof createBookingSchema

  >["body"];








export type UpdateBookingStatusInput =


  z.infer<

    typeof updateBookingStatusSchema

  >["body"];