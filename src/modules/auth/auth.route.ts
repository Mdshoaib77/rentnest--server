// import { Router } from "express";
// import {
//   registerController,
// } from "./auth.controller";


// const router = Router();


// router.post(
//   "/register",
//   registerController
// );


// export default router;

import {
  Router,
} from "express";


import {

  registerController,

  loginController,

} from "./auth.controller";



const router =
  Router();





router.post(

  "/register",

  registerController

);





router.post(

  "/login",

  loginController

);





export default router;