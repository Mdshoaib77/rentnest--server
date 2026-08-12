// import {
//   Router,
// } from "express";


// import {
//   createBookingController,
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





// export default router;


import {
  Router,
} from "express";


import {
  createBookingController,
  getMyBookingsController,
  getLandlordBookingsController,
} from "./booking.controller";



import {
  authMiddleware,
} from "../../middlewares/auth.middleware";



import {
  authorizeRole,
} from "../../middlewares/role.middleware";





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

  createBookingController

);







// =======================
// GET MY BOOKINGS
// TENANT ONLY
// =======================

router.get(

  "/my-bookings",

  authMiddleware,

  authorizeRole(
    "TENANT"
  ),

  getMyBookingsController

);







// =======================
// GET LANDLORD BOOKINGS
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






export default router;