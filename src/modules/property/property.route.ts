import {
  Router,
} from "express";


import {
  createPropertyController,
} from "./property.controller";


import {
  authMiddleware,
} from "../../middlewares/auth.middleware";


import {
  authorizeRole,
} from "../../middlewares/role.middleware";



const router = Router();



// Create Property
// Only LANDLORD and ADMIN can access

router.post(

  "/",

  authMiddleware,

  authorizeRole(
    "LANDLORD",
    "ADMIN"
  ),

  createPropertyController

);



export default router;