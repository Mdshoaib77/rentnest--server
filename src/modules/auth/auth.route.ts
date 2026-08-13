// // // // import { Router } from "express";
// // // // import {
// // // //   registerController,
// // // // } from "./auth.controller";


// // // // const router = Router();


// // // // router.post(
// // // //   "/register",
// // // //   registerController
// // // // );


// // // // export default router;

// // // import {
// // //   Router,
// // // } from "express";


// // // import {

// // //   registerController,

// // //   loginController,

// // // } from "./auth.controller";



// // // const router =
// // //   Router();





// // // router.post(

// // //   "/register",

// // //   registerController

// // // );





// // // router.post(

// // //   "/login",

// // //   loginController

// // // );





// // // export default router;

// // import {
// //   Router,
// // } from "express";



// // import {
// //   registerController,
// //   loginController,
// // } from "./auth.controller";



// // import {
// //   registerSchema,
// //   loginSchema,
// // } from "./auth.validation";



// // import {
// //   validate,
// // } from "../../middlewares/validate.middleware";





// // const router = Router();







// // // =======================
// // // REGISTER
// // // =======================

// // router.post(

// //   "/register",

// //   validate(

// //     registerSchema

// //   ),

// //   registerController

// // );









// // // =======================
// // // LOGIN
// // // =======================

// // router.post(

// //   "/login",

// //   validate(

// //     loginSchema

// //   ),

// //   loginController

// // );







// // export default router;


// import {
//   Router,
// } from "express";



// import {
//   registerController,
//   loginController,
// } from "./auth.controller";



// import {
//   registerSchema,
//   loginSchema,
// } from "./auth.validation";



// import {
//   validate,
// } from "../../middlewares/validate.middleware";





// const router = Router();









// // =======================
// // REGISTER
// // =======================

// router.post(

//   "/register",

//   validate(

//     registerSchema

//   ),

//   registerController

// );









// // =======================
// // LOGIN
// // =======================

// router.post(

//   "/login",

//   validate(

//     loginSchema

//   ),

//   loginController

// );







// export default router;


import {
  Router,
} from "express";



import {
  registerController,
  loginController,
} from "./auth.controller";



import {
  registerSchema,
  loginSchema,
} from "./auth.validation";



import {
  validate,
} from "../../middlewares/validate.middleware";





const router = Router();




// =======================
// REGISTER
// =======================

router.post(

  "/register",

  validate(

    registerSchema

  ),

  registerController

);





// =======================
// LOGIN
// =======================

router.post(

  "/login",

  validate(

    loginSchema

  ),

  loginController

);





export default router;