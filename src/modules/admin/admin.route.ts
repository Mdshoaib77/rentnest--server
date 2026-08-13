// // // // import {
// // // //   Router,
// // // // } from "express";


// // // // import {
// // // //   getAdminStatsController,
// // // // } from "./admin.controller";


// // // // import {
// // // //   authMiddleware,
// // // // } from "../../middlewares/auth.middleware";


// // // // import {
// // // //   authorizeRole,
// // // // } from "../../middlewares/role.middleware";





// // // // const router = Router();







// // // // // =======================
// // // // // ADMIN DASHBOARD STATS
// // // // // ADMIN ONLY
// // // // // =======================

// // // // router.get(

// // // //   "/stats",

// // // //   authMiddleware,

// // // //   authorizeRole(

// // // //     "ADMIN"

// // // //   ),

// // // //   getAdminStatsController

// // // // );






// // // // export default router;


// // // import {
// // //   Router,
// // // } from "express";



// // // import {
// // //   getAdminStatsController,
// // //   getAllUsersController,
// // // } from "./admin.controller";



// // // import {
// // //   authMiddleware,
// // // } from "../../middlewares/auth.middleware";



// // // import {
// // //   authorizeRole,
// // // } from "../../middlewares/role.middleware";





// // // const router = Router();







// // // // =======================
// // // // ADMIN DASHBOARD STATS
// // // // ADMIN ONLY
// // // // =======================

// // // router.get(

// // //   "/stats",

// // //   authMiddleware,

// // //   authorizeRole(

// // //     "ADMIN"

// // //   ),

// // //   getAdminStatsController

// // // );









// // // // =======================
// // // // GET ALL USERS
// // // // ADMIN ONLY
// // // // =======================

// // // router.get(

// // //   "/users",

// // //   authMiddleware,

// // //   authorizeRole(

// // //     "ADMIN"

// // //   ),

// // //   getAllUsersController

// // // );







// // // export default router;


// // import {
// //   Router,
// // } from "express";



// // import {
// //   getAdminStatsController,
// //   getAllUsersController,
// //   getAllPropertiesController,
// // } from "./admin.controller";



// // import {
// //   authMiddleware,
// // } from "../../middlewares/auth.middleware";



// // import {
// //   authorizeRole,
// // } from "../../middlewares/role.middleware";





// // const router = Router();







// // // =======================
// // // ADMIN DASHBOARD STATS
// // // ADMIN ONLY
// // // =======================

// // router.get(

// //   "/stats",

// //   authMiddleware,

// //   authorizeRole(

// //     "ADMIN"

// //   ),

// //   getAdminStatsController

// // );









// // // =======================
// // // GET ALL USERS
// // // ADMIN ONLY
// // // =======================

// // router.get(

// //   "/users",

// //   authMiddleware,

// //   authorizeRole(

// //     "ADMIN"

// //   ),

// //   getAllUsersController

// // );









// // // =======================
// // // GET ALL PROPERTIES
// // // ADMIN ONLY
// // // =======================

// // router.get(

// //   "/properties",

// //   authMiddleware,

// //   authorizeRole(

// //     "ADMIN"

// //   ),

// //   getAllPropertiesController

// // );







// // export default router;


// import {
//   Router,
// } from "express";



// import {
//   getAdminStatsController,
//   getAllUsersController,
//   getAllPropertiesController,
//   getAllBookingsController,
// } from "./admin.controller";



// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";



// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";





// const router = Router();







// // =======================
// // ADMIN DASHBOARD STATS
// // ADMIN ONLY
// // =======================

// router.get(

//   "/stats",

//   authMiddleware,

//   authorizeRole(

//     "ADMIN"

//   ),

//   getAdminStatsController

// );









// // =======================
// // GET ALL USERS
// // ADMIN ONLY
// // =======================

// router.get(

//   "/users",

//   authMiddleware,

//   authorizeRole(

//     "ADMIN"

//   ),

//   getAllUsersController

// );









// // =======================
// // GET ALL PROPERTIES
// // ADMIN ONLY
// // =======================

// router.get(

//   "/properties",

//   authMiddleware,

//   authorizeRole(

//     "ADMIN"

//   ),

//   getAllPropertiesController

// );









// // =======================
// // GET ALL BOOKINGS
// // ADMIN ONLY
// // =======================

// router.get(

//   "/bookings",

//   authMiddleware,

//   authorizeRole(

//     "ADMIN"

//   ),

//   getAllBookingsController

// );







// export default router;

import {
  Router,
} from "express";



import {
  getAdminStatsController,
  getAllUsersController,
  getAllPropertiesController,
  getAllBookingsController,
  deleteUserController,
} from "./admin.controller";



import {
  authMiddleware,
} from "../../middlewares/auth.middleware";



import {
  authorizeRole,
} from "../../middlewares/role.middleware";





const router = Router();







// =======================
// ADMIN DASHBOARD STATS
// ADMIN ONLY
// =======================

router.get(

  "/stats",

  authMiddleware,

  authorizeRole(

    "ADMIN"

  ),

  getAdminStatsController

);









// =======================
// GET ALL USERS
// ADMIN ONLY
// =======================

router.get(

  "/users",

  authMiddleware,

  authorizeRole(

    "ADMIN"

  ),

  getAllUsersController

);









// =======================
// DELETE USER
// ADMIN ONLY
// =======================

router.delete(

  "/users/:id",

  authMiddleware,

  authorizeRole(

    "ADMIN"

  ),

  deleteUserController

);









// =======================
// GET ALL PROPERTIES
// ADMIN ONLY
// =======================

router.get(

  "/properties",

  authMiddleware,

  authorizeRole(

    "ADMIN"

  ),

  getAllPropertiesController

);









// =======================
// GET ALL BOOKINGS
// ADMIN ONLY
// =======================

router.get(

  "/bookings",

  authMiddleware,

  authorizeRole(

    "ADMIN"

  ),

  getAllBookingsController

);







export default router;