import {
  Router,
} from "express";


import {
  getAdminStatsController,
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






export default router;