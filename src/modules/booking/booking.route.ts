// // // import {
// // //   Router,
// // // } from "express";


// // // import {
// // //   createBookingController,
// // // } from "./booking.controller";


// // // import {
// // //   authMiddleware,
// // // } from "../../middlewares/auth.middleware";


// // // import {
// // //   authorizeRole,
// // // } from "../../middlewares/role.middleware";



// // // const router = Router();





// // // // =======================
// // // // CREATE BOOKING
// // // // TENANT ONLY
// // // // =======================

// // // router.post(

// // //   "/",

// // //   authMiddleware,


// // //   authorizeRole(
// // //     "TENANT"
// // //   ),


// // //   createBookingController

// // // );





// // // export default router;


// // import {
// //   Router,
// // } from "express";


// // import {
// //   createBookingController,
// //   getMyBookingsController,
// //   getLandlordBookingsController,
// // } from "./booking.controller";



// // import {
// //   authMiddleware,
// // } from "../../middlewares/auth.middleware";



// // import {
// //   authorizeRole,
// // } from "../../middlewares/role.middleware";





// // const router = Router();







// // // =======================
// // // CREATE BOOKING
// // // TENANT ONLY
// // // =======================

// // router.post(

// //   "/",

// //   authMiddleware,

// //   authorizeRole(
// //     "TENANT"
// //   ),

// //   createBookingController

// // );







// // // =======================
// // // GET MY BOOKINGS
// // // TENANT ONLY
// // // =======================

// // router.get(

// //   "/my-bookings",

// //   authMiddleware,

// //   authorizeRole(
// //     "TENANT"
// //   ),

// //   getMyBookingsController

// // );







// // // =======================
// // // GET LANDLORD BOOKINGS
// // // LANDLORD ONLY
// // // =======================

// // router.get(

// //   "/landlord",

// //   authMiddleware,

// //   authorizeRole(
// //     "LANDLORD"
// //   ),

// //   getLandlordBookingsController

// // );






// // export default router;


// import {
//   Router,
// } from "express";



// import {
//   createBookingController,
//   getMyBookingsController,
//   getLandlordBookingsController,
//   updateBookingStatusController,
// } from "./booking.controller";



// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";



// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";





// const router = Router();







// // =======================
// // CREATE BOOKING
// // TENANT ONLY
// // =======================

// router.post(

//   "/",

//   authMiddleware,

//   authorizeRole(
//     "TENANT"
//   ),

//   createBookingController

// );









// // =======================
// // GET MY BOOKINGS
// // TENANT ONLY
// // =======================

// router.get(

//   "/my-bookings",

//   authMiddleware,

//   authorizeRole(
//     "TENANT"
//   ),

//   getMyBookingsController

// );









// // =======================
// // GET LANDLORD BOOKINGS
// // LANDLORD ONLY
// // =======================

// router.get(

//   "/landlord",

//   authMiddleware,

//   authorizeRole(
//     "LANDLORD"
//   ),

//   getLandlordBookingsController

// );









// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD ONLY
// // =======================

// router.patch(

//   "/:id/status",

//   authMiddleware,

//   authorizeRole(
//     "LANDLORD"
//   ),

//   updateBookingStatusController

// );







// export default router;



import {
  Router,
} from "express";



import {

  createBookingController,

  getTenantBookingsController,

  getLandlordBookingsController,

  updateBookingStatusController,

} from "./booking.controller";



import {

  authMiddleware,

} from "../../middlewares/auth.middleware";



import {

  authorizeRole,

} from "../../middlewares/role.middleware";



import {

  validate,

} from "../../middlewares/validate.middleware";



import {

  createBookingSchema,

  bookingIdSchema,

  updateBookingStatusSchema,

} from "./booking.validation";





const router = Router();









// =======================
// CREATE BOOKING
// TENANT ONLY
// =======================

router.post(

  "/",

  authMiddleware,


  authorizeRole(

    "TENANT"

  ),


  validate(

    createBookingSchema

  ),


  createBookingController

);









// =======================
// TENANT BOOKINGS
// TENANT ONLY
// =======================

router.get(

  "/tenant",

  authMiddleware,


  authorizeRole(

    "TENANT"

  ),


  getTenantBookingsController

);









// =======================
// LANDLORD BOOKINGS
// LANDLORD ONLY
// =======================

router.get(

  "/landlord",

  authMiddleware,


  authorizeRole(

    "LANDLORD"

  ),


  getLandlordBookingsController

);









// =======================
// UPDATE BOOKING STATUS
// LANDLORD + ADMIN
// =======================

router.patch(

  "/:id/status",

  authMiddleware,


  authorizeRole(

    "LANDLORD",

    "ADMIN"

  ),


  validate(

    bookingIdSchema

  ),


  validate(

    updateBookingStatusSchema

  ),


  updateBookingStatusController

);







export default router;