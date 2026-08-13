// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   createBookingValidationSchema,
// // } from "./booking.validation";


// // import {
// //   createBooking,
// // } from "./booking.service";




// // // =======================
// // // CREATE BOOKING
// // // =======================

// // export const createBookingController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     // Validation

// //     const validatedData =

// //       createBookingValidationSchema.parse(

// //         req.body

// //       );





// //     // Logged in user

// //     const tenantId =

// //       req.user?.id;





// //     if (!tenantId) {


// //       return res.status(401).json({

// //         success:false,

// //         message:
// //           "User not authenticated",

// //       });


// //     }





// //     // Create booking

// //     const booking =

// //       await createBooking(

// //         validatedData,

// //         tenantId

// //       );






// //     res.status(201).json({

// //       success:true,

// //       message:
// //         "Booking created successfully",

// //       data:
// //         booking,

// //     });






// //   } catch(error) {



// //     res.status(400).json({

// //       success:false,

// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Booking failed",

// //     });



// //   }


// // };




// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   createBookingValidationSchema,
// } from "./booking.validation";


// import {
//   createBooking,
//   getMyBookings,
//   getLandlordBookings,
// } from "./booking.service";




// // =======================
// // CREATE BOOKING
// // =======================

// export const createBookingController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const validatedData =

//       createBookingValidationSchema.parse(

//         req.body

//       );





//     const tenantId =

//       req.user?.id;





//     if (!tenantId) {


//       return res.status(401).json({

//         success:false,

//         message:

//           "User not authenticated",

//       });


//     }





//     const booking =

//       await createBooking(

//         validatedData,

//         tenantId

//       );





//     res.status(201).json({


//       success:true,


//       message:

//         "Booking created successfully",



//       data:

//         booking,


//     });





//   } catch(error) {


//     res.status(400).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Booking failed",


//     });



//   }


// };









// // =======================
// // GET MY BOOKINGS (TENANT)
// // =======================

// export const getMyBookingsController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {



//     const tenantId =

//       req.user?.id;





//     if (!tenantId) {


//       return res.status(401).json({


//         success:false,


//         message:

//           "User not authenticated",


//       });


//     }






//     const bookings =

//       await getMyBookings(

//         tenantId

//       );





//     res.status(200).json({


//       success:true,


//       message:

//         "Bookings fetched successfully",



//       data:

//         bookings,


//     });






//   } catch(error) {


//     res.status(400).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch bookings",


//     });



//   }


// };









// // =======================
// // GET LANDLORD BOOKINGS
// // =======================

// export const getLandlordBookingsController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {



//     const landlordId =

//       req.user?.id;





//     if (!landlordId) {


//       return res.status(401).json({


//         success:false,


//         message:

//           "User not authenticated",


//       });


//     }






//     const bookings =

//       await getLandlordBookings(

//         landlordId

//       );





//     res.status(200).json({


//       success:true,


//       message:

//         "Landlord bookings fetched successfully",



//       data:

//         bookings,


//     });






//   } catch(error) {


//     res.status(400).json({


//       success:false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch landlord bookings",


//     });



//   }


// };

import type {
  Request,
  Response,
} from "express";


import {
  createBookingValidationSchema,
  updateBookingStatusValidationSchema,
} from "./booking.validation";


import {
  createBooking,
  getMyBookings,
  getLandlordBookings,
  updateBookingStatus,
} from "./booking.service";




// =======================
// CREATE BOOKING
// =======================

export const createBookingController =

async (

  req: Request,

  res: Response

) => {


  try {


    const validatedData =

      createBookingValidationSchema.parse(

        req.body

      );





    const tenantId =

      req.user?.id;





    if (!tenantId) {


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }





    const booking =

      await createBooking(

        validatedData,

        tenantId

      );





    res.status(201).json({


      success:true,


      message:

        "Booking created successfully",



      data:

        booking,


    });





  } catch(error) {


    res.status(400).json({


      success:false,


      message:

        error instanceof Error

        ? error.message

        : "Booking failed",


    });



  }


};









// =======================
// GET MY BOOKINGS
// TENANT ONLY
// =======================

export const getMyBookingsController =

async (

  req: Request,

  res: Response

) => {


  try {



    const tenantId =

      req.user?.id;





    if (!tenantId) {


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }






    const bookings =

      await getMyBookings(

        tenantId

      );





    res.status(200).json({


      success:true,


      message:

        "Bookings fetched successfully",



      data:

        bookings,


    });






  } catch(error) {


    res.status(400).json({


      success:false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch bookings",


    });



  }


};









// =======================
// GET LANDLORD BOOKINGS
// LANDLORD ONLY
// =======================

export const getLandlordBookingsController =

async (

  req: Request,

  res: Response

) => {


  try {



    const landlordId =

      req.user?.id;





    if (!landlordId) {


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }






    const bookings =

      await getLandlordBookings(

        landlordId

      );





    res.status(200).json({


      success:true,


      message:

        "Landlord bookings fetched successfully",



      data:

        bookings,


    });






  } catch(error) {


    res.status(400).json({


      success:false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch landlord bookings",


    });



  }


};









// =======================
// UPDATE BOOKING STATUS
// LANDLORD ONLY
// =======================

export const updateBookingStatusController =

async (

  req: Request,

  res: Response

) => {


  try {



    const landlordId =

      req.user?.id;





    if (!landlordId) {


      return res.status(401).json({


        success:false,


        message:

          "User not authenticated",


      });


    }






    const bookingId =

      req.params.id;






    const validatedData =

      updateBookingStatusValidationSchema.parse(

        req.body

      );






    const updatedBooking =

      await updateBookingStatus(

        bookingId,

        landlordId,

        validatedData

      );






    res.status(200).json({


      success:true,


      message:

        "Booking status updated successfully",



      data:

        updatedBooking,


    });






  } catch(error) {


    res.status(400).json({


      success:false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to update booking status",


    });



  }


};