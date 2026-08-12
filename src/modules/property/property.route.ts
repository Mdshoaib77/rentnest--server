// // import {
// //   Router,
// // } from "express";


// // import {
// //   createPropertyController,
// // } from "./property.controller";


// // import {
// //   authMiddleware,
// // } from "../../middlewares/auth.middleware";


// // import {
// //   authorizeRole,
// // } from "../../middlewares/role.middleware";



// // const router = Router();



// // // Create Property
// // // Only LANDLORD and ADMIN can access

// // router.post(

// //   "/",

// //   authMiddleware,

// //   authorizeRole(
// //     "LANDLORD",
// //     "ADMIN"
// //   ),

// //   createPropertyController

// // );



// // export default router;



// import {
//   Router,
// } from "express";


// import {
//   createPropertyController,
//   getAllPropertiesController,
//   getSinglePropertyController,
// } from "./property.controller";


// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";


// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";



// const router = Router();




// // =======================
// // GET ALL PROPERTIES
// // Public Route
// // =======================

// router.get(

//   "/",

//   getAllPropertiesController

// );






// // =======================
// // GET SINGLE PROPERTY
// // Public Route
// // =======================

// router.get(

//   "/:id",

//   getSinglePropertyController

// );






// // =======================
// // CREATE PROPERTY
// // LANDLORD + ADMIN ONLY
// // =======================

// router.post(

//   "/",

//   authMiddleware,


//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),


//   createPropertyController

// );





// export default router;


import {
  Router,
} from "express";


import {
  createPropertyController,
  getAllPropertiesController,
  getSinglePropertyController,
  updatePropertyController,
  deletePropertyController,
} from "./property.controller";


import {
  authMiddleware,
} from "../../middlewares/auth.middleware";


import {
  authorizeRole,
} from "../../middlewares/role.middleware";



const router = Router();




// =======================
// GET ALL PROPERTIES
// Public Route
// =======================

router.get(

  "/",

  getAllPropertiesController

);







// =======================
// GET SINGLE PROPERTY
// Public Route
// =======================

router.get(

  "/:id",

  getSinglePropertyController

);







// =======================
// CREATE PROPERTY
// LANDLORD + ADMIN ONLY
// =======================

router.post(

  "/",

  authMiddleware,


  authorizeRole(
    "LANDLORD",
    "ADMIN"
  ),


  createPropertyController

);








// =======================
// UPDATE PROPERTY
// LANDLORD + ADMIN ONLY
// =======================

router.patch(

  "/:id",

  authMiddleware,


  authorizeRole(
    "LANDLORD",
    "ADMIN"
  ),


  updatePropertyController

);








// =======================
// DELETE PROPERTY
// LANDLORD + ADMIN ONLY
// =======================

router.delete(

  "/:id",

  authMiddleware,


  authorizeRole(
    "LANDLORD",
    "ADMIN"
  ),


  deletePropertyController

);






export default router;