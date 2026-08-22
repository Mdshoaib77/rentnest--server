// // // // // // import type {
// // // // // //   Request,
// // // // // //   Response,
// // // // // // } from "express";


// // // // // // import {
// // // // // //   createBookingValidationSchema,
// // // // // // } from "./booking.validation";


// // // // // // import {
// // // // // //   createBooking,
// // // // // // } from "./booking.service";




// // // // // // // =======================
// // // // // // // CREATE BOOKING
// // // // // // // =======================

// // // // // // export const createBookingController =

// // // // // // async (

// // // // // //   req: Request,

// // // // // //   res: Response

// // // // // // ) => {


// // // // // //   try {


// // // // // //     // Validation

// // // // // //     const validatedData =

// // // // // //       createBookingValidationSchema.parse(

// // // // // //         req.body

// // // // // //       );





// // // // // //     // Logged in user

// // // // // //     const tenantId =

// // // // // //       req.user?.id;





// // // // // //     if (!tenantId) {


// // // // // //       return res.status(401).json({

// // // // // //         success:false,

// // // // // //         message:
// // // // // //           "User not authenticated",

// // // // // //       });


// // // // // //     }





// // // // // //     // Create booking

// // // // // //     const booking =

// // // // // //       await createBooking(

// // // // // //         validatedData,

// // // // // //         tenantId

// // // // // //       );






// // // // // //     res.status(201).json({

// // // // // //       success:true,

// // // // // //       message:
// // // // // //         "Booking created successfully",

// // // // // //       data:
// // // // // //         booking,

// // // // // //     });






// // // // // //   } catch(error) {



// // // // // //     res.status(400).json({

// // // // // //       success:false,

// // // // // //       message:

// // // // // //         error instanceof Error

// // // // // //         ? error.message

// // // // // //         : "Booking failed",

// // // // // //     });



// // // // // //   }


// // // // // // };




// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // // } from "express";


// // // // // import {
// // // // //   createBookingValidationSchema,
// // // // // } from "./booking.validation";


// // // // // import {
// // // // //   createBooking,
// // // // //   getMyBookings,
// // // // //   getLandlordBookings,
// // // // // } from "./booking.service";




// // // // // // =======================
// // // // // // CREATE BOOKING
// // // // // // =======================

// // // // // export const createBookingController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {


// // // // //     const validatedData =

// // // // //       createBookingValidationSchema.parse(

// // // // //         req.body

// // // // //       );





// // // // //     const tenantId =

// // // // //       req.user?.id;





// // // // //     if (!tenantId) {


// // // // //       return res.status(401).json({

// // // // //         success:false,

// // // // //         message:

// // // // //           "User not authenticated",

// // // // //       });


// // // // //     }





// // // // //     const booking =

// // // // //       await createBooking(

// // // // //         validatedData,

// // // // //         tenantId

// // // // //       );





// // // // //     res.status(201).json({


// // // // //       success:true,


// // // // //       message:

// // // // //         "Booking created successfully",



// // // // //       data:

// // // // //         booking,


// // // // //     });





// // // // //   } catch(error) {


// // // // //     res.status(400).json({


// // // // //       success:false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Booking failed",


// // // // //     });



// // // // //   }


// // // // // };









// // // // // // =======================
// // // // // // GET MY BOOKINGS (TENANT)
// // // // // // =======================

// // // // // export const getMyBookingsController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {



// // // // //     const tenantId =

// // // // //       req.user?.id;





// // // // //     if (!tenantId) {


// // // // //       return res.status(401).json({


// // // // //         success:false,


// // // // //         message:

// // // // //           "User not authenticated",


// // // // //       });


// // // // //     }






// // // // //     const bookings =

// // // // //       await getMyBookings(

// // // // //         tenantId

// // // // //       );





// // // // //     res.status(200).json({


// // // // //       success:true,


// // // // //       message:

// // // // //         "Bookings fetched successfully",



// // // // //       data:

// // // // //         bookings,


// // // // //     });






// // // // //   } catch(error) {


// // // // //     res.status(400).json({


// // // // //       success:false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch bookings",


// // // // //     });



// // // // //   }


