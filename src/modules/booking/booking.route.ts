import {
  Router,
} from "express";


import {
  createBookingController,
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





export default router;