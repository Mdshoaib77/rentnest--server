"use strict";
// // // // // // import {
// // // // // //   Router,
// // // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
// // // // // // import {
// // // // // //   getAdminStatsController,
// // // // // // } from "./admin.controller";
// // // // // // import {
// // // // // //   authMiddleware,
// // // // // // } from "../../middlewares/auth.middleware";
// // // // // // import {
// // // // // //   authorizeRole,
// // // // // // } from "../../middlewares/role.middleware";
// // // // // // const router = Router();
// // // // // // // =======================
// // // // // // // ADMIN DASHBOARD STATS
// // // // // // // ADMIN ONLY
// // // // // // // =======================
// // // // // // router.get(
// // // // // //   "/stats",
// // // // // //   authMiddleware,
// // // // // //   authorizeRole(
// // // // // //     "ADMIN"
// // // // // //   ),
// // // // // //   getAdminStatsController
// // // // // // );
// // // // // // export default router;
// // // // // import {
// // // // //   Router,
// // // // // } from "express";
// // // // // import {
// // // // //   getAdminStatsController,
// // // // //   getAllUsersController,
// // // // // } from "./admin.controller";
// // // // // import {
// // // // //   authMiddleware,
// // // // // } from "../../middlewares/auth.middleware";
// // // // // import {
// // // // //   authorizeRole,
// // // // // } from "../../middlewares/role.middleware";
// // // // // const router = Router();
// // // // // // =======================
// // // // // // ADMIN DASHBOARD STATS
// // // // // // ADMIN ONLY
// // // // // // =======================
// // // // // router.get(
// // // // //   "/stats",
// // // // //   authMiddleware,
// // // // //   authorizeRole(
// // // // //     "ADMIN"
// // // // //   ),
// // // // //   getAdminStatsController
// // // // // );
// // // // // // =======================
// // // // // // GET ALL USERS
// // // // // // ADMIN ONLY
// // // // // // =======================
// // // // // router.get(
// // // // //   "/users",
// // // // //   authMiddleware,
// // // // //   authorizeRole(
// // // // //     "ADMIN"
// // // // //   ),
// // // // //   getAllUsersController
// // // // // );
// // // // // export default router;
// // // // import {
// // // //   Router,
// // // // } from "express";
// // // // import {
// // // //   getAdminStatsController,
// // // //   getAllUsersController,
// // // //   getAllPropertiesController,
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
// // // // // =======================
// // // // // GET ALL USERS
// // // // // ADMIN ONLY
// // // // // =======================
// // // // router.get(
// // // //   "/users",
// // // //   authMiddleware,
// // // //   authorizeRole(
// // // //     "ADMIN"
// // // //   ),
// // // //   getAllUsersController
// // // // );
// // // // // =======================
// // // // // GET ALL PROPERTIES
// // // // // ADMIN ONLY
// // // // // =======================
// // // // router.get(
// // // //   "/properties",
// // // //   authMiddleware,
// // // //   authorizeRole(
// // // //     "ADMIN"
// // // //   ),
// // // //   getAllPropertiesController
// // // // );
// // // // export default router;
// // // import {
// // //   Router,
// // // } from "express";
// // // import {
// // //   getAdminStatsController,
// // //   getAllUsersController,
// // //   getAllPropertiesController,
// // //   getAllBookingsController,
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
// // // // =======================
// // // // GET ALL PROPERTIES
// // // // ADMIN ONLY
// // // // =======================
// // // router.get(
// // //   "/properties",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   getAllPropertiesController
// // // );
// // // // =======================
// // // // GET ALL BOOKINGS
// // // // ADMIN ONLY
// // // // =======================
// // // router.get(
// // //   "/bookings",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   getAllBookingsController
// // // );
// // // export default router;
// // import {
// //   Router,
// // } from "express";
// // import {
// //   getAdminStatsController,
// //   getAllUsersController,
// //   getAllPropertiesController,
// //   getAllBookingsController,
// //   deleteUserController,
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
// // // DELETE USER
// // // ADMIN ONLY
// // // =======================
// // router.delete(
// //   "/users/:id",
// //   authMiddleware,
// //   authorizeRole(
// //     "ADMIN"
// //   ),
// //   deleteUserController
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
// // // =======================
// // // GET ALL BOOKINGS
// // // ADMIN ONLY
// // // =======================
// // router.get(
// //   "/bookings",
// //   authMiddleware,
// //   authorizeRole(
// //     "ADMIN"
// //   ),
// //   getAllBookingsController
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
//   deleteUserController,
//   deletePropertyController,
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
// // DELETE USER
// // ADMIN ONLY
// // =======================
// router.delete(
//   "/users/:id",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   deleteUserController
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
// // DELETE PROPERTY
// // ADMIN ONLY
// // =======================
// router.delete(
//   "/properties/:id",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   deletePropertyController
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
// import {
//   Router,
// } from "express";
// import {
//   getAdminStatsController,
//   getAllUsersController,
//   getAllPropertiesController,
//   getAllBookingsController,
//   deleteUserController,
//   deletePropertyController,
//   updateBookingStatusController,
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
// // DELETE USER
// // ADMIN ONLY
// // =======================
// router.delete(
//   "/users/:id",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   deleteUserController
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
// // DELETE PROPERTY
// // ADMIN ONLY
// // =======================
// router.delete(
//   "/properties/:id",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   deletePropertyController
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
// // =======================
// // UPDATE BOOKING STATUS
// // ADMIN ONLY
// // =======================
// router.patch(
//   "/bookings/:id/status",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   updateBookingStatusController
// );
// export default router;
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// =======================
// ADMIN DASHBOARD STATS
// =======================
/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Get admin dashboard statistics
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *
 *       200:
 *         description: Admin statistics fetched successfully
 *
 */