// // // // // };









// // // // // // =======================
// // // // // // GET LANDLORD BOOKINGS
// // // // // // =======================

// // // // // export const getLandlordBookingsController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {



// // // // //     const landlordId =

// // // // //       req.user?.id;





// // // // //     if (!landlordId) {


// // // // //       return res.status(401).json({


// // // // //         success:false,


// // // // //         message:

// // // // //           "User not authenticated",


// // // // //       });


// // // // //     }






// // // // //     const bookings =

// // // // //       await getLandlordBookings(

// // // // //         landlordId

// // // // //       );





// // // // //     res.status(200).json({


// // // // //       success:true,


// // // // //       message:

// // // // //         "Landlord bookings fetched successfully",



// // // // //       data:

// // // // //         bookings,


// // // // //     });






// // // // //   } catch(error) {


// // // // //     res.status(400).json({


// // // // //       success:false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch landlord bookings",


// // // // //     });



// // // // //   }


// // // // // };

// // // // import type {
// // // //   Request,
// // // //   Response,
// // // // } from "express";


// // // // import {
// // // //   createBookingValidationSchema,
// // // //   updateBookingStatusValidationSchema,
// // // // } from "./booking.validation";


// // // // import {
// // // //   createBooking,
// // // //   getMyBookings,
// // // //   getLandlordBookings,
// // // //   updateBookingStatus,
// // // // } from "./booking.service";




// // // // // =======================
// // // // // CREATE BOOKING
// // // // // =======================

// // // // export const createBookingController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const validatedData =

// // // //       createBookingValidationSchema.parse(

// // // //         req.body

// // // //       );





// // // //     const tenantId =

// // // //       req.user?.id;





// // // //     if (!tenantId) {


// // // //       return res.status(401).json({


// // // //         success:false,


// // // //         message:

// // // //           "User not authenticated",


// // // //       });


// // // //     }





// // // //     const booking =

// // // //       await createBooking(

// // // //         validatedData,

// // // //         tenantId

// // // //       );





// // // //     res.status(201).json({


// // // //       success:true,


// // // //       message:

// // // //         "Booking created successfully",



// // // //       data:

// // // //         booking,


// // // //     });





// // // //   } catch(error) {


// // // //     res.status(400).json({


// // // //       success:false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Booking failed",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // GET MY BOOKINGS
// // // // // TENANT ONLY
// // // // // =======================

// // // // export const getMyBookingsController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {



// // // //     const tenantId =

// // // //       req.user?.id;





// // // //     if (!tenantId) {


// // // //       return res.status(401).json({


// // // //         success:false,


// // // //         message:

// // // //           "User not authenticated",


// // // //       });


// // // //     }






// // // //     const bookings =

// // // //       await getMyBookings(

// // // //         tenantId

// // // //       );





// // // //     res.status(200).json({


// // // //       success:true,


// // // //       message:

// // // //         "Bookings fetched successfully",



// // // //       data:

// // // //         bookings,


// // // //     });






// // // //   } catch(error) {


// // // //     res.status(400).json({


// // // //       success:false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch bookings",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // GET LANDLORD BOOKINGS
// // // // // LANDLORD ONLY
// // // // // =======================

// // // // export const getLandlordBookingsController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {



// // // //     const landlordId =

// // // //       req.user?.id;





// // // //     if (!landlordId) {


// // // //       return res.status(401).json({


// // // //         success:false,


// // // //         message:

// // // //           "User not authenticated",


// // // //       });


// // // //     }






// // // //     const bookings =

// // // //       await getLandlordBookings(

// // // //         landlordId

// // // //       );





// // // //     res.status(200).json({


// // // //       success:true,


// // // //       message:

// // // //         "Landlord bookings fetched successfully",



// // // //       data:

// // // //         bookings,


// // // //     });






// // // //   } catch(error) {


// // // //     res.status(400).json({


// // // //       success:false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch landlord bookings",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // UPDATE BOOKING STATUS
// // // // // LANDLORD ONLY
// // // // // =======================

// // // // export const updateBookingStatusController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {



// // // //     const landlordId =

// // // //       req.user?.id;





