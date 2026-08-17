import {
  Router,
} from "express";



import authRouter from "../../modules/auth/auth.route";

import propertyRouter from "../../modules/property/property.route";

import bookingRouter from "../../modules/booking/booking.route";

import adminRouter from "../../modules/admin/admin.route";





const router = Router();






// =======================
// API V1 ROUTES
// =======================


router.use(

  "/auth",

  authRouter

);



router.use(

  "/properties",

  propertyRouter

);



router.use(

  "/bookings",

  bookingRouter

);



router.use(

  "/admin",

  adminRouter

);






export default router;