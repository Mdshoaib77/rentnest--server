// import {
//   Router,
// } from "express";


// import {
//   getAdminStatsController,
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






// export default router;


import {
  Router,
} from "express";



import {
  getAdminStatsController,
  getAllUsersController,
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







export default router;