// // // //     if (!landlordId) {


// // // //       return res.status(401).json({


// // // //         success:false,


// // // //         message:

// // // //           "User not authenticated",


// // // //       });


// // // //     }






// // // //     const bookingId =

// // // //       req.params.id;






// // // //     const validatedData =

// // // //       updateBookingStatusValidationSchema.parse(

// // // //         req.body

// // // //       );






// // // //     const updatedBooking =

// // // //       await updateBookingStatus(

// // // //         bookingId,

// // // //         landlordId,

// // // //         validatedData

// // // //       );






// // // //     res.status(200).json({


// // // //       success:true,


// // // //       message:

// // // //         "Booking status updated successfully",



// // // //       data:

// // // //         updatedBooking,


// // // //     });






// // // //   } catch(error) {


// // // //     res.status(400).json({


// // // //       success:false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to update booking status",


// // // //     });



// // // //   }


// // // // };

// // // import type {
// // //   Request,
// // //   Response,
// // // } from "express";


// // // import {

// // //   createBooking,

// // //   getTenantBookings,

// // //   getLandlordBookings,

// // //   updateBookingStatus,

// // // } from "./booking.service";









// // // // =======================
// // // // CREATE BOOKING
// // // // TENANT ONLY
// // // // =======================

// // // export const createBookingController =
// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const tenantId =

// // //       req.user?.id;





// // //     if(!tenantId){


// // //       return res.status(401).json({


// // //         success:false,


// // //         message:

// // //           "User not authenticated",


// // //       });


// // //     }





// // //     const booking =

// // //       await createBooking(

// // //         req.body,

// // //         tenantId

// // //       );





// // //     res.status(201).json({


// // //       success:true,


// // //       message:

// // //         "Booking created successfully",



// // //       data:

// // //         booking,


// // //     });





// // //   } catch(error) {


// // //     res.status(400).json({


// // //       success:false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Booking creation failed",


// // //     });


// // //   }


// // // };











// // // // =======================
// // // // GET TENANT BOOKINGS
// // // // =======================

// // // export const getTenantBookingsController =
// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const tenantId =

// // //       req.user?.id;





// // //     if(!tenantId){


// // //       return res.status(401).json({


// // //         success:false,


// // //         message:

// // //           "User not authenticated",


// // //       });


// // //     }





// // //     const bookings =

// // //       await getTenantBookings(

// // //         tenantId

// // //       );





// // //     res.status(200).json({


// // //       success:true,


// // //       message:

// // //         "Bookings fetched successfully",



// // //       data:

// // //         bookings,


// // //     });





// // //   } catch(error) {


// // //     res.status(500).json({


// // //       success:false,


// // //       message:

// // //         "Failed to fetch bookings",


// // //     });


// // //   }


// // // };











// // // // =======================
// // // // GET LANDLORD BOOKINGS
// // // // =======================

// // // export const getLandlordBookingsController =
// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const landlordId =

// // //       req.user?.id;





// // //     if(!landlordId){


// // //       return res.status(401).json({


// // //         success:false,


// // //         message:

// // //           "User not authenticated",


// // //       });


// // //     }





// // //     const bookings =

// // //       await getLandlordBookings(

// // //         landlordId

// // //       );





// // //     res.status(200).json({


// // //       success:true,


// // //       message:

// // //         "Landlord bookings fetched successfully",



// // //       data:

// // //         bookings,


// // //     });





// // //   } catch(error) {


// // //     res.status(500).json({


// // //       success:false,


// // //       message:

// // //         "Failed to fetch landlord bookings",


// // //     });


// // //   }


// // // };











// // // // =======================
// // // // UPDATE BOOKING STATUS
// // // // LANDLORD + ADMIN
// // // // =======================

// // // export const updateBookingStatusController =
// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const booking =

// // //       await updateBookingStatus(

// // //         req.params.id,

// // //         req.body.status

// // //       );





// // //     res.status(200).json({


// // //       success:true,


// // //       message:

// // //         "Booking status updated successfully",



// // //       data:

// // //         booking,


// // //     });





// // //   } catch(error) {


// // //     res.status(400).json({