router.get("/stats", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.getAdminStatsController);
// =======================
// GET ALL USERS
// =======================
/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *
 *       200:
 *         description: Users fetched successfully
 *
 */
router.get("/users", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.getAllUsersController);
// =======================
// DELETE USER
// =======================
/**
 * @swagger
 * /api/admin/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *
 *     responses:
 *
 *       200:
 *         description: User deleted successfully
 *
 *       400:
 *         description: Delete failed
 *
 */
router.delete("/users/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.deleteUserController);
// =======================
// GET ALL PROPERTIES
// =======================
/**
 * @swagger
 * /api/admin/properties:
 *   get:
 *     summary: Get all properties for admin
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *
 *       200:
 *         description: Properties fetched successfully
 *
 */
router.get("/properties", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.getAllPropertiesController);
// =======================
// DELETE PROPERTY
// =======================
/**
 * @swagger
 * /api/admin/properties/{id}:
 *   delete:
 *     summary: Delete property by admin
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *
 *         schema:
 *           type: string
 *
 *
 *     responses:
 *
 *       200:
 *         description: Property deleted successfully
 *
 *       400:
 *         description: Cannot delete property with existing bookings
 *
 */
router.delete("/properties/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.deletePropertyController);
// =======================
// GET ALL BOOKINGS
// =======================
/**
 * @swagger
 * /api/admin/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *
 *       200:
 *         description: Bookings fetched successfully
 *
 */
router.get("/bookings", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.getAllBookingsController);
// =======================
// UPDATE BOOKING STATUS
// =======================
/**
 * @swagger
 * /api/admin/bookings/{id}/status:
 *   patch:
 *     summary: Update booking status by admin
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *
 *         schema:
 *           type: string
 *
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *
 *           schema:
 *             type: object
 *
 *             required:
 *               - status
 *
 *             properties:
 *
 *               status:
 *                 type: string
 *
 *                 enum:
 *                   - PENDING
 *                   - ACCEPTED
 *                   - REJECTED
 *                   - PAID
 *
 *                 example: PAID
 *
 *
 *     responses:
 *
 *       200:
 *         description: Booking status updated successfully
 *
 */
router.patch("/bookings/:id/status", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), admin_controller_1.updateBookingStatusController);
exports.default = router;