// // //       success:false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Status update failed",


// // //     });


// // //   }


// // // };


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {

// //   createBooking,

// //   getMyBookings,

// //   getLandlordBookings,

// //   updateBookingStatus,

// // } from "./booking.service";









// // // =======================
// // // CREATE BOOKING
// // // TENANT ONLY
// // // =======================

// // export const createBookingController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;





// //     if(!tenantId){


// //       return res.status(401).json({


// //         success:false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const booking =

// //       await createBooking(

// //         req.body,

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

// //         : "Booking creation failed",


// //     });


// //   }


// // };











// // // =======================
// // // GET TENANT BOOKINGS
// // // =======================

// // export const getTenantBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;





// //     if(!tenantId){


// //       return res.status(401).json({


// //         success:false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const bookings =

// //       await getMyBookings(

// //         tenantId

// //       );





// //     res.status(200).json({


// //       success:true,


// //       message:

// //         "Bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch(error) {


// //     res.status(500).json({


// //       success:false,


// //       message:

// //         "Failed to fetch bookings",


// //     });


// //   }


// // };











// // // =======================
// // // GET LANDLORD BOOKINGS
// // // =======================

// // export const getLandlordBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;





// //     if(!landlordId){


// //       return res.status(401).json({


// //         success:false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const bookings =

// //       await getLandlordBookings(

// //         landlordId

// //       );





// //     res.status(200).json({


// //       success:true,


// //       message:

// //         "Landlord bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch(error) {


// //     res.status(500).json({


// //       success:false,


// //       message:

// //         "Failed to fetch landlord bookings",


// //     });


// //   }


// // };











// // // =======================
// // // UPDATE BOOKING STATUS
// // // LANDLORD ONLY
// // // =======================

// // export const updateBookingStatusController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;





// //     if(!landlordId){


// //       return res.status(401).json({


// //         success:false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const booking =

// //       await updateBookingStatus(

// //         req.params.id,

// //         landlordId,

// //         req.body

// //       );





// //     res.status(200).json({


// //       success:true,


// //       message:

// //         "Booking status updated successfully",



// //       data:

// //         booking,


// //     });





// //   } catch(error) {


// //     res.status(400).json({


// //       success:false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Status update failed",


// //     });


// //   }


// // };



// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {

// //   createBooking,

// //   getMyBookings,

// //   getLandlordBookings,

// //   updateBookingStatus,

// // } from "./booking.service";









// // // =======================
// // // CREATE BOOKING
// // // TENANT ONLY
// // // =======================

// // export const createBookingController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;





// //     if (!tenantId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const booking =

// //       await createBooking(

// //         req.body,

// //         tenantId

// //       );





// //     res.status(201).json({


// //       success: true,


// //       message:

// //         "Booking created successfully",



// //       data:

// //         booking,


// //     });





// //   } catch (error) {


// //     res.status(400).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Booking creation failed",


// //     });


// //   }


// // };











// // // =======================
// // // GET TENANT BOOKINGS
// // // TENANT ONLY
// // // =======================

// // export const getTenantBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;





// //     if (!tenantId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const bookings =

// //       await getMyBookings(

// //         tenantId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch bookings",


// //     });


// //   }


// // };











// // // =======================
// // // GET LANDLORD BOOKINGS
// // // LANDLORD ONLY
// // // =======================

// // export const getLandlordBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;





// //     if (!landlordId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const bookings =

// //       await getLandlordBookings(

// //         landlordId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Landlord bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch landlord bookings",


// //     });


// //   }


// // };











// // // =======================
// // // UPDATE BOOKING STATUS
// // // LANDLORD ONLY
// // // =======================

// // export const updateBookingStatusController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;





// //     if (!landlordId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "User not authenticated",


// //       });


// //     }





// //     const bookingId =

// //       String(req.params.id);





// //     const booking =

// //       await updateBookingStatus(

// //         bookingId,

// //         landlordId,

// //         req.body

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Booking status updated successfully",



// //       data:

// //         booking,


// //     });





// //   } catch (error) {


// //     res.status(400).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Status update failed",


// //     });


// //   }


// // };


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {

// //   createBooking,

// //   getMyBookings,

// //   getLandlordBookings,

// //   updateBookingStatus,

// // } from "./booking.service";


// // import {

// //   sendResponse,

// //   sendErrorResponse,

// // } from "../../utils/apiResponse";











// // // =======================
// // // CREATE BOOKING
// // // TENANT ONLY
// // // =======================

// // export const createBookingController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;





// //     if (!tenantId) {


// //       return sendErrorResponse(

// //         res,

// //         401,

// //         "User not authenticated"

// //       );


// //     }







// //     const booking =

// //       await createBooking(

// //         req.body,

// //         tenantId

// //       );







// //     return sendResponse(

// //       res,

// //       201,

// //       "Booking created successfully",

// //       booking

// //     );






// //   } catch (error) {


// //     return sendErrorResponse(

// //       res,

// //       400,

// //       error instanceof Error

// //       ? error.message

// //       : "Booking creation failed"

// //     );


// //   }


// // };











// // // =======================
// // // GET TENANT BOOKINGS
// // // TENANT ONLY
// // // =======================

// // export const getTenantBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const tenantId =

// //       req.user?.id;







// //     if (!tenantId) {


// //       return sendErrorResponse(

// //         res,

// //         401,

// //         "User not authenticated"

// //       );


// //     }







// //     const bookings =

// //       await getMyBookings(

// //         tenantId

// //       );







// //     return sendResponse(

// //       res,

// //       200,

// //       "Bookings fetched successfully",

// //       bookings

// //     );






// //   } catch (error) {


// //     return sendErrorResponse(

// //       res,

// //       500,

// //       error instanceof Error

// //       ? error.message

// //       : "Failed to fetch bookings"

// //     );


// //   }


// // };











// // // =======================
// // // GET LANDLORD BOOKINGS
// // // LANDLORD ONLY
// // // =======================

// // export const getLandlordBookingsController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;







// //     if (!landlordId) {


// //       return sendErrorResponse(

// //         res,

// //         401,

// //         "User not authenticated"

// //       );


// //     }







// //     const bookings =

// //       await getLandlordBookings(

// //         landlordId

// //       );







// //     return sendResponse(

// //       res,

// //       200,

// //       "Landlord bookings fetched successfully",

// //       bookings

// //     );






// //   } catch (error) {


// //     return sendErrorResponse(

// //       res,

// //       500,

// //       error instanceof Error

// //       ? error.message

// //       : "Failed to fetch landlord bookings"

// //     );


// //   }


// // };











// // // =======================
// // // UPDATE BOOKING STATUS
// // // LANDLORD ONLY
// // // =======================

// // export const updateBookingStatusController =
// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const landlordId =

// //       req.user?.id;







// //     if (!landlordId) {


// //       return sendErrorResponse(

// //         res,

// //         401,

// //         "User not authenticated"

// //       );


// //     }







// //     const bookingId =

// //       String(req.params.id);







// //     const booking =

// //       await updateBookingStatus(

// //         bookingId,

// //         landlordId,

// //         req.body

// //       );







// //     return sendResponse(

// //       res,

// //       200,

// //       "Booking status updated successfully",

// //       booking

// //     );






// //   } catch (error) {


// //     return sendErrorResponse(

// //       res,

// //       400,

// //       error instanceof Error

// //       ? error.message

// //       : "Status update failed"

// //     );


// //   }


// // };



// import type {
//   Request,
//   Response,
// } from "express";



// import {

//   createBooking,

//   getMyBookings,

//   getLandlordBookings,

//   updateBookingStatus,

// } from "./booking.service";



// import {

//   sendResponse,

//   sendErrorResponse,

// } from "../../utils/apiResponse";











// // =======================
// // CREATE BOOKING
// // TENANT ONLY
// // =======================

// export const createBookingController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const tenantId =

//       req.user?.id;






//     if (!tenantId) {


//       return sendErrorResponse(

//         res,

//         401,

//         "User not authenticated"

//       );


//     }








//     const booking =

//       await createBooking(

//         req.body,

//         tenantId

//       );







//     return sendResponse(

//       res,

//       201,

//       "Booking created successfully",

//       booking

//     );







//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       400,

//       error instanceof Error

//       ? error.message

//       : "Booking creation failed"

//     );


//   }


// };











// // =======================
// // GET TENANT BOOKINGS
// // TENANT ONLY
// // =======================

// export const getTenantBookingsController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const tenantId =

//       req.user?.id;








//     if (!tenantId) {


//       return sendErrorResponse(

//         res,

//         401,

//         "User not authenticated"

//       );


//     }








//     const bookings =

//       await getMyBookings(

//         tenantId

//       );







//     return sendResponse(

//       res,

//       200,

//       "Bookings fetched successfully",

//       bookings

//     );







//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch bookings"

//     );


//   }


// };











// // =======================
// // GET LANDLORD BOOKINGS
// // LANDLORD ONLY
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


//       return sendErrorResponse(

//         res,

//         401,

//         "User not authenticated"

//       );


//     }








//     const bookings =

//       await getLandlordBookings(

//         landlordId

//       );







//     return sendResponse(

//       res,

//       200,

//       "Landlord bookings fetched successfully",

//       bookings

//     );







//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch landlord bookings"

//     );


//   }


// };











// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD ONLY
// // =======================

// export const updateBookingStatusController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const landlordId =

//       req.user?.id;








//     if (!landlordId) {


//       return sendErrorResponse(

//         res,

//         401,

//         "User not authenticated"

//       );


//     }








//     const bookingId =

//       String(req.params.id);








//     const booking =

//       await updateBookingStatus(

//         bookingId,

//         landlordId,

//         req.body

//       );







//     return sendResponse(

//       res,

//       200,

//       "Booking status updated successfully",

//       booking

//     );







//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       400,

//       error instanceof Error

//       ? error.message

//       : "Status update failed"

//     );


//   }


// };

import type {
  Request,
  Response,
} from "express";


import {

  createBooking,

  getMyBookings,

  getLandlordBookings,

  updateBookingStatus,

} from "./booking.service";



import {

  sendResponse,

  sendErrorResponse,

} from "../../utils/apiResponse";











// =======================
// CREATE BOOKING
// TENANT ONLY
// =======================


export const createBookingController =

async (

  req: Request,

  res: Response

) => {


  try {


    const tenantId =

      req.user?.id;





    if(!tenantId){


      return sendErrorResponse(

        res,

        401,

        "User not authenticated"

      );


    }







    const booking =

      await createBooking(

        req.body,

        tenantId

      );








    return sendResponse(

      res,

      201,

      "Booking created successfully",

      booking

    );






  } catch(error){



    return sendErrorResponse(

      res,

      400,

      error instanceof Error

      ? error.message

      : "Booking creation failed"

    );


  }


};











// =======================
// GET MY BOOKINGS
// TENANT ONLY
// =======================


export const getTenantBookingsController =

async (

  req: Request,

  res: Response

) => {


  try {


    const tenantId =

      req.user?.id;





    if(!tenantId){


      return sendErrorResponse(

        res,

        401,

        "User not authenticated"

      );


    }






    const bookings =

      await getMyBookings(

        tenantId

      );






    return sendResponse(

      res,

      200,

      "Bookings fetched successfully",

      bookings

    );







  } catch(error){


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch bookings"

    );


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





    if(!landlordId){


      return sendErrorResponse(

        res,

        401,

        "User not authenticated"

      );


    }








    const bookings =

      await getLandlordBookings(

        landlordId

      );






    return sendResponse(

      res,

      200,

      "Landlord bookings fetched successfully",

      bookings

    );







  } catch(error){


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch landlord bookings"

    );


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





    if(!landlordId){


      return sendErrorResponse(

        res,

        401,

        "User not authenticated"

      );


    }








    const bookingId =

      req.params.id as string;








    const booking =

      await updateBookingStatus(

        bookingId,

        landlordId,

        req.body

      );







    return sendResponse(

      res,

      200,

      "Booking status updated successfully",

      booking

    );






  } catch(error){



    return sendErrorResponse(

      res,

      400,

      error instanceof Error

      ? error.message

      : "Booking status update failed"

    );


  }


